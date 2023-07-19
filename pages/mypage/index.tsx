import { useAuth } from "../../src/components/commons/hooks/custom/useAuth";
import MyPageUI from "../../src/components/units/mypage/Myinfo.index";

export default function Mypage(): JSX.Element {
  useAuth();
  return <MyPageUI />;
}

// import { gql, useApolloClient } from "@apollo/client";

// const FETCH_USER_LOGGED_IN = gql`
//   query {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;
// export default function LoginPage(): JSX.Element {
//   const client = useApolloClient();
//   const onClickButton = async (): Promise<void> => {
//     const result = await client.query({
//       query: FETCH_USER_LOGGED_IN,
//     });
//     console.log(result);
//   };
//   return <button onClick={onClickButton}>클릭하세요</button>;
// }
