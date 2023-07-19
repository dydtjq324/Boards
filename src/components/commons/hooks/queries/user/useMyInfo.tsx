import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

const FETCH_User = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export const useQueryMyInfo = () => {
  const result = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_User);
  return result;
};
