import { FireFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 100%;
  height: 55px;
  background-color: #f2f3f6;
  border: 2px solid #505957;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0.7;
`;

export const FireFilledIcon = styled(FireFilled)`
  color: #5729ff;
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const SearchbarInput = styled.input`
  font-size: 23px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;
