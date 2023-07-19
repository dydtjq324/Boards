import { getDate } from "../../../../commons/libraries/utils";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/boards/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/boards/useQueryFetchBoardsCount";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useSearchbar } from "../../../commons/hooks/custom/useSearchbar";
import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";
import Paginations01UI from "../../../commons/paginations/01/Paginations01.index";
import { usePagination } from "../../../commons/hooks/custom/usePagination";
import Searchbars01UI from "../../../commons/searchbars/01/Searchbars01.index";
import { useQueryfetchUseditemsOfTheBest } from "../../../commons/hooks/queries/markets/useQueryfetchUseditemsOfTheBest";

const SECRET = "@#$%";

export default function MarketListUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch } = useQueryFetchBoards();
  const { data: bestdata } = useQueryfetchUseditemsOfTheBest();
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQueryFetchBoardsCount();

  // const paginationArgs = usePagination({
  //   refetch,
  //   count: dataBoardsCount?.fetchBoardsCount,
  // });

  // const { keyword, onChangeSearchbar } = useSearchbar({
  //   refetch,
  //   refetchBoardsCount,
  // });

  return (
    <S.Wrapper>
      <S.BestTitle>베스트 상품</S.BestTitle>
      <S.BestContainer>
        {bestdata?.fetchUseditemsOfTheBest.map((el) => (
          <S.BestItemCoinTainer
            key={el._id}
            onClick={onClickMoveToPage(`/boards/${el._id}`)}
          >
            {el.images && el.images[0] && (
              <S.BestItemimg
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            )}
            <S.BestItemContent>
              <S.BestItemTitle>{el.name} </S.BestItemTitle>
              <S.BestItemTitle>{el.tags} </S.BestItemTitle>
              <S.BestItemUser>{el.price}원</S.BestItemUser>
            </S.BestItemContent>
          </S.BestItemCoinTainer>
        ))}
      </S.BestContainer>
    </S.Wrapper>
  );
}
