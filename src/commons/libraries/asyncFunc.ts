import type { FormEvent } from "react";

export const wrapAsync = (asyncFunc: () => Promise<void>) => () => {
  void asyncFunc();
};

//폼 이벤트
export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void asyncFunc();
  };
