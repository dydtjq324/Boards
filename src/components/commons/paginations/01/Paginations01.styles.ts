import styled from "@emotion/styled";

export const PageNationContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  font-size: 20px;
  margin: 0px 20px;
  color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
