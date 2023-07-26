import {
  HomeIcon,
  MenuItem,
  MenuItemContainer,
  ShoppingIcon,
  SmileIcon,
  SnippetsIcon,
  Wrapper,
} from "./LayoutNavigation.styles";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NAVIGATION_MENUS = [
  { name: "홈", page: "/", icon: <HomeIcon rev={undefined} /> },
  { name: "마켓", page: "/markets", icon: <ShoppingIcon rev={undefined} /> },
  { name: "게시판", page: "/boards", icon: <SnippetsIcon rev={undefined} /> },
  { name: "내정보", page: "/mypage", icon: <SmileIcon rev={undefined} /> },
];

export default function LayoutNavigationUI(): JSX.Element {
  const [activeTab, setActiveTab] = useState("마켓");
  const router = useRouter();

  useEffect(() => {
    // 현재 라우터 경로를 기준으로 activeTab 상태 설정
    const currentPath = router.pathname;
    const activeMenu = NAVIGATION_MENUS.find(
      (menu) => menu.page === currentPath
    );
    if (activeMenu) {
      setActiveTab(activeMenu.name);
    }
  }, [router.pathname]);

  const handleTabClick = (el: any) => {
    setActiveTab(el.name);
    console.log(el);
    router.push(el.page);
  };
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <MenuItemContainer key={el.page}>
          <MenuItem
            id={el.page}
            onClick={() => handleTabClick(el)}
            style={{
              backgroundColor: activeTab === `${el.name}` ? "#505957" : "white",
              border: activeTab === `${el.name}` ? "none" : "2px solid #505957",

              color: activeTab === `${el.name}` ? "white" : "black",
            }}
          >
            {el?.icon}
            {el.name}
          </MenuItem>
        </MenuItemContainer>
      ))}
    </Wrapper>
  );
}
