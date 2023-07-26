import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
import * as S from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardDetailUIProps } from "./MarketDetail.types";
import { useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useQueryIdChecker } from "../../../commons/hooks/custom/useQueryIdChecker";
import {
  FETCH_ITEM,
  useQueryFetchItem,
} from "../../../commons/hooks/queries/markets/useQueryFetchItem";
import { useQueryLoggedIn } from "../../../commons/hooks/queries/user/useLoggedIn";
import { MutationDeleteItem } from "../../../commons/hooks/mutations/markets/deleteItemMutation";
import { FETCH_USEDITEMS } from "../../../commons/hooks/queries/markets/usequeryfetchUseditems";
import { PickItem } from "../../../commons/hooks/mutations/markets/pickItemMutation";
import { useMutationBuySell } from "../../../commons/hooks/mutations/user/createBuysell";
import { FETCH_TOTALMYPOINT } from "../../../commons/hooks/queries/user/useTransaction";
import { FETCH_BUYLIST } from "../../../commons/hooks/queries/user/useBuyItemList";

export default function UsedItemDetailUI(
  props: IBoardDetailUIProps
): JSX.Element {
  const { id: useditemId } = useQueryIdChecker("useditemId");
  const { data } = useQueryFetchItem({ useditemId: String(useditemId) });
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteItem] = MutationDeleteItem();
  const [ItemBuySelling] = useMutationBuySell();
  const { data: logininfo } = useQueryLoggedIn();
  const [pickItem] = PickItem();
  console.log(data);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a87bb92b00b671f21fed64e087b05422";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            data?.fetchUseditem.useditemAddress?.lat,
            data?.fetchUseditem.useditemAddress?.lng
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  // 삭제 모달창 띄우기
  const onClickOpenModal = () => {
    setIsOpenDeleteModal(true);
  };
  const onClickDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  const onClickLike = async () => {
    await pickItem({
      variables: { useditemId: useditemId },
      refetchQueries: [
        {
          query: FETCH_ITEM,
          variables: { useditemId: useditemId },
        },
      ],
    });
  };

  const onClickDelete = async (e: any): Promise<void> => {
    try {
      await deleteItem({
        variables: {
          useditemId: useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
        ],
      });
      alert("삭제되었습니다");
      setIsOpenDeleteModal(false);
      onClickMoveToPage("/markets")();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickBuySelling = async (e: any): Promise<void> => {
    if (!logininfo) {
      alert("로그인후 구매가능합니다");
      return;
    }
    try {
      await ItemBuySelling({
        variables: {
          useritemId: useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
          },
          {
            query: FETCH_BUYLIST,
          },
          {
            query: FETCH_TOTALMYPOINT,
          },
        ],
      });
      alert("구매성공");
      onClickMoveToPage("/markets")();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal
          open={true}
          onOk={onClickDelete}
          onCancel={onClickDeleteModal}
        >
          삭제하시겠습니까
        </S.PasswordModal>
      )}
      <S.Wrapper>
        <S.CardWrapper>
          <S.Header>
            <S.AvatarWrapper>
              <S.Avatar src="/images/avatar.png" />
              <S.Info>
                <S.Writer>{data?.fetchUseditem?.seller?.name}</S.Writer>
                <S.CreatedAt>
                  {getDate(data?.fetchUseditem?.createdAt)}
                </S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>
            <S.IconWrapper>
              <S.Heart rev={undefined} onClick={onClickLike} />
              {data?.fetchUseditem.pickedCount}
            </S.IconWrapper>
          </S.Header>
          <S.Body>
            <S.ImageWrapper>
              {data?.fetchUseditem.images
                ?.filter((el) => el)
                .map((el) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.ImageWrapper>
            <S.Title>{data?.fetchUseditem.name}</S.Title>
            <S.MoneyText>
              {data?.fetchUseditem.price?.toLocaleString()} 원
            </S.MoneyText>

            <S.Contents
              dangerouslySetInnerHTML={{
                __html: data?.fetchUseditem.contents ?? "",
              }}
            ></S.Contents>
          </S.Body>
          <S.KakaoMap id="map"></S.KakaoMap>
          <S.addressDetail>
            {data?.fetchUseditem.useditemAddress?.addressDetail}
          </S.addressDetail>
        </S.CardWrapper>
        <S.BottomWrapper>
          {data?.fetchUseditem.seller?.email ===
          logininfo?.fetchUserLoggedIn.email ? (
            <>
              <S.Button onClick={onClickMoveToPage("/markets")}>
                목록으로
              </S.Button>
              <S.Button
                onClick={onClickMoveToPage(`/markets/${useditemId}/edit`)}
              >
                수정하기
              </S.Button>
              <S.Button onClick={onClickOpenModal}>삭제하기</S.Button>
            </>
          ) : (
            <>
              <S.Button onClick={onClickMoveToPage("/markets")}>
                목록으로
              </S.Button>
              <S.Button onClick={onClickBuySelling}>구매하기</S.Button>
            </>
          )}
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
}
