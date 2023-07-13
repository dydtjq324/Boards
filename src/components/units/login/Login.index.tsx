import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./Login.styles";
import { useMutationLogin } from "../../commons/hooks/mutations/loginMutation";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import { accessTokenState } from "../../../commons/stores";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("필수 입력값입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대15자리 입니다.")
    .required("필수 입력값 입니다."),
});

export default function LoginUI(): JSX.Element {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { onClickMoveToPage } = useMoveToPage();
  const [loginUser] = useMutationLogin();
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: any) => {
    console.log(data);
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      const { myEmail, myPassword } = watch(); // watch 함수를 사용하여 폼 필드의 값을 가져옴
      const result = await loginUser({
        variables: {
          email: myEmail,
          password: myPassword,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        alert("로그인 실패 다시 시도");
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      console.log(accessToken);
      alert("로그인 성공");
      onClickMoveToPage("/")();
      // 로그인 성공 페이지로 이동
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Title>
        <Link href={"/boards"}>
          <S.StyledLink>Protein Market</S.StyledLink>
        </Link>
      </S.Title>
      <S.CardWrapper>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <S.IdInput
            placeholder="이메일"
            type="text"
            {...register("myEmail")}
          />
          <S.PasswordInput
            type="password"
            placeholder="비밀번호"
            {...register("myPassword")}
          ></S.PasswordInput>
        </form>
        <S.LoginBtn onClick={onClickLogin}>로그인</S.LoginBtn>
        <S.SigUpnBtn onClick={onClickMoveToPage("/signup")}>
          회원가입
        </S.SigUpnBtn>
      </S.CardWrapper>
    </S.Wrapper>
  );
}
