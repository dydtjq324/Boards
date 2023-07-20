import BoardDetailUI from "../../../src/components/units/board/detail/BoardDetail.index";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetailUI />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
