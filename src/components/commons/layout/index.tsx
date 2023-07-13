import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LayoutHeaderUI from "./header/LayoutHeader.index";
import LayoutBannerUI from "./banner/LayoutBanner.index";
import LayoutNavigationUI from "./navigation/LayoutNavigation.index";

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
      {!shouldHideComponents && <LayoutHeaderUI />}
      {!shouldHideComponents && <LayoutBannerUI />}
      {!shouldHideComponents && <LayoutNavigationUI />}
      <Body>{props.children}</Body>
    </>
  );
}
