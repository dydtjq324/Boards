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

export default function LayoutHeaderUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogout = () => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/")}>
          💎 Protein Market
        </InnerLogo>
        <div>
          {accessToken == "" ? (
            <div>
              <InnerButton onClick={onClickMoveToPage("/login")}>
                로그인
              </InnerButton>
              <InnerButton onClick={onClickMoveToPage("signup")}>
                회원가입
              </InnerButton>
            </div>
          ) : (
            <InnerButton onClick={onClickLogout}>로그아웃</InnerButton>
          )}
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
