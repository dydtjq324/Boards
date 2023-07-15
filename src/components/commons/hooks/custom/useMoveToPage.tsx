import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPagetate } from "../../../../commons/stores";

interface IUseMoveToPageReturn {
  visitedPage: string;
  onClickMoveToPage: (path: string) => () => void;
}
export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  // 마지막으로 방문한 주소
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPagetate);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path); // 로그인페이지일때는 set하지않도록 로직추가 리코일사용

    void router.push(path);
  };
  return {
    // onClickMoveToPage: onClickMoveToPage,
    onClickMoveToPage,
    visitedPage,
  };
};

// 사용법: const {onClickMoveToPage}=useMoveToPage();

// return(
//   <button onClick={onClickMoveToPage("/board")}></button>
// )
