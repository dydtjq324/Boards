import { useAuth } from "../../src/components/commons/hooks/custom/useAuth";
import MyPageUI from "../../src/components/units/mypage/Myinfo.index";

export default function Mypage(): JSX.Element {
  useAuth();
  return <MyPageUI />;
}
