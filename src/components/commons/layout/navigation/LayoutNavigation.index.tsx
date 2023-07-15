import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";

const NAVIGATION_MENUS = [
  { name: "헬스게시판", page: "/boards" },
  { name: "헬스마켓", page: "/markets" },
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
