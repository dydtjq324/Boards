import BoardBestUI from "../src/components/units/board/best/BoardBest.index";
import MarketBest from "../src/components/units/market/best/MarketBest.index";
import * as S from "../src/commons/styles/mainStyle";
import Footer from "../src/components/commons/layout/footer";
export default function Home(): JSX.Element {
  return (
    <>
      <S.Wrapper>
        <S.Info>
          중고물품 거래와 자유로운 대화를 즐기며 <br />
          <br />
          새로운 사람들과 소통할 수 있는 Y_MARKET에 가입해보세요.
        </S.Info>

        <S.Title>인기매물 </S.Title>
        {/* <S.SubInfo>게시물 클릭시 이동</S.SubInfo> */}
        <MarketBest />
        <S.Info>
          함께 만들어가는 Y_MARKET의
          <br />
          <br />
          따뜻한 커뮤니티에 참여해 주시기를 기대합니다!
        </S.Info>
        <S.Title>인기글 </S.Title>

        <BoardBestUI />
      </S.Wrapper>
      <Footer />
    </>
  );
}
