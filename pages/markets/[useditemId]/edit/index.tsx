import { useRouter } from "next/router";
import { useQueryFetchItem } from "../../../../src/components/commons/hooks/queries/markets/useQueryFetchItem";
import MarketWriteUI from "../../../../src/components/units/market/write/MarketWrite.index";

export default function BoardsEditPage(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.useditemId !== "string") return <></>;
  const { data } = useQueryFetchItem({ useditemId: router.query.useditemId });
  return <MarketWriteUI isEdit={true} data={data} />;
}
