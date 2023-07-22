import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";
import { useState } from "react";
import Dompurify from "dompurify";
import type { MouseEvent } from "react";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useQueryIdChecker } from "../../../commons/hooks/custom/useQueryIdChecker";
import { useBoardLike } from "../../../commons/hooks/custom/useBoardLike";
import { MutationDeleteBoard } from "../../../commons/hooks/mutations/boards/deleteBoardMutation";
import { useQueryFetchBoard } from "../../../commons/hooks/queries/boards/useQueryFetchBoard";
import { FETCH_BOARDS } from "../../../commons/hooks/queries/boards/useQueryFetchBoards";
export default function BoardDetailUI(): JSX.Element {
  const { id: boardId } = useQueryIdChecker("boardId");
  const { data } = useQueryFetchBoard({
    boardId: String(boardId),
  });
  const { onClickLike, onClickDislike } = useBoardLike({
    boardId,
  });
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteBoard] = MutationDeleteBoard();

  // 삭제 모달창 띄우기
  const onClickOpenModal = () => {
    setIsOpenDeleteModal(true);
  };
  const onClickDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  //개별 글삭제
  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteBoard({
        variables: {
          boardId: boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      alert("삭제되었습니다");
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    onClickMoveToPage("/boards")();
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
                <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  {getDate(data?.fetchBoard?.createdAt)}
                </S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>
            <S.IconWrapper>
              <S.LinkIcon src="/images/board/detail/link.png" />
              <Tooltip
                placement="topRight"
                title={`${data?.fetchBoard.boardAddress?.address ?? ""} ${
                  data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }`}
              >
                <S.LocationIcon src="/images/board/detail/location.png" />
              </Tooltip>
            </S.IconWrapper>
          </S.Header>
          <S.Body>
            <S.Title>{data?.fetchBoard?.title}</S.Title>
            <S.ImageWrapper>
              {data?.fetchBoard.images
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
                __html: Dompurify.sanitize(data?.fetchBoard.contents ?? ""),
              }}
            ></S.Contents>
            {data?.fetchBoard.youtubeUrl !== "" && (
              <S.Youtube url={data?.fetchBoard.youtubeUrl ?? ""} />
            )}
            <S.LikeWrapper>
              <S.IconWrapper>
                <S.LikeIcon rev={undefined} onClick={onClickLike} />
                <S.LikeCount>{data?.fetchBoard.likeCount}</S.LikeCount>
              </S.IconWrapper>
              <S.IconWrapper>
                <S.DislikeIcon rev={undefined} onClick={onClickDislike} />
                <S.DislikeCount>{data?.fetchBoard.dislikeCount}</S.DislikeCount>
              </S.IconWrapper>
            </S.LikeWrapper>
          </S.Body>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.Button onClick={onClickMoveToPage("/boards")}>목록으로</S.Button>
          <S.Button onClick={onClickMoveToPage(`/boards/${boardId}/edit`)}>
            수정하기
          </S.Button>
          <S.Button onClick={onClickOpenModal}>삭제하기</S.Button>
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
}
