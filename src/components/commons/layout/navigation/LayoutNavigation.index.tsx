import {
  MenuItem,
  MenuItemContainer,
  ShoppingIcon,
  SmileIcon,
  SnippetsIcon,
  Wrapper,
} from "./LayoutNavigation.styles";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import { useState } from "react";

const NAVIGATION_MENUS = [
  { name: "마켓", page: "/markets", icon: <ShoppingIcon rev={undefined} /> },
  { name: "게시판", page: "/boards", icon: <SnippetsIcon rev={undefined} /> },
  { name: "마이페이지", page: "/mypage", icon: <SmileIcon rev={undefined} /> },
];

export default function LayoutNavigationUI(): JSX.Element {
  const [activeTab, setActiveTab] = useState("마켓");
  const { onClickMoveToPage } = useMoveToPage();
  const handleTabClick = (el: any) => {
    setActiveTab(el.name);
    console.log(el);
    onClickMoveToPage(el.page)();
  };
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <MenuItemContainer key={el.page}>
          <MenuItem
            id={el.page}
            onClick={() => handleTabClick(el)}
            style={{
              borderColor: activeTab === `${el.name}` ? "#47c83e" : "#d5d5d5",
              color: activeTab === `${el.name}` ? "#47c83e" : "grey",
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
