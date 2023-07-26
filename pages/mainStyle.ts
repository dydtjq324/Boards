import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 70%;
  margin-top: 30px;
  font-family: "myFont_light";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: 23px;
  font-family: "myFont";
  margin: 40px 0;
`;

export const SubInfo = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 25px;
  border-radius: 20px;
  background-color: #eaeaea;
  opacity: 0.5;
`;
export const Info = styled.div`
  height: 300px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 25px;
  border-radius: 20px;
  background-color: #fbf7f2;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;
export const Container = styled.a`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  margin: 25px;
  border-radius: 20px;
  background-color: #cefbc9;
  opacity: 0.8;
  cursor: pointer;
  /* background-color: #cefbc9; */
  :hover {
    transform: scale(1.1);
  }
`;

export const Footer = styled.div`
  height: 400px;
  width: 100%;
  background-color: red;
`;
