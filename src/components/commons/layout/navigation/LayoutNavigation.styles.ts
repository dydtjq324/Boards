import styled from "@emotion/styled";

import {
  HomeOutlined,
  SmileOutlined,
  ShoppingCartOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";

export const HomeIcon = styled(HomeOutlined)`
  font-size: 24px;
  margin-right: 10px;
  padding-bottom: 3px;
`;
export const SnippetsIcon = styled(SnippetsOutlined)`
  font-size: 27px;
  margin-right: 10px;
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
  font-size: 16px;
  padding: 10px 10px;
  /* text-align: center; */
  width: 140px;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 50px;
  font-family: "myFont_semiBold";
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
