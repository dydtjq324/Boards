import { gql, useMutation } from "@apollo/client";
import { useQueryLoggedIn } from "../../commons/hooks/queries/user/useLoggedIn";

import { useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../commons/types/generated/types";

declare const window: typeof globalThis & {
  IMP: any;
};

export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;
const CREATE_POING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

export default function MyPageUI(): JSX.Element {
  const { data } = useQueryLoggedIn();
  const [pay, setPay] = useState(3000);

  const onChangePay = (e: any) => {
    setPay(e.target.value);
  };
  const [mutationa] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POING);

  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "마우스",
        amount: pay,
        buyer_name: data?.fetchUserLoggedIn.name,
      },
      async (rsp: any) => {
        if (rsp.success === true) {
          console.log(rsp);
          const result = await mutationa({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
        } else {
          alert("결제실패");
        }
      }
    );
  };
  return (
    <>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>

      <button onClick={onClickPayment}>결제하기</button>
      <input onChange={onChangePay} />
    </>
  );
}
