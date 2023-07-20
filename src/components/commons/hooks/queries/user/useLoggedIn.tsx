import { IQuery } from "../../../../../commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

export const useQueryLoggedIn = () => {
  const result =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return result;
};
