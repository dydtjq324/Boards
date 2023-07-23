import styled from "@emotion/styled";
import { Modal } from "antd";
import {
  DislikeOutlined,
  MoneyCollectFilled,
  HeartFilled,
} from "@ant-design/icons";
export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const Money = styled(MoneyCollectFilled)`
  font-size: 10px;
  color: #ffd600;
  margin-right: 10px;
`;
export const MypageTitleContainer = styled.div`
  margin-left: 200px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
export const MypageTitle = styled.div`
  cursor: pointer;
  border: none;
  width: 150px;
  font-size: 21px;
  color: black;
  margin: 0 30px;
  padding: 10px 5px;
  text-align: center;
  border-radius: 20px;
  background-color: #cefbc9;
  opacity: 0.7;
  font-family: "myFont";
`;
export const Title = styled.h1`
  font-size: 40px;
  font-family: "myFont_semiBold";
  margin: 20px 0px;
`;

export const MyPoint = styled.div`
  font-size: 30px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: 2px solid grey;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 0.5px solid black;
  padding: 50px;
  width: 600px;
  height: 500px;
  box-shadow: 0px 0px 5px gray;
`;

export const IdInput = styled.input`
  width: 500px;
  height: 70px;
  padding-left: 20px;
  font-size: 20px;
  border: none;
  outline: none;
  border-bottom: 3px solid grey;
`;

export const PasswordInput = styled.input`
  width: 500px;
  height: 70px;
  padding-left: 20px;
  font-size: 20px;
  border: none;
  outline: none;
  border-bottom: 3px solid grey;
`;
export const LoginBtn = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 70px;
  font-size: 20px;
  background-color: #fee500;
  border: none;
  outline: none;
  border-radius: 10px;

  cursor: pointer;
`;
export const SigUpnBtn = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 70px;
  font-size: 20px;
  background-color: #fee500;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const Error = styled.div`
  margin-top: 15px;
  margin-left: 15px;
`;

export const Avatar = styled.img`
  width: 80px;
  margin: 20px 0px;
`;

export const myForm = styled.form``;

import { LikeOutlined, UserOutlined } from "@ant-design/icons";
import { ITextTokenProps } from "../market/list/MarketList.types";

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
  display: flex;
  flex-direction: column;
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
  width: 90%;
  display: flex;
  flex-direction: row;
  height: 62px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    transform: scale(1.1);

    box-shadow: 0px 0px 30px #2f9d27;
  }
`;

export const ColumnHeaderBasic = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: navy;
  width: 20%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: navy;
  width: 50%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;
export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

export const MypageDivider = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 50px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: #47c83e;
  opacity: 0.7;
  font-family: "myFont_semiBold";
  border: none;
  border-radius: 15px;

  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  :hover {
    transform: scale(1.1);
  }
`;

export const InputMoney = styled.input`
  padding-left: 10px;
  border-radius: 10px;
  width: 150px;
  height: 40px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    transform: scale(1.1);
  }
`;
