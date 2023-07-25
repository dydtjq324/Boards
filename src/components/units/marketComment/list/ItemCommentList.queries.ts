import { gql } from "@apollo/client";

export const FETCH_ITEM_COMMENTS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      user {
        name
      }
      contents
      createdAt
    }
  }
`;

export const DELETE_ITEM_COMMENT = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;
