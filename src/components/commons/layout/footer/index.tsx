import * as S from "./footer";
const Footer = () => {
  return (
    <S.StyledFooterWrapper>
      <S.Divider></S.Divider>
      <S.StyledFooterContainer>
        <S.StyledFooterLogoContainer>
          <S.StyledFooterLogo>Y_MARKET</S.StyledFooterLogo>
        </S.StyledFooterLogoContainer>
        <S.StyledFooterInfoContainer>
          <S.StyledFooterInfo>
            OWNER: 이용섭
            <br />
            ADRESS: 대구북구
            <br />
            PHONE: 010-6596-6501
          </S.StyledFooterInfo>
        </S.StyledFooterInfoContainer>
      </S.StyledFooterContainer>
    </S.StyledFooterWrapper>
  );
};

export default Footer;
