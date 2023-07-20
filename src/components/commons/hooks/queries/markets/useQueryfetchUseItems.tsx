import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

const FETCH_UsedBest = gql`
  query fetchUseditems {
    fetchUseditems {
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

export const useQueryfetchUseditems = () => {
  const result = useQuery<Pick<IQuery, "fetchUseditems">>(FETCH_UsedBest);
  return result;
};
