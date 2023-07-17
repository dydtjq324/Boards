import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      dislikeCount
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`;

export const useQueryFetchBoard = (variables: IQueryFetchBoardArgs) => {
  const query = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables }
  );
  return query;
};
