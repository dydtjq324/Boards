import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../../src/commons/libraries/utils";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";
import { useState } from "react";
import type { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD } from "./BoardDetail.queries";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const router = useRouter();
  const onClickOpenModal = () => {
    setIsOpenDeleteModal(true);
  };
  const onClickDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };
  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteBoard({
        variables: {
          boardId: `${router.query.boardId}`,
        },
      });
      alert("삭제되었습니다");
      setIsOpenDeleteModal(false);
      onClickMoveToPage("/boards")();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal
          visible={true}
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
                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </S.CreatedAt>
              </S.Info>
            </S.AvatarWrapper>
            <S.IconWrapper>
              <S.LinkIcon src="/images/board/detail/link.png" />
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                  props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }`}
              >
                <S.LocationIcon src="/images/board/detail/location.png" />
              </Tooltip>
            </S.IconWrapper>
          </S.Header>
          <S.Body>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <S.ImageWrapper>
              {props.data?.fetchBoard.images
                ?.filter((el) => el)
                .map((el) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.ImageWrapper>
            <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
            {props.data?.fetchBoard.youtubeUrl !== "" && (
              <S.Youtube
                url={props.data?.fetchBoard.youtubeUrl ?? ""}
                width="486px"
                height="240px"
              />
            )}
          </S.Body>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.Button onClick={props.onClickMoveToBoards}>목록으로</S.Button>
          <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
          <S.Button onClick={onClickOpenModal}>삭제하기</S.Button>
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
}
