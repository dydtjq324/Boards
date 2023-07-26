import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      useditemAddress {
        lat
        lng
        addressDetail
      }
      seller {
        _id
        name
        email
      }
      _id
      price
      contents
      images
      name
      pickedCount
      createdAt
      deletedAt
    }
  }
`;

export const useQueryFetchItem = (variables: IQueryFetchUseditemArgs) => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_ITEM, { variables });
  return query;
};
