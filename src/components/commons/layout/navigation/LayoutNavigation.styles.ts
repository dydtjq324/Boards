import styled from "@emotion/styled";

import {
  SmileOutlined,
  ShoppingCartOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";

export const SnippetsIcon = styled(SnippetsOutlined)`
  font-size: 27px;
  margin-right: 10px;
  margin-top: 3px;
`;
export const ShoppingIcon = styled(ShoppingCartOutlined)`
  font-size: 30px;
  margin-right: 10px;
`;
export const SmileIcon = styled(SmileOutlined)`
  font-size: 30px;
  margin-right: 10px;

  margin-top: 3px;
`;

export const Wrapper = styled.div`
  margin: 50px 0px;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: black;
  padding-bottom: 50px;
  border-bottom: 2px solid #eaeaea;
  font-weight: bold;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 22px;
  padding: 10px 10px;
  text-align: center;
  width: 180px;
  border: 2px solid gray;
  border-radius: 20px;
  color: grey;
  cursor: pointer;
  margin: 0 90px;
  font-family: "myFont_semiBold";
  :hover {
    color: navy;
    font-size: 27px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
