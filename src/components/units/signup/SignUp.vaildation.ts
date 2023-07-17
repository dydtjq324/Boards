import * as yup from "yup";

export const schemaSignUp = yup.object({
  myEmail: yup.string().email("이메일형식이 아닙니다").required("필수입니다"),
  myName: yup.string().required("내용를 입력해주세요"),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 4자리이상 15자리 이하입니다")
    .max(15, "비밀번호는 4자리이상 15자리 이하입니다")
    .required("비밀번호를 입력해주세요"),
});
