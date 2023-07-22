import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from "../../../../../commons/types/generated/types";

const CREATE_BUY_SELL = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      contents
    }
  }
`;
export const useMutationBuySell = () => {
  const mutation = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_BUY_SELL);
  return mutation;
};
