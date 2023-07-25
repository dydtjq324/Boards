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
  align-items: center;
  height: 72px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    background-color: #eaeaea;
    opacity: 0.5;
  }
`;

export const ColumnHeaderBasic = styled.div`
  font-size: 20px;
  font-family: "myFont";
  color: navy;
  width: 15%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  font-size: 20px;
  font-family: "myFont";
  color: navy;
  width: 65%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 15%;
  text-align: center;
  font-size: 18px;
`;

export const ColumnTitle = styled.div`
  width: 65%;
  text-align: center;
  cursor: pointer;
  font-size: 18px;

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

  background-color: #47c83e;
  opacity: 0.7;
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
    transform: scale(1.1);
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
  text-align: center;
  font-family: "myFont";
`;
export const BestContainer = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-around;
  width: 1200px;
  height: 340px;
`;

export const BestItemCoinTainer = styled.div`
  margin-top: 40px;
  width: 260px;
  height: 280px;
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
  width: 260px;
  height: 160px;
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
  font-size: 27px;
  font-weight: 900;
`;
export const BestItemUser = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;
export const BestItemDetainContainer = styled.div`
  display: flex;
`;
