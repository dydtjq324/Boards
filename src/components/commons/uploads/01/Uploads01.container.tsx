import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import Uploads01UI from "./Uploads01.presenter";
import type { IUploads01Props } from "./Uploads01.types";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { Modal } from "antd";

export default function Uploads01(props: IUploads01Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();
  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 오는 이유는 input속성에 multiple 이 들어오면 여러개 드래그 하기위해서
    const isValid = checkValidationImage(file);
    if (!isValid) return;
    if (file === undefined) return;

    // const fileReader = new FileReader();

    // fileReader.readAsDataURL(file);
    // fileReader.onload = (event) => {
    //   if (typeof event.target?.result === "string") {
    //     setImageUrl(event.target?.result);
    //     setFile(file);
    //   }
    // };

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
