import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../../commons/types/generated/types";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const MutationLogOut = () => {
  const mutation = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  return mutation;
};
