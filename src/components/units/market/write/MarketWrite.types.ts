import type { IQuery } from "../../../../commons/types/generated/types";

export interface MarketWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
