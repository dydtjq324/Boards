import MarketBest from "../src/components/units/market/best/MarketList.index";
import * as S from "./mainStyle";
export default function Home(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>중고 직거래 마켓 </S.Title>
      <S.Info>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</S.Info>
      <S.MainContainer>
        <S.Container>물품 거래하기</S.Container>
        <S.Container>자유 게시판</S.Container>
      </S.MainContainer>

      <S.Title>인기매물 </S.Title>
      <MarketBest />
    </S.Wrapper>
  );
}
