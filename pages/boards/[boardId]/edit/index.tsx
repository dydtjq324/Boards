import { useRouter } from "next/router";
import { useQueryFetchBoard } from "../../../../src/components/commons/hooks/queries/boards/useQueryFetchBoard";
import BoardWriteUI from "../../../../src/components/units/board/write/BoardWrite.index";

export default function BoardsEditPage(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;
  const { data } = useQueryFetchBoard({ boardId: router.query.boardId });

  return <BoardWriteUI isEdit={true} data={data} />;
}
