import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const BestDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UserImg = styled.img`
  margin-right: 10px;
  width: 24px;
`;

export const Heart = styled(HeartFilled)`
  font-size: 24px;
  color: #ffd600;
  margin-left: 10px;
  margin-right: 10px;
`;

export const BestTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const BestTitle = styled.h1`
  border: none;
  width: 200px;
  color: black;
  padding: 10px 5px;
  background-color: #cefbc9;
  text-align: center;
  border-radius: 20px;
  opacity: 0.7;
  font-family: "myFont";
`;
export const BestContainer = styled.div`
  display: flex;
  margin: 50px 0;
  justify-content: space-around;
  width: 1200px;
  height: 340px;
`;

export const BestItemCoinTainer = styled.div`
  width: 270px;
  height: 340px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  box-shadow: 0px 0px 10px gray;
  :hover {
    transform: scale(1.1);

    box-shadow: 0px 0px 30px #2f9d27;
  }
`;

export const BestItemimg = styled.img`
  width: 270px;
  height: 230px;
  margin-bottom: 10px;
  border-radius: 10px;
  /* padding: 10px; */
`;

export const BestItemContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 20px;
  justify-content: space-around;
`;
export const BestItemTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
export const BestItemUser = styled.div`
  font-size: 18px;
  margin: 7px 0;
`;
