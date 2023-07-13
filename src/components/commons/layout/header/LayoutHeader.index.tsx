import { useMoveToPage } from "../../hooks/useMoveToPage";
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={onClickMoveToPage("/")}>💎 LIVE</InnerLogo>
        <div>
          <InnerButton onClick={onClickMoveToPage("/login")}>
            로그인
          </InnerButton>
          <InnerButton onClick={onClickMoveToPage("signup")}>
            회원가입
          </InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
