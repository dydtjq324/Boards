import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export const FETCH_TOTALMYPOINT = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const useQueryTransactions = () => {
  const result =
    useQuery<Pick<IQuery, "fetchPointTransactions">>(FETCH_TOTALMYPOINT);
  return result;
};
