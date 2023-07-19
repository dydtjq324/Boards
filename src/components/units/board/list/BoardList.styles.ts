import type { ITextTokenProps } from "./BoardList.types";
import { Modal } from "antd";
import styled from "@emotion/styled";
import { LikeOutlined, UserOutlined } from "@ant-design/icons";

export const PeopleIcon = styled(UserOutlined)`
  font-size: 20px;
  color: #ffd600;
  margin: 0px 5px;
  cursor: pointer;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 20px;
  color: #ffd600;
  margin: 0px 5px;
  cursor: pointer;
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
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const ColumnHeaderBasic = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: navy;
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: navy;
  width: 70%;
  text-align: center;
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
  justify-content: center;
  padding-top: 50px;
  margin-bottom: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  background-color: #fee500;
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  :hover {
    transform: scale(1.3);
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;
export const BestTitle = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;
export const BestContainer = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-around;
  width: 1200px;
  height: 240px;
`;

export const BestItemCoinTainer = styled.div`
  width: 250px;
  height: 230px;
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
  width: 250px;
  height: 120px;
  border-radius: 10px;
`;

export const BestItemContent = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;
export const BestItemTitle = styled.div`
  margin-top: 5px;
  margin: 0px 5px;
  font-size: 25px;
  font-weight: bold;
`;
export const BestItemUser = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;
export const BestItemDetainContainer = styled.div`
  display: flex;
`;
