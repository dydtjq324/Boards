import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요"),
  title: yup.string().required("제목를 입력해주세요"),
  contents: yup.string().required("내용를 입력해주세요"),
  password: yup
    .string()
    .min(4, "비밀번호는 4자리이상")
    .max(15, "15자리 이하")
    .required("필수입니다"),
  youtubeUrl: yup.string(),
  addressDetail: yup.string(),
});
