import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../../commons/types/generated/types";

export const DELETE_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const MutationDeleteItem = () => {
  const mutation = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_ITEM);
  return mutation;
};
