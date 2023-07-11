import { useRouter } from "next/router";
import SignUpUI from "./SignUp.presenter";
export default function SignUp(): JSX.Element {
  const router = useRouter();
  const onClickMoveToRegister = (): void => {
    void router.push("/signup");
  };
  return <SignUpUI onClickMoveToRegister={onClickMoveToRegister} />;
}
