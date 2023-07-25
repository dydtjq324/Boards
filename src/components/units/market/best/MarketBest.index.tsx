import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import { useQueryfetchUseditemsOfTheBest } from "../../../commons/hooks/queries/markets/useQueryfetchUseditemsOfTheBest";
import * as S from "./MarketBest.styles";
("../../../commons/searchbars/01/Searchbars01.index");

export default function MarketBest(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { data: bestdata } = useQueryfetchUseditemsOfTheBest();

  return (
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
              {el.name.length > 8 ? el.name.substring(0, 12) + "..." : el.name}
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
  );
}
