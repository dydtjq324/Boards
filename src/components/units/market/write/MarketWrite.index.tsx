import { useEffect, useState } from "react";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./MarketWrite.styles";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { IUpdateUseditemInput } from "../../../../commons/types/generated/types";
import { MarketWriteProps } from "./MarketWrite.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./MarketWrite.vaildation";
import { createItemMutation } from "../../../commons/hooks/mutations/markets/createItemMutation";
import { updateItemMutation } from "../../../commons/hooks/mutations/markets/updateItemMutation";
import { FETCH_ITEM } from "../../../commons/hooks/queries/markets/useQueryFetchItem";
import { FETCH_USEDITEMS } from "../../../commons/hooks/queries/markets/usequeryfetchUseditems";
import { Address } from "react-daum-postcode";

declare const window: typeof globalThis & {
  kakao: any;
};
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};
export default function MarketWriteUI(props: MarketWriteProps): JSX.Element {
  const router = useRouter();
  const { register, formState, watch, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [updateItem] = updateItemMutation();
  const [createItem] = createItemMutation();
  const [isActive, setIsActive] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearchas = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
    console.log(data.address);
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=a87bb92b00b671f21fed64e087b05422&libraries=services&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          data.address,
          setAddress(data.address),
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래위치</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  };
  const handleCancel = (): void => {
    setIsOpen(false);
  };

  // const onCompleteAddressSearch = () => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a87bb92b00b671f21fed64e087b05422&libraries=services";
  //   document.head.appendChild(script);

  //   window.kakao.maps.load(() => {
  //     const { lng, lat } = watch();
  //     const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
  //     const options = {
  //       // 지도를 생성할 때 필요한 기본 옵션
  //       center: new window.kakao.maps.LatLng(Number(lat), Number(lng)), // 지도의 중심좌표.
  //       level: 3, // 지도의 레벨(확대, 축소 정도)
  //     };
  //     const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  //   });
  // };

  useEffect(() => {
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async (): Promise<void> => {
    const { contents, price, name, addressDetail } = watch();
    if (formState.isValid) {
      try {
        const result = await createItem({
          variables: {
            createUseditemInput: {
              contents,
              useditemAddress: {
                address: address,
                addressDetail: addressDetail,
              },
              images: [...fileUrls],
              name,
              price: Number(price),
              remarks: "",
            },
          },
        });

        if (result.data?.createUseditem._id === undefined) {
          alert("요청에 문제가 있습니다.");
          return;
        }
        alert("게시글 정상등록");
        void router.push(`/markets/${result.data?.createUseditem._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    const { contents, name, price, addressDetail } = watch();
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    const updateUseditemInput: IUpdateUseditemInput = {};
    if (contents !== "") updateUseditemInput.contents = contents;
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    if (name !== "") updateUseditemInput.name = name;
    if (price !== Number("")) updateUseditemInput.price = Number(price);
    if (addressDetail !== "") {
      updateUseditemInput.useditemAddress = {};

      if (addressDetail !== "")
        updateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }
    try {
      const result = await updateItem({
        variables: {
          useditemId: String(router.query.useditemId),
          updateUseditemInput,
        },
        refetchQueries: [
          {
            query: FETCH_ITEM,
            variables: { useditemId: router.query.useditemId },
          },
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      alert("수정이 완료되었습니다");
      void router.push(`/markets/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChageContents = (value: string): void => {
    // register로 등록하지않고 강제로 넣어주는 기능
    // 글 작성하다가 전부지우면 태그들이 남아서 오류체크하는데 어려움이있는걸 해결
    setValue("contents", value);
    // onChange 됐으니까 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기능
    void trigger("contents");
  };

  return (
    <>
      {isOpen && (
        <S.AddressModal open={true} onCancel={handleCancel}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearchas} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Title>

        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <S.Subject
            {...register("name")}
            type="text"
            placeholder="상품명을 작성해주세요."
            defaultValue={props.data?.fetchUseditem.name}
          />
          <S.Error>{formState.errors.name?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>가격</S.Label>
          <S.Subject
            {...register("price")}
            type="number"
            placeholder="금액을 작성해주세요."
            defaultValue={
              props.data?.fetchUseditem.price
                ? String(props.data?.fetchUseditem.price)
                : ""
            } // price 값이 있을 때만 숫자를 문자열로 변환
          />

          <S.Error>{formState.errors.price?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품설명</S.Label>
          <S.ContentsQuill
            modules={modules}
            placeholder="내용을 작성해주세요."
            onChange={onChageContents}
            defaultValue={props.data?.fetchUseditem.contents}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.ImageWrapper>
            <S.Label>사진첨부</S.Label>
            <S.ImageBox>
              {fileUrls.map((el, index) => (
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={onChangeFileUrls}
                />
              ))}
            </S.ImageBox>
          </S.ImageWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode
              placeholder="07250"
              readOnly
              value={
                zipcode !== ""
                  ? zipcode
                  : props.data?.fetchUseditem.useditemAddress?.zipcode ?? ""
              }
            />

            <S.SearchButton onClick={onClickAddressSearch}>
              우편번호 검색
            </S.SearchButton>
          </S.ZipcodeWrapper>
          <S.Address
            readOnly
            value={
              address !== ""
                ? address
                : props.data?.fetchUseditem.useditemAddress?.address ?? ""
            }
          />
          <S.Address
            placeholder="상세주소입력"
            {...register("addressDetail")}
            defaultValue={
              props.data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
            }
          />
        </S.InputWrapper>

        {address ? <S.KakaoMap id="map"></S.KakaoMap> : <></>}
        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={props.isEdit ? onClickUpdate : onClickSubmit}
            isActive={props.isEdit ? true : isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
