import { useState } from "react";

export const useSearch = () => {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (value: string): void => {
    setKeyword(value);
  };

  return {
    keyword,
    onChangeKeyword,
  };
};
