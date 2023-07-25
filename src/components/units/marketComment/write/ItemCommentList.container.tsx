import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import BoardCommentWriteUI from "./ItemCommentList.presenter";
import { FETCH_ITEM_COMMENTS } from "../list/ItemCommentList.queries";
import {
  CREATE_ITEM_COMMENT,
  UPDATE_ITEM_COMMENT,
} from "./BoardCommentItemCommentListWrite.queries";
import type {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import ItemCommentWriteUI from "./ItemCommentList.presenter";

export default function ItemCommentWrite(props: any): JSX.Element {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_ITEM_COMMENT);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_ITEM_COMMENT);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickWrite = async (): Promise<void> => {
    try {
      if (typeof router.query.useditemId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }

      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_ITEM_COMMENTS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    setContents("");
  };

  const onClickUpdate = async (): Promise<void> => {
    if (contents === "") {
      alert("내용이 수정되지 않았습니다.");
      return;
    }

    try {
      const updateUseditemQuestionInput: any = {};
      if (contents !== "") updateUseditemQuestionInput.contents = contents;

      if (typeof props.el?._id !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_ITEM_COMMENTS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ItemCommentWriteUI
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      contents={contents}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
