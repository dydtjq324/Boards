import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

const hideComponents = ["/login", "/signup"];
export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const shouldHideComponents = hideComponents.includes(router.pathname);

  return (
    <>
      {!shouldHideComponents && <LayoutHeader />}
      {!shouldHideComponents && <LayoutBanner />}
      {!shouldHideComponents && <LayoutNavigation />}
      <Body>{props.children}</Body>
    </>
  );
}
