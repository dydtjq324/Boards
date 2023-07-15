import { getDate } from "../../../../commons/libraries/utils";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useSearchbar } from "../../../commons/hooks/custom/useSearchbar";
import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";
import Paginations01UI from "../../../commons/paginations/01/Paginations01.index";
import { usePagination } from "../../../commons/hooks/custom/usePagination";
import Searchbars01UI from "../../../commons/searchbars/01/Searchbars01.index";

const SECRET = "@#$%";

export default function BoardListUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();

  const paginationArgs = usePagination({
    refetch,
    count: dataBoardsCount?.fetchBoardsCount,
  });

  const { keyword, onChangeSearchbar } = useSearchbar({
    refetch,
    refetchBoardsCount,
  });

  return (
    <S.Wrapper>
      <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle
            id={el._id}
            onClick={onClickMoveToPage(`/boards/${el._id}`)}
          >
            {el.title
              .replaceAll(keyword, `${SECRET}${keyword}${SECRET}`)
              .split(SECRET)
              .map((el) => (
                <S.TextToken key={uuidv4()} isMatched={keyword === el}>
                  {el}
                </S.TextToken>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Paginations01UI {...paginationArgs} />
        <S.Button onClick={onClickMoveToPage("/boards/new")}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
