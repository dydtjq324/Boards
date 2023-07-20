import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_USEDITEM = gql`
  query fetchUseditems($page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search) {
      _id
      price
      contents
      images
      name
      pickedCount
      tags
      remarks
      seller {
        name
      }
    }
  }
`;

export const useQueryFetchUseditems = () => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEM);
  return result;
};
