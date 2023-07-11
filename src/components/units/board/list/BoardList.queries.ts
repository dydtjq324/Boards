import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
<<<<<<< HEAD
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
=======
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
>>>>>>> 1bb0169783bca8bc62494df73f3fb29217577036
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
<<<<<<< HEAD
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
=======
  query fetchBoardsCount {
    fetchBoardsCount
>>>>>>> 1bb0169783bca8bc62494df73f3fb29217577036
  }
`;
