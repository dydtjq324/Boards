import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";
import type { MouseEvent } from "react";

export default function BoardList(): JSX.Element {
  const router = useRouter();
<<<<<<< HEAD
  const [keyword, setKeyword] = useState("");

=======
>>>>>>> 1bb0169783bca8bc62494df73f3fb29217577036
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

<<<<<<< HEAD
  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
=======
  const { data: dataBoardsCount } = useQuery<
>>>>>>> 1bb0169783bca8bc62494df73f3fb29217577036
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLDivElement>
  ): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
<<<<<<< HEAD
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
=======
      count={dataBoardsCount?.fetchBoardsCount}
>>>>>>> 1bb0169783bca8bc62494df73f3fb29217577036
    />
  );
}
