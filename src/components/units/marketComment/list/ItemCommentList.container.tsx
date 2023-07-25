import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./ItemCommentList.presenter";
import { FETCH_ITEM_COMMENTS } from "./ItemCommentList.queries";

export default function ItemCommentList(): JSX.Element {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_ITEM_COMMENTS, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  console.log(data);
  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditemQuestions === undefined)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return <BoardCommentListUI data={data} onLoadMore={onLoadMore} />;
}
