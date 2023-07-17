import styled from "@emotion/styled";
import type { ITextTokenProps } from "./BoardList.types";
import { Modal } from "antd";

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
