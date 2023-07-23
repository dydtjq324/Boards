import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./Login.styles";
import { useMutationLogin } from "../../commons/hooks/mutations/user/loginMutation";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { accessTokenState } from "../../../commons/stores";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { schemaLogin } from "./Login.vaildation";

export default function LoginUI(): JSX.Element {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { onClickMoveToPage } = useMoveToPage();
  const [loginUser] = useMutationLogin();
  const { register, watch, formState } = useForm({
    resolver: yupResolver(schemaLogin),
    mode: "onChange",
  });

  const onClickLogin = async (): Promise<void> => {
    if (formState.isValid) {
      try {
        const { myEmail, myPassword } = watch(); // watch 함수를 사용하여 폼 필드의 값을 가져옴
        const result = await loginUser({
          variables: {
            email: myEmail,
            password: myPassword,
          },
        });
        const accessToken = result.data?.loginUser.accessToken;
        console.log(accessToken);
        if (accessToken === undefined) {
          alert("로그인 실패 다시 시도");
          return;
        }
        setAccessToken(accessToken);
        // localStorage.setItem("accessToken", accessToken); 로컬스토리지 보안상 취약해서 -> 리프레쉬토큰으로 변경

        alert("로그인 성공");
        onClickMoveToPage("/markets")();
        // 로그인 성공 페이지로 이동
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Title>
        <Link href={"/boards"}>
          <S.StyledLink>ReviveMart</S.StyledLink>
        </Link>
      </S.Title>
      <S.CardWrapper>
        <S.myForm>
          <S.IdInput
            placeholder="이메일"
            type="email"
            {...register("myEmail")}
          />

          <S.Error>{formState.errors.myEmail?.message}</S.Error>
          <S.PasswordInput
            type="password"
            placeholder="비밀번호"
            {...register("myPassword")}
          ></S.PasswordInput>

          <S.Error>{formState.errors.myPassword?.message}</S.Error>
        </S.myForm>
        <S.LoginBtn
          onClick={onClickLogin}
          style={{ opacity: formState.isValid ? "1" : "0.6" }}
        >
          로그인
        </S.LoginBtn>
        <S.SigUpnBtn onClick={onClickMoveToPage("/signup")}>
          회원가입
        </S.SigUpnBtn>
      </S.CardWrapper>
    </S.Wrapper>
  );
}
