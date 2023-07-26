import styled from "@emotion/styled";
import { LikeOutlined, UserOutlined } from "@ant-design/icons";

export const PeopleIcon = styled(UserOutlined)`
  font-size: 13px;
  color: #b8b8b8;
  margin: 0px 5px;
  cursor: pointer;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 13px;
  color: #b8b8b8;
  margin: 0px 5px;
  cursor: pointer;
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
  text-align: center;
  border-radius: 20px;
  background-color: #cefbc9;
  opacity: 0.7;
  font-family: "myFont";
`;
export const BestContainer = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: space-evenly;
  width: 100%;
`;

export const BestItemCoinTainer = styled.div`
  margin-top: 40px;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 10px gray;
    /* eaeaea */
    /* f2f3f6 */
  }
`;

export const BestItemimg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  object-fit: fill; /* 이미지를 꽉 채우도록 설정 */
`;

export const BestItemContent = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  padding-left: 5px;
  justify-content: space-evenly;
  height: 100%;
`;
export const BestItemTitle = styled.div`
  margin-top: 5px;
  margin: 0px 5px;
  font-size: 18px;
  font-weight: 900;
`;
export const BestItemUser = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  font-size: 12px;
  opacity: 0.7;
`;
export const BestItemDetainContainer = styled.div`
  display: flex;
`;
