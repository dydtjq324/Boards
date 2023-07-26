import styled from "@emotion/styled";
export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  width: 800px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 40px;
  padding-left: 20px;
  font-size: 20px;
  border: none;
  outline: none;
  border-bottom: 3px solid grey;
`;

export const PasswordInput = styled.input`
  width: 500px;
  height: 40px;
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

  background-color: #505957;
  color: white;
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
  font-family: "Myfont";
  text-decoration: none;
  cursor: pointer;
`;

export const Error = styled.div`
  margin-top: 15px;
  margin-left: 15px;
  height: 15px;
  font-size: 12px;
`;

export const myForm = styled.form``;
