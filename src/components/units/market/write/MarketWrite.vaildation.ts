import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요"),
  price: yup.number().required("가격은 필수입니다"),
  contents: yup.string().required("내용를 입력해주세요"),
  addressDetail: yup.string(),
  lng: yup.number(),
  lat: yup.number(),
});
