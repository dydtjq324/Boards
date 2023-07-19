import type { ITextTokenProps } from "./BoardList.types";
import { Modal } from "antd";
import styled from "@emotion/styled";
import { LikeFilled } from "@ant-design/icons";

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
    font-size: 24px;
    color: navy;
  }
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;
export const BestTitle = styled.h1`
  text-align: center;
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
  height: 240px;
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
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;
export const BestItemTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const BestItemUser = styled.div``;
