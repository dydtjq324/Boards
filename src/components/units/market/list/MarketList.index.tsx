import { getDate } from "../../../../commons/libraries/utils";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/boards/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/boards/useQueryFetchBoardsCount";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useSearchbar } from "../../../commons/hooks/custom/useSearchbar";
import { v4 as uuidv4 } from "uuid";
import { useQueryfetchUseditemsOfTheBest } from "../../../commons/hooks/queries/markets/useQueryfetchUseditemsOfTheBest";
import { useQueryFetchUseditems } from "../../../commons/hooks/queries/markets/usequeryfetchUseditems";
import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import Searchbars01UI from "../../../commons/searchbars/01/Searchbars01.index";

const SECRET = "@#$%";

export default function MarketListUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { data: bestdata } = useQueryfetchUseditemsOfTheBest();
  const { data, fetchMore, refetch } = useQueryFetchUseditems();

  console.log(bestdata);

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchUseditems === undefined) return { ...prev }; // 기존 데이터 그대로 반환

        return {
          ...prev,
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      <S.BestTitleContainer>
        <S.BestTitle>BEST</S.BestTitle>
      </S.BestTitleContainer>
      <S.BestContainer>
        {bestdata?.fetchUseditemsOfTheBest.map((el) => (
          <S.BestItemCoinTainer
            key={el._id}
            onClick={onClickMoveToPage(`/markets/${el._id}`)}
          >
            {el.images && el.images[0] && (
              <S.BestItemimg
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            )}
            <S.BestItemContent>
              <S.BestItemTitle>
                {el.name.length > 8
                  ? el.name.substring(0, 12) + "..."
                  : el.name}
              </S.BestItemTitle>
              <S.BestItemUser>{el.price?.toLocaleString()}원</S.BestItemUser>
              <S.BestDetailContainer>
                <S.UserImg src="/images/avatar.png" />
                {el.seller?.name}
                <S.Heart rev={undefined} />
                {el.pickedCount}
              </S.BestDetailContainer>
            </S.BestItemContent>
          </S.BestItemCoinTainer>
        ))}
      </S.BestContainer>
      <S.Footer>
        <S.Button onClick={onClickMoveToPage("/markets/new")}>
          상품 등록하기
        </S.Button>
      </S.Footer>
      {data?.fetchUseditems && (
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {data?.fetchUseditems.map((el) => (
            <S.Row
              key={el._id}
              onClick={onClickMoveToPage(`/markets/${el._id}`)}
            >
              {el.images && el.images[0] ? (
                <S.ItemImg
                  alt="/images/avatar.png"
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                // 이미지가 없는 경우 빈 이미지 삽입
                <S.ItemImg src="/images/avatar.png" />
              )}
              <S.ItemDetailContainer>
                <S.ColumnHeaderTitle>{el.name}</S.ColumnHeaderTitle>
                <S.ColumnHeaderSubTitle>{el.remarks}</S.ColumnHeaderSubTitle>
                <S.BestDetailContainer>
                  <S.UserImg src="/images/avatar.png" />
                  {el.seller?.name}
                  <S.Heart rev={undefined} />
                  {el.pickedCount}
                </S.BestDetailContainer>
              </S.ItemDetailContainer>
              <S.ColumnHeaderBasic>
                <S.Money rev={undefined} />
                {el.price?.toLocaleString()} 원
              </S.ColumnHeaderBasic>
            </S.Row>
          ))}
        </InfiniteScroll>
      )}
    </S.Wrapper>
  );
}
