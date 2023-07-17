import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";

const NAVIGATION_MENUS = [
  { name: "Revive Board", page: "/boards" },
  { name: "Revive Market", page: "/markets" },
  { name: "Mypage", page: "/mypage" },
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
