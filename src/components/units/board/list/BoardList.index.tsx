import { getDate } from "../../../../commons/libraries/utils";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useSearch } from "../../../commons/hooks/useSearch";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";

const SECRET = "@#$%";

export default function BoardListUI(): JSX.Element {
  const { keyword, onChangeKeyword } = useSearch();
  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();
  return (
    <S.Wrapper>
      <Searchbars01
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        onChangeKeyword={onChangeKeyword}
      />
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
        <Paginations01
          refetch={refetch}
          count={dataBoardsCount?.fetchBoardsCount}
        />
        <S.Button onClick={onClickMoveToPage("/boards/new")}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
