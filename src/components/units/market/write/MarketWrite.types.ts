import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface MarketWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IFormData {
  price: string;
  title: string;
  contents: string;
  addressDetail: string;
}
