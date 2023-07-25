import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const BestDetailContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  opacity: 0.7;
`;
export const UserImg = styled.img`
  margin-right: 5px;
  width: 16px;
`;

export const Heart = styled(HeartFilled)`
  margin-right: 5px;
  font-size: 13px;
  color: #b8b8b8;
  margin-left: 10px;
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
  justify-content: space-between;
  width: 100%;
`;

export const BestItemCoinTainer = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  :hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const BestItemimg = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

export const BestItemContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  /* margin-left: 20px; */
  margin-bottom: 10px;
  justify-content: space-around;
`;
export const BestItemTitle = styled.div`
  font-size: 17px;
`;
export const BestItemUser = styled.div`
  font-size: 21px;
  margin: 7px 0;
  font-family: "myFont_semiBold";
`;
