import { useQuery } from "@apollo/client";
import { useMutationDisLikeBoard } from "../mutations/boards/useMutationDislikeBoard";
import { useMutationLikeBoard } from "../mutations/boards/useMutationLikeBoard";
import { FETCH_BOARD } from "../queries/boards/useQueryFetchBoard";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

interface IUseBoardLikeArgs {
  boardId: string;
}

export const useBoardLike = (args: IUseBoardLikeArgs) => {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: args.boardId } }
  );
  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDisLikeBoard();

  const onClickLike = async () => {
    await likeBoard({
      variables: { boardId: args.boardId },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: args.boardId },
          data: {
            fetchBoard: {
              _id: args.boardId,
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: args.boardId },
      //   },
      // ],
    });
  };

  const onClickDislike = async () => {
    await dislikeBoard({
      variables: { boardId: args.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: args.boardId },
        },
      ],
    });
  };

  return {
    onClickLike,
    onClickDislike,
  };
};
