declare const window: typeof globalThis & {
  IMP: any;
};
import Head from "next/head";
import {
  FETCH_USER_LOGGED_IN,
  useQueryLoggedIn,
} from "../../commons/hooks/queries/user/useLoggedIn";
import { useState } from "react";
import { useMutationCreatePoint } from "../../commons/hooks/mutations/user/createPoint";
import * as S from "./Myinfo.styles";
import {
  FETCH_TOTALMYPOINT,
  useQueryTransactions,
} from "../../commons/hooks/queries/user/useTransaction";
import { getDate } from "../../../commons/libraries/utils";
import { useQuerysellItem } from "../../commons/hooks/queries/user/useSellitemList";
import { useQueryBuyItem } from "../../commons/hooks/queries/user/useBuyItemList";
import {
  FETCH_MYPOINT,
  useQueryLoding,
} from "../../commons/hooks/queries/user/useLodingList";
export default function MyPageUI(): JSX.Element {
  const { data } = useQueryLoggedIn();
  const { data: TransactionsList } = useQueryTransactions();
  const { data: SellList } = useQuerysellItem();
  const { data: BuyList } = useQueryBuyItem();
  const { data: LoadList } = useQueryLoding();

  const [activeTab, setActiveTab] = useState("tab1");
  const [pay, setPay] = useState("");
  const [mutation] = useMutationCreatePoint();
  const onChangePay = (e: any) => {
    setPay(e.target.value);
  };
  console.log(TransactionsList);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  const onClickPayment = (): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
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
              {
                query: FETCH_TOTALMYPOINT,
              },
              {
                query: FETCH_MYPOINT,
              },
            ],
          });
        } else {
          // 결제 실패 시 로직,
        }
      }
    );

    setPay((pre) => "");
  };

  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <S.Wrapper>
        <S.MypageTitleContainer>
          <S.MypageTitle
            onClick={() => handleTabClick("tab1")}
            style={{
              backgroundColor: activeTab === "tab1" ? "#cefbc9" : "#eaeaea",
            }}
          >
            전체내역
          </S.MypageTitle>
          <S.MypageTitle
            onClick={() => handleTabClick("tab2")}
            style={{
              backgroundColor: activeTab === "tab2" ? "#cefbc9" : "#eaeaea",
            }}
          >
            충전내역
          </S.MypageTitle>
          <S.MypageTitle
            onClick={() => handleTabClick("tab3")}
            style={{
              backgroundColor: activeTab === "tab3" ? "#cefbc9" : "#eaeaea",
            }}
          >
            구매내역
          </S.MypageTitle>
          <S.MypageTitle
            onClick={() => handleTabClick("tab4")}
            style={{
              backgroundColor: activeTab === "tab4" ? "#cefbc9" : "#eaeaea",
            }}
          >
            판매내역
          </S.MypageTitle>
        </S.MypageTitleContainer>
        <S.MypageDivider>
          <S.MypageContainer>
            <S.Title>MYPAGE</S.Title>
            <S.Avatar src="/images/avatar.png" />
            <S.Title>{data?.fetchUserLoggedIn.name}</S.Title>
            <S.MyPoint>
              {data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString()} 원
            </S.MyPoint>

            <S.InputMoney
              type="number"
              onChange={onChangePay}
              value={pay}
              placeholder="금액입력"
            />

            <S.Button onClick={onClickPayment}>충전하기</S.Button>
          </S.MypageContainer>
          <S.TransactionsList>
            <S.Row_Title>
              <S.ColumnHeaderBasic>상태</S.ColumnHeaderBasic>
              <S.ColumnHeaderTitle>금액</S.ColumnHeaderTitle>
              <S.ColumnHeaderBasic>잔액</S.ColumnHeaderBasic>
              <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
            </S.Row_Title>

            {activeTab === "tab1" && (
              <>
                {TransactionsList?.fetchPointTransactions.map((el) => (
                  <S.Row key={el._id}>
                    <S.ColumnBasic>{el.status}</S.ColumnBasic>
                    <S.ColumnTitle>
                      {el.amount?.toLocaleString()}원
                    </S.ColumnTitle>
                    <S.ColumnBasic>
                      {el.balance?.toLocaleString()}원
                    </S.ColumnBasic>
                    <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                  </S.Row>
                ))}
              </>
            )}

            {activeTab === "tab2" && (
              <>
                {LoadList?.fetchPointTransactionsOfLoading.map((el) => (
                  <S.Row key={el._id}>
                    <S.ColumnBasic>{el.status}</S.ColumnBasic>
                    <S.ColumnTitle>
                      {el.amount?.toLocaleString()}원
                    </S.ColumnTitle>
                    <S.ColumnBasic>
                      {el.balance?.toLocaleString()}원
                    </S.ColumnBasic>
                    <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                  </S.Row>
                ))}
              </>
            )}
            {activeTab === "tab3" && (
              <>
                {BuyList?.fetchPointTransactionsOfBuying.map((el) => (
                  <S.Row key={el._id}>
                    <S.ColumnBasic>{el.status}</S.ColumnBasic>
                    <S.ColumnTitle>
                      {el.amount?.toLocaleString()}원
                    </S.ColumnTitle>
                    <S.ColumnBasic>
                      {el.balance?.toLocaleString()}원
                    </S.ColumnBasic>
                    <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                  </S.Row>
                ))}
              </>
            )}
            {activeTab === "tab4" && (
              <>
                {SellList?.fetchPointTransactionsOfSelling.map((el) => (
                  <S.Row key={el._id}>
                    <S.ColumnBasic>{el.status}</S.ColumnBasic>
                    <S.ColumnTitle>
                      {el.amount?.toLocaleString()}원
                    </S.ColumnTitle>
                    <S.ColumnBasic>
                      {el.balance?.toLocaleString()}원
                    </S.ColumnBasic>
                    <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                  </S.Row>
                ))}
              </>
            )}
          </S.TransactionsList>
        </S.MypageDivider>
        <S.Footer />
      </S.Wrapper>
    </>
  );
}
