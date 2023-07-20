declare const window: typeof globalThis & {
  IMP: any;
};
import {
  FETCH_USER_LOGGED_IN,
  useQueryLoggedIn,
} from "../../commons/hooks/queries/user/useLoggedIn";
import { useState } from "react";
import { useMutationCreatePoint } from "../../commons/hooks/mutations/user/createPoint";
import * as S from "./Myinfo.styles";
export default function MyPageUI(): JSX.Element {
  const { data } = useQueryLoggedIn();
  const [pay, setPay] = useState(0);
  const [mutation] = useMutationCreatePoint();
  const onChangePay = (e: any) => {
    setPay(e.target.value);
  };

  const onClickPayment = (): void => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000a
    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "마우스",
        amount: pay,
      },
      (rsp: any) => {
        if (rsp.success === true) {
          const result = mutation({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          });
          setPay((pre) => 0);
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <S.Title>MYPAGE</S.Title>
      <S.Avatar src="/images/avatar.png" />
      <S.Title>{data?.fetchUserLoggedIn.name}</S.Title>
      <S.MyPoint>{data?.fetchUserLoggedIn.userPoint?.amount} 포인트</S.MyPoint>
      <button onClick={onClickPayment}>결제하기</button>
      <input onChange={onChangePay} value={pay} />
    </>
  );
}
