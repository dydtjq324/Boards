import * as S from "./SignUp.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { useMutationSignUp } from "../../commons/hooks/mutations/signUpMutation";
import { schemaSignUp } from "./SignUp.vaildation";
import Link from "next/link";

interface IFormData {
  myEmail: string;
  myName: string;
  myPassword: string;
}

export default function SignUpUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [createUser] = useMutationSignUp();
  const { register, handleSubmit, watch, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaSignUp),
    mode: "onChange",
  });

  const onClickSignUp = async (): Promise<void> => {
    if (formState.isValid) {
      try {
        const { myEmail, myName, myPassword } = watch();
        const result = await createUser({
          variables: {
            createUserInput: {
              email: myEmail,
              name: myName,
              password: myPassword,
            },
          },
        });
        alert("회원가입 성공");
        onClickMoveToPage("/boards")();
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
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
        <S.myForm>
          <S.IdInput placeholder="이메일" {...register("myEmail")}></S.IdInput>
          <S.Error style={{ color: "red" }}>
            {formState.errors.myEmail?.message}
          </S.Error>
          <S.IdInput placeholder="이름" {...register("myName")}></S.IdInput>
          <S.Error style={{ color: "red" }}>
            {formState.errors.myName?.message}
          </S.Error>
          <S.PasswordInput
            type="password"
            placeholder="비밀번호"
            {...register("myPassword")}
          ></S.PasswordInput>{" "}
          <S.Error style={{ color: "red" }}>
            {formState.errors.myPassword?.message}
          </S.Error>
        </S.myForm>
        <S.LoginBtn
          onClick={onClickSignUp}
          style={{ opacity: formState.isValid ? "1" : "0.3" }}
        >
          가입하기
        </S.LoginBtn>
      </S.CardWrapper>
    </S.Wrapper>
  );
}
