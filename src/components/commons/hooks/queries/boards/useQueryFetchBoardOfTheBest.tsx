import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

const FETCH_Best = gql`
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
  const result = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_Best);
  return result;
};
