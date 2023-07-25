import Link from "next/link";
import BoardBestUI from "../src/components/units/board/best/BoardBest.index";
import MarketBest from "../src/components/units/market/best/MarketBest.index";
import * as S from "./mainStyle";
import Footer from "../src/components/commons/layout/footer";
export default function Home(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Info>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</S.Info>
        <S.Title>인기매물 </S.Title>
        {/* <S.SubInfo>게시물 클릭시 이동</S.SubInfo> */}
        <MarketBest />

        <S.Title>인기글 </S.Title>

        <BoardBestUI />

        <S.Title>중고 직거래 마켓 </S.Title>
      </S.Wrapper>
      <Footer />
    </>
  );
}
