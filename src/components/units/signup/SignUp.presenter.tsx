import * as S from "./SignUp.styles";
interface a {
  onClickMoveToRegister: () => void;
}
export default function SignUpUI(props: a): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>Muscle Maket</S.Title>
      <S.CardWrapper>
        <S.IdInput placeholder="아이디"></S.IdInput>
        <S.PasswordInput placeholder="비밀번호"></S.PasswordInput>
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.SigUpnBtn onClick={props.onClickMoveToRegister}>
          회원가입
        </S.SigUpnBtn>
      </S.CardWrapper>
    </S.Wrapper>
  );
}
