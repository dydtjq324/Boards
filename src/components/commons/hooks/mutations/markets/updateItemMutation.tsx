import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../../../../commons/types/generated/types";

const UPDATE_ITEM = gql`
  mutation updateUseditem(
    $useditemId: ID!
    $updateUseditemInput: UpdateUseditemInput!
  ) {
    updateUseditem(
      useditemId: $useditemId
      updateUseditemInput: $updateUseditemInput
    ) {
      _id
    }
  }
`;

export const updateItemMutation = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_ITEM);

  return mutation;
};
