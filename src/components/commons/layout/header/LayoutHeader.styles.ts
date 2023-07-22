import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;

  font-family: "myFont";
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
`;

export const InnerLogo = styled.div`
  font-family: "myFont";
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  color: black;
  cursor: pointer;
`;

export const InnerButton = styled.div`
  font-size: 27px;
  margin: 15px;
  color: black;
  cursor: pointer;

  font-family: "myFont_semiBold";
`;

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const Avatar = styled.img`
  width: 40px;
  margin-right: 10px;
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
`;
