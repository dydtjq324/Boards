import { useEffect } from "react";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { MenuContainer } from "../navigation/LayoutNavigation.styles";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeaderUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logout] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const client = useApolloClient();

  const onClickLogout = async () => {
    setAccessToken(""); // 로그아웃 클릭시 -> recoil의 토큰값을 비워줌
    const result = await logout(); // 백엔드에 로그아웃 mutation 날림
    client.clearStore(); // 로그인정보 지워주는것?
    console.log(result);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/")}>💎 ReviveMart 💎</InnerLogo>
        <div>
          <MenuContainer>
            <InnerButton onClick={onClickMoveToPage("/login")}>
              로그인
            </InnerButton>
            <InnerButton onClick={onClickMoveToPage("signup")}>
              회원가입
            </InnerButton>

            <InnerButton onClick={onClickLogout}>로그아웃</InnerButton>
          </MenuContainer>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
{
  /* <div>
          {accessToken == "" ? (
            <InnerButton onClick={onClickMoveToPage("/login")}>
              로그인
            </InnerButton>
          ) : (
            <InnerButton onClick={onClickLogout}>로그아웃</InnerButton>
          )}

          <InnerButton onClick={onClickMoveToPage("signup")}>
            회원가입
          </InnerButton>
        </div> */
}
