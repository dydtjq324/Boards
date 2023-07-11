import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";
export default function Login(): JSX.Element {
  const router = useRouter();
  const onClickMoveToRegister = (): void => {
    void router.push("/signup");
  };
  return <LoginUI onClickMoveToRegister={onClickMoveToRegister} />;
}
