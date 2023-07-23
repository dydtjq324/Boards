import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";

const GLOBAL_STATE = new InMemoryCache();
interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    // const result = localStorage.getItem("accessToken"); 기존방식
    // 리프레시 토큰 방식
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  // operation 방금실행한 쿼리
  // forword 다시실행할함수
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1.에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. 리프레시토큰으로 엑셋스토큰 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");

              // 3. 재발급받은 토큰으로 방금 실패한 쿼리 재요청
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 기존꺼 가져오기(만료된토큰)
                  Authorization: `Bearer ${newAccessToken ?? ""}`, // 토큰만 새로운토큰으로 바꾸기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 수정한 쿼리 재용청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
