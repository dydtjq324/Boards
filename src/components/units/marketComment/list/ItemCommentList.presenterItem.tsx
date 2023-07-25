import { useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_ITEM_COMMENT,
  FETCH_ITEM_COMMENTS,
} from "./ItemCommentList.queries";
import * as S from "./ItemCommentList.styles";
import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/utils";
import BoardCommentWrite from "../write/ItemCommentList.container";

export default function ItemCommentListUIItem(props: any): JSX.Element {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_ITEM_COMMENT);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onClickDelete = async (event: any): Promise<void> => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_ITEM_COMMENTS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      alert("삭제되었습니다");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      {!isEdit ? (
        <S.ItemWrapper key={props.el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el.user.name}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{props.el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={onClickDelete}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ) : (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
