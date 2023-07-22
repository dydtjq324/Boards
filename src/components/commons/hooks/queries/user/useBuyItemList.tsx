import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

const FETCH_MYPOINT = gql`
  query fetchPointTransactionsOfBuying {
    fetchPointTransactionsOfBuying {
      _id
    }
  }
`;

export const useQueryBuyItem = () => {
  const result =
    useQuery<Pick<IQuery, "fetchPointTransactionsOfBuying">>(FETCH_MYPOINT);
  return result;
};
