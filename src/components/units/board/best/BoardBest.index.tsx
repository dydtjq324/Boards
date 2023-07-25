import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/boards/useQueryFetchBoardsCount";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import * as S from "./BoardBest.styles";
import { useQueryFetchBoardOfTheBest } from "../../../commons/hooks/queries/boards/useQueryFetchBoardOfTheBest";

export default function BoardBestUI(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const { data: bestdata } = useQueryFetchBoardOfTheBest();
  useQueryFetchBoardsCount();

  return (
    <S.BestContainer>
      {bestdata?.fetchBoardsOfTheBest.map((el) => (
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
            <S.BestItemTitle>
              {el.title.length > 8
                ? el.title.substring(0, 12) + "..."
                : el.title}
            </S.BestItemTitle>
            <S.BestItemDetainContainer>
              <S.BestItemUser>
                <S.PeopleIcon rev={undefined} /> {el.writer}
              </S.BestItemUser>
              <S.BestItemUser>
                <S.LikeIcon rev={undefined} />
                {Number(el.likeCount)}
              </S.BestItemUser>
            </S.BestItemDetainContainer>
          </S.BestItemContent>
        </S.BestItemCoinTainer>
      ))}
    </S.BestContainer>
  );
}
