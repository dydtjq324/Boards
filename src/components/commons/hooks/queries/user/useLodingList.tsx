import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_MYPOINT = gql`
  query fetchPointTransactionsOfLoading {
    fetchPointTransactionsOfLoading {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const useQueryLoding = () => {
  const result =
    useQuery<Pick<IQuery, "fetchPointTransactionsOfLoading">>(FETCH_MYPOINT);
  return result;
};
