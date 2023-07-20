import type { ITextTokenProps } from "./BoardList.types";
import { Modal } from "antd";
import styled from "@emotion/styled";
import { LikeFilled, HeartFilled, MoneyCollectFilled } from "@ant-design/icons";

export const BestDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UserImg = styled.img`
  margin-right: 10px;
  width: 24px;
`;

export const Money = styled(MoneyCollectFilled)`
  font-size: 35px;
  color: #ffd600;
  margin-right: 10px;
`;

export const Heart = styled(HeartFilled)`
  font-size: 24px;
  color: #ffd600;
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
  width: 1200px;
  margin-top: 30px;
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
  height: 170px;
  /* line-height: 20px; */
  border-bottom: 1px solid gray;
  :hover {
    color: blue;
  }
`;

export const ItemImg = styled.img`
  width: 15%;
  padding: 10px;
  margin-right: 10px;
`;

export const ColumnHeaderBasic = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  width: 20%;
  text-align: center;
  margin-top: 60px;
`;
export const ItemDetailContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: space-between;
`;
export const ColumnHeaderTitle = styled.div`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
  color: black;
`;
export const ColumnHeaderSubTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: grey;
  margin-bottom: 5px;
`;
export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding-top: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
  padding: 20px;
`;

export const PencilIcon = styled.img``;

// border: none;
// width: 200px;
// color: black;
// padding: 10px 5px;
// background-color: #c4deff;

export const Button = styled.button`
  width: 250px;
  height: 80px;
  background-color: #c4deff;
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  :hover {
    font-size: 24px;
    color: black;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
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
  background-color: #c4deff;
  text-align: center;
  margin-top: 20px;
  border-radius: 20px;
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
  box-shadow: 0px 0px 10px gray;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

export const BestItemimg = styled.img`
  width: 270px;
  height: 230px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
`;

export const BestItemContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 20px;
  justify-content: space-around;
`;
export const BestItemTitle = styled.div`
  font-size: 23px;
  font-weight: bold;
`;
export const BestItemUser = styled.div`
  font-size: 18px;
  margin: 7px 0;
`;

export const ScrollContainer = styled.div`
  padding-right: 20px;
  height: 1400px;
  overflow-y: scroll;
  /* 필요한 경우 가로 스크롤바를 추가하려면 아래와 같이 설정할 수 있습니다. */
  /* overflow-x: auto; */
`;
