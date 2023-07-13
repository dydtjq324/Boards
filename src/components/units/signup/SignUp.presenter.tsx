import { ChangeEvent, useState } from "react";
import * as S from "./SignUp.styles";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";

import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

interface a {
  onClickMoveToRegister: () => void;
}

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
export default function SignUpUI(props: a): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };
  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      console.log(result);
      // const accessToken = result.data?.loginUser.accessToken;
      // console.log(accessToken);
      // if (accessToken === undefined) {
      //   alert("로그인 실패 다시 시도");
      //   return;
      // }

      // setAccessToken(accessToken);
      // localStorage.setItem("accessToken", accessToken);

      // 로그인 성공 ㅍㅔ이지로 이동
      onClickMoveToPage("/board");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <S.Wrapper>
      <S.Title>Muscle Maket</S.Title>
      <S.CardWrapper>
        <S.IdInput placeholder="아이디" onChange={onChangeEmail}></S.IdInput>
        <S.IdInput placeholder="이름" onChange={onChangeName}></S.IdInput>
        <S.PasswordInput
          type="password"
          placeholder="비밀번호"
          onChange={onChangePassword}
        ></S.PasswordInput>
        <S.LoginBtn onClick={onClickLogin}>로그인</S.LoginBtn>
        <S.SigUpnBtn onClick={props.onClickMoveToRegister}>
          회원가입
        </S.SigUpnBtn>
      </S.CardWrapper>
    </S.Wrapper>
  );
}
