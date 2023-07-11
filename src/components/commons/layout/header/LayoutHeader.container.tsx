import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const onClickLogo = (): void => {
    void router.push("/");
  };

  const onClickMoveToLogin = (): void => {
    void router.push("/login");
  };
  const onClickMoveToRegister = (): void => {
    void router.push("/signup");
  };
  return (
    <LayoutHeaderUI
      onClickMoveToRegister={onClickMoveToRegister}
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
