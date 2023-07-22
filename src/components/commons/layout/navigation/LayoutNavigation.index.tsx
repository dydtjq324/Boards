import {
  MenuItem,
  MenuItemContainer,
  ShoppingIcon,
  SmileIcon,
  SnippetsIcon,
  Wrapper,
} from "./LayoutNavigation.styles";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";

const NAVIGATION_MENUS = [
  { name: "마켓", page: "/markets", icon: <ShoppingIcon rev={undefined} /> },
  { name: "게시판", page: "/boards", icon: <SnippetsIcon rev={undefined} /> },
  { name: "마이페이지", page: "/mypage", icon: <SmileIcon rev={undefined} /> },
];

export default function LayoutNavigationUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <MenuItemContainer key={el.page}>
          <MenuItem id={el.page} onClick={onClickMoveToPage(`${el.page}`)}>
            {el?.icon}
            {el.name}
          </MenuItem>
        </MenuItemContainer>
      ))}
    </Wrapper>
  );
}
