import ItemCommentListUIItem from "./ItemCommentList.presenterItem";
import type { ItemCommentListUIProps } from "./ItemCommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function ItemCommentListListUI(
  props: ItemCommentListUIProps
): JSX.Element {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <ItemCommentListUIItem key={el._id} el={el} />
      )) ?? <></>}
    </InfiniteScroll>
  );
}
