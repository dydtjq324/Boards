import * as S from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardDetailUIProps } from "./MarketDetail.types";
import { useEffect, useState } from "react";
import Dompurify from "dompurify";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useQueryIdChecker } from "../../../commons/hooks/custom/useQueryIdChecker";
import { MutationDeleteBoard } from "../../../commons/hooks/mutations/boards/deleteBoardMutation";
import {
  FETCH_ITEM,
  useQueryFetchItem,
} from "../../../commons/hooks/queries/markets/useQueryFetchItem";
import { useQueryLoggedIn } from "../../../commons/hooks/queries/user/useLoggedIn";
import { MutationDeleteItem } from "../../../commons/hooks/mutations/markets/deleteItemMutation";
import { FETCH_USEDITEMS } from "../../../commons/hooks/queries/markets/usequeryfetchUseditems";
import { PickItem } from "../../../commons/hooks/mutations/markets/pickItemMutation";
import { useMutationBuySell } from "../../../commons/hooks/mutations/user/createBuysell";
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
  console.log(data);
  const [pickItem] = PickItem();
  // useditemId
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
    try {
      await ItemBuySelling({
        variables: {
          useritemId: useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
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
              <S.Heart rev={undefined} onClick={onClickLike} />{" "}
              {data?.fetchUseditem.pickedCount}
            </S.IconWrapper>
          </S.Header>
          <S.Body>
            <S.Title>{data?.fetchUseditem.name}</S.Title>
            <S.MoneyText>
              <S.Money rev={undefined} />{" "}
              {data?.fetchUseditem.price?.toLocaleString()} 원
            </S.MoneyText>
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
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(data?.fetchUseditem.contents ?? ""),
              }}
            ></S.Contents>
          </S.Body>
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
