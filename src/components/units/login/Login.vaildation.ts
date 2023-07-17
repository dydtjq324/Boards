import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("필수 입력값입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대15자리 입니다.")
    .required("필수 입력값 입니다."),
});
