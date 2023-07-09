import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export default function BoardList(): JSX.Element {
  const router = useRouter();

  //  10개데이터 받아오기
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  // 페이지네이션의 마지막을 계산하기위해 데이터 총개수를 가져오기
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  /** 게시글 작성하기버튼 */
  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  };

  /** 게시글 개별 클릭시이동버튼 */
  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLDivElement>
  ): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };
  //프롭스로 데이터 내려주기
  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
