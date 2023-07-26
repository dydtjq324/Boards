import type { ITextTokenProps } from "./MarketList.types";
import { Modal } from "antd";
import styled from "@emotion/styled";
import { LikeFilled, HeartFilled, MoneyCollectFilled } from "@ant-design/icons";

export const BestDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UserImg = styled.img`
  margin-right: 10px;
  width: 18px;
`;

export const Money = styled(MoneyCollectFilled)`
  font-size: 25px;
  color: #ffd600;
  margin-right: 10px;
  margin-top: 5px;
`;

export const Heart = styled(HeartFilled)`
  font-size: 15px;
  color: #b8b8b8;
  margin-left: 10px;
  margin-right: 10px;
`;
export const LikeIcon = styled(LikeFilled)`
  font-size: 24px;
  color: #ffd600;
  margin: 0px 3px;
`;
export const BoardPasswordModal = styled(Modal)``;
export const Wrapper = styled.div`
  width: 70%;
  margin-top: 30px;
  font-family: "myFont_light";
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 130px;
  border-bottom: 2px solid #eaeaea;

  :hover {
    box-shadow: 0px 0px 10px gray;
  }
`;

export const ItemImg = styled.img`
  width: 15%;
  padding: 10px;
  margin-right: 10px;
`;

export const ColumnHeaderBasic = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  width: 25%;
  text-align: center;
  margin-top: 50px;
`;
export const ItemDetailContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: space-between;
  cursor: pointer;
`;
export const ColumnHeaderTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: black;
`;
export const ColumnHeaderSubTitle = styled.div`
  font-size: 8px;
  color: grey;
  margin-bottom: 5px;
`;
export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid gray;
  padding: 20px;
  align-items: center;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 220px;
  height: 55px;
  margin-left: 30px;
  font-family: "myFont_light";
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #505957;
  background-color: white;
  cursor: pointer;
  font-size: 20px;
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "#4375DB" : "black")};
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
  font-family: "myFont";
  margin-bottom: 20px;
  font-size: 23px;
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
