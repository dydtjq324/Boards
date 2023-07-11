import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
<<<<<<< HEAD

=======
>>>>>>> 1bb0169783bca8bc62494df73f3fb29217577036
export default function BoardCommentListUI(
  props: IBoardCommentListUIProps
): JSX.Element {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUIItem key={el._id} el={el} />
      )) ?? <></>}
    </InfiniteScroll>
  );
}
