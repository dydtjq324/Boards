import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  background-color: #ffd600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: black;

  font-weight: bold;
`;

export const MenuItem = styled.div`
  color: grey;
  cursor: pointer;
  margin: 0 90px;
  :hover {
    color: navy;
    font-size: 27px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
