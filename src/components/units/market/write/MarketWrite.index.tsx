import { useEffect, useState } from "react";
import { createBoardMutation } from "../../../commons/hooks/mutations/boards/createBoardMutation";
import { updateBoardMutation } from "../../../commons/hooks/mutations/boards/updateBoardMutation";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./MarketWrite.styles";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import type { Address } from "react-daum-postcode";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { MarketWriteProps, IFormData } from "./MarketWrite.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./MarketWrite.vaildation";
import Head from "next/head";

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
  const { register, formState, watch, setValue, trigger } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [updateBoard] = updateBoardMutation();
  const [createBoard] = createBoardMutation();
  const [isActive, setIsActive] = useState(false);
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const onChangeLat = (e: any) => {
    setLat(e.target.value);
  };
  const onChangeLng = (e: any) => {
    setLng(e.target.value);
  };
  const onCompleteAddressSearch = () => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a87bb92b00b671f21fed64e087b05422";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async (): Promise<void> => {
    const { title, contents, addressDetail } = watch();
    if (formState.isValid) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              title,
              contents,

              boardAddress: {
                address,
                addressDetail,
              },
              images: [...fileUrls],
            },
          },
        });

        if (result.data?.createBoard._id === undefined) {
          alert("요청에 문제가 있습니다.");
          return;
        }
        alert("게시글 정상등록");
        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    const { title, contents, addressDetail } = watch();
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          updateBoardInput,
        },
      });
      alert("수정이 완료되었습니다");
      void router.push(`/boards/${result.data?.updateBoard._id}`);
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
      <S.Wrapper>
        <S.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Title>

        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          <S.Subject
            {...register("title")}
            type="text"
            placeholder="상품명을 작성해주세요."
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{formState.errors.title?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>가격</S.Label>
          <S.Subject
            {...register("price")}
            type="text"
            placeholder="금액을 작성해주세요."
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{formState.errors.title?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.ContentsQuill
            modules={modules}
            placeholder="내용을 작성해주세요."
            onChange={onChageContents}
            defaultValue={props.data?.fetchBoard.contents}
          />

          <S.Error>{formState.errors.contents?.message}</S.Error>
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
          <S.AddressContainer>
            <S.AddressDetailContainer>
              <S.Label>거래 장소</S.Label>
              <S.ZipcodeWrapper>
                <S.Zipcode placeholder="위도" onChange={onChangeLat} />
                <S.Zipcode placeholder="경도" onChange={onChangeLng} />
                <button onClick={onCompleteAddressSearch}>찾기</button>
              </S.ZipcodeWrapper>

              <S.Address
                {...register("addressDetail")}
                placeholder="상세주소"
                defaultValue={
                  props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }
              />
            </S.AddressDetailContainer>

            <S.KakaoMap
              id="map"
              style={{ width: 400, height: 300 }}
            ></S.KakaoMap>
          </S.AddressContainer>
        </S.InputWrapper>

        <S.ButtonWrapper>
          <S.SubmitButton
            style={{ backgroundColor: formState.isValid ? "yellow" : "" }}
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
