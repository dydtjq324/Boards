import type {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface ItemCommentListUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
}
