import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      title
      contents
      images
      writer
      createdAt
      likeCount
    }
  }
`;

export const useQueryFetchBoardOfTheBest = () => {
  const result = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST);
  return result;
};
