import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../../commons/types/generated/types";

const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      contents
      price
      name
      useditemAddress {
        lat
        lng
      }
    }
  }
`;

export const createItemMutation = () => {
  const mutation = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);
  return mutation;
};
