import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { useMoveToPage } from "../../hooks/useMoveToPage";

const NAVIGATION_MENUS = [
  { name: "헬스게시판", page: "/boards" },
  { name: "프로틴상품", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigationUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={onClickMoveToPage(`${el.page}`)}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
