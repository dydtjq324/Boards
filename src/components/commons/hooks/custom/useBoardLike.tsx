import { useMutationDisLikeBoard } from "../mutations/boards/useMutationDislikeBoard";
import { useMutationLikeBoard } from "../mutations/boards/useMutationLikeBoard";
import { FETCH_BOARD } from "../queries/boards/useQueryFetchBoard";

interface IUseBoardLikeArgs {
  boardId: string;
}

export const useBoardLike = (args: IUseBoardLikeArgs) => {
  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDisLikeBoard();

  const onClickLike = async () => {
    await likeBoard({
      variables: { boardId: args.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: args.boardId },
        },
      ],
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
