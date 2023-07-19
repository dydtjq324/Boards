import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

const FETCH_UsedBest = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      price
      images
      tags
    }
  }
`;

export const useQueryfetchUseditemsOfTheBest = () => {
  const result =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_UsedBest);
  return result;
};
