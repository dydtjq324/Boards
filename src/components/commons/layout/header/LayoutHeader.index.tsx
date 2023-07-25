import { useEffect } from "react";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import {
  Avatar,
  ButtonContainer,
  ButtonWrapper,
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
import { useQueryLoggedIn } from "../../hooks/queries/user/useLoggedIn";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeaderUI(): JSX.Element {
  const { data } = useQueryLoggedIn();
  const { onClickMoveToPage } = useMoveToPage();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logout] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const client = useApolloClient();

  const onClickLogout = async () => {
    setAccessToken(""); // 로그아웃 클릭시 -> recoil의 토큰값을 비워줌
    const result = await logout(); // 백엔드에 로그아웃 mutation 날림
    client.clearStore(); // 로그인정보 지워주는것?
    alert("로그아웃 되었습니다 홈으로 이동");
    console.log(result);
    onClickMoveToPage("/")();
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/")}>Y_MARKET </InnerLogo>
        <div>
          {/* 💎  */}
          <MenuContainer>
            {data == undefined ? (
              <ButtonWrapper>
                <InnerButton onClick={onClickMoveToPage("/login")}>
                  로그인
                </InnerButton>
                <InnerButton onClick={onClickMoveToPage("signup")}>
                  회원가입
                </InnerButton>
              </ButtonWrapper>
            ) : (
              <ButtonWrapper>
                <InnerButton onClick={onClickMoveToPage("/mypage")}>
                  <ButtonContainer>
                    <Avatar src="/images/avatar.png" />
                    {data.fetchUserLoggedIn.name}
                  </ButtonContainer>
                </InnerButton>
                <InnerButton onClick={onClickLogout}>로그아웃</InnerButton>
              </ButtonWrapper>
            )}
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
