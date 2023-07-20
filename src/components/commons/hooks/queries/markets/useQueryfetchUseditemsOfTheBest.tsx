import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

const FETCH_UsedBest = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      price
      contents
      images
      name
      pickedCount
      seller {
        name
      }
    }
  }
`;

export const useQueryfetchUseditemsOfTheBest = () => {
  const result =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_UsedBest);
  return result;
};
