import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
  youtubeUrl: string;
  addressDetail: string;
}
