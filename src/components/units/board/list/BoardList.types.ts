<<<<<<< HEAD
import type { ApolloQueryResult, OperationVariables } from "@apollo/client";
=======
import type { ApolloQueryResult } from "@apollo/client";
>>>>>>> 1bb0169783bca8bc62494df73f3fb29217577036
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
<<<<<<< HEAD
  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  count?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
=======
  count?: number;
>>>>>>> 1bb0169783bca8bc62494df73f3fb29217577036
}
