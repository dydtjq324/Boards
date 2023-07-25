import styled from "@emotion/styled";

export const StyledFooterWrapper = styled.div`
  margin-top: 300px;
  width: 100%;
  background-color: #eaeaea;
  opacity: 0.8;
  padding-bottom: 70px;
`;

export const Divider = styled.div`
  margin-bottom: 40px;
  border-bottom: 1px solid gray;
`;

export const StyledFooterContainer = styled.div`
  margin: 0 auto; /* 가운데 정렬을 위한 수정 */
  width: 1270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledFooterLogoContainer = styled.div`
  white-space: nowrap;
`;

export const StyledFooterLogo = styled.div`
  font-family: "myFont";
  font-size: 30px;
`;

export const StyledFooterInfoContainer = styled.div`
  display: flex;
`;

export const StyledFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: black;
  margin-left: 125px;
  font-weight: 300;
  font-family: "myFont";
`;
