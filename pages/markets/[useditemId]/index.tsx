import UsedItemDetailUI from "../../../src/components/units/market/detail/MarketDetail.index";
import ItemCommentList from "../../../src/components/units/marketComment/list/ItemCommentList.container";
import ItemCommentWrite from "../../../src/components/units/marketComment/write/ItemCommentList.container";

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <UsedItemDetailUI />

      <ItemCommentWrite />
      <ItemCommentList />
    </>
  );
}
