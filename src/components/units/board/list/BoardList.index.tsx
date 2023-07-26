import { getDate } from "../../../../commons/libraries/utils";
import {
  FETCH_BOARDS,
  useQueryFetchBoards,
} from "../../../commons/hooks/queries/boards/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/boards/useQueryFetchBoardsCount";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useSearchbar } from "../../../commons/hooks/custom/useSearchbar";
import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";
import Paginations01UI from "../../../commons/paginations/01/Paginations01.index";
import { usePagination } from "../../../commons/hooks/custom/usePagination";
import Searchbars01UI from "../../../commons/searchbars/01/Searchbars01.index";
import BoardBestUI from "../best/BoardBest.index";
import { useApolloClient, useQuery } from "@apollo/client";
import { FETCH_BOARD } from "../../../commons/hooks/queries/boards/useQueryFetchBoard";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

const SECRET = "@#$%";

export default function BoardListUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();
  const client = useApolloClient();
  const paginationArgs = usePagination({
    refetch,
    count: dataBoardsCount?.fetchBoardsCount,
  });

  const { keyword, onChangeSearchbar } = useSearchbar({
    refetch,
    refetchBoardsCount,
  });

  const prefetchBoard = (boardId: string) => async () => {
    await client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  };

  return (
    <S.Wrapper>
      <S.BestTitleContainer>
        <S.BestTitle>BEST</S.BestTitle>
      </S.BestTitleContainer>
      <BoardBestUI />
      <S.BestTitleContainer>
        <S.BestTitle>TOTAL</S.BestTitle>
      </S.BestTitleContainer>
      <S.RowContainer>
        <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />
        <S.Button onClick={onClickMoveToPage("/boards/new")}>
          게시물등록
        </S.Button>
      </S.RowContainer>

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
            onMouseOver={prefetchBoard(el._id)}
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
      </S.Footer>
    </S.Wrapper>
  );
}
