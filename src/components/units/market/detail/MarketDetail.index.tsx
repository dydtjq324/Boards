import * as S from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardDetailUIProps } from "./MarketDetail.types";
import { useEffect, useState } from "react";
import Dompurify from "dompurify";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useQueryIdChecker } from "../../../commons/hooks/custom/useQueryIdChecker";
import { MutationDeleteBoard } from "../../../commons/hooks/mutations/boards/deleteBoardMutation";
import { useQueryFetchItem } from "../../../commons/hooks/queries/markets/useQueryFetchItem";
export default function UsedItemDetailUI(
  props: IBoardDetailUIProps
): JSX.Element {
  const { id: useditemId } = useQueryIdChecker("useditemId");
  const { data } = useQueryFetchItem({ useditemId: String(useditemId) });
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  // const [deleteBoard] = MutationDeleteBoard();
  console.log(data);
  // 삭제 모달창 띄우기
  const onClickOpenModal = () => {
    setIsOpenDeleteModal(true);
  };
  const onClickDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  //개별 글삭제
  // const onClickDelete = async (
  //   event: MouseEvent<HTMLButtonElement>
  // ): Promise<void> => {
  //   try {
  //     await deleteBoard({
  //       variables: {
  //         useditemId: useditemId,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARDS,
  //           variables: { page: 1 },
  //         },
  //       ],
  //     });
  //     alert("삭제되었습니다");
  //     setIsOpenDeleteModal(false);
  //     onClickMoveToPage("/boards")();
  //   } catch (error) {
  //     if (error instanceof Error) alert(error.message);
  //   }
  // };
  return (
    <>
      {/* {isOpenDeleteModal && (
        <S.PasswordModal
          open={true}
          // onOk={onClickDelete}
          onCancel={onClickDeleteModal}
        >
          삭제하시겠습니까
        </S.PasswordModal>
      )} */}
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
              <S.LinkIcon src="/images/board/detail/link.png" />
            </S.IconWrapper>
          </S.Header>
          <S.Body>
            <S.Title>{data?.fetchUseditem.name}</S.Title>
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
            {/* <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(data?.fetchUseditem.contents ?? ""),
              }}
            ></S.Contents> */}
          </S.Body>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.Button onClick={onClickMoveToPage("/markets")}>목록으로</S.Button>
          <S.Button onClick={onClickMoveToPage(`/markets/${useditemId}/edit`)}>
            수정하기
          </S.Button>
          <S.Button onClick={onClickOpenModal}>삭제하기</S.Button>
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
}
