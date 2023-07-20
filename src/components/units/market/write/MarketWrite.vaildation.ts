import * as yup from "yup";

export const schema = yup.object({
  price: yup.string().required("가격은 필수입력입니다"),
  title: yup.string().required("제목를 입력해주세요"),
  contents: yup.string().required("내용를 입력해주세요"),
  addressDetail: yup.string(),
});
