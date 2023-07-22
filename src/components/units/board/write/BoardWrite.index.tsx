import { useEffect, useState } from "react";
import { createBoardMutation } from "../../../commons/hooks/mutations/boards/createBoardMutation";
import { updateBoardMutation } from "../../../commons/hooks/mutations/boards/updateBoardMutation";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./BoardWrite.styles";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import type { Address } from "react-daum-postcode";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { IBoardWriteProps, IFormData } from "./BoardWrite.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./BoardWrite.vaildation";
import { FETCH_BOARD } from "../../../commons/hooks/queries/boards/useQueryFetchBoard";
import { FETCH_BOARDS } from "../../../commons/hooks/queries/boards/useQueryFetchBoards";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};
export default function BoardWriteUI(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();

  const { register, formState, watch, setValue, trigger } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [updateBoard] = updateBoardMutation();
  const [createBoard] = createBoardMutation();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };
  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async (): Promise<void> => {
    const { writer, title, contents, password, youtubeUrl, addressDetail } =
      watch();
    if (formState.isValid) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: [...fileUrls],
            },
          },
        });

        if (result.data?.createBoard._id === undefined) {
          alert("요청에 문제가 있습니다.");
          return;
        }
        alert("게시글 정상등록");
        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async (): Promise<void> => {
    const { title, contents, password, youtubeUrl, addressDetail } = watch();
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
          {
            query: FETCH_BOARDS,
          },
        ],
      });

      if (result.data?.updateBoard._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }
      alert("수정이 완료되었습니다");
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChageContents = (value: string): void => {
    // register로 등록하지않고 강제로 넣어주는 기능
    // 글 작성하다가 전부지우면 태그들이 남아서 오류체크하는데 어려움이있는걸 해결
    setValue("contents", value);
    // onChange 됐으니까 에러검증 같은것들 해달라고 react-hook-form에 알려주는 기능
    void trigger("contents");
  };

  return (
    <>
      {isOpen && (
        <S.AddressModal visible={true} onCancel={handleCancel}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer
              {...register("writer")}
              type="text"
              placeholder="이름을 적어주세요."
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={Boolean(props.data?.fetchBoard.writer)}
            />
            <S.Error>{formState.errors.writer?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              {...register("password")}
              type="password"
              placeholder="비밀번호를 작성해주세요."
            />
            <S.Error>{formState.errors.password?.message}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            {...register("title")}
            type="text"
            placeholder="제목을 작성해주세요."
            defaultValue={props.data?.fetchBoard.title}
          />

          <S.Error>{formState.errors.title?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.ContentsQuill
            modules={modules}
            placeholder="내용을 작성해주세요."
            onChange={onChageContents}
            defaultValue={props.data?.fetchBoard.contents}
          />

          <S.Error>{formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode
              placeholder="07250"
              readOnly
              value={
                zipcode !== ""
                  ? zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
              }
            />
            <S.SearchButton onClick={onClickAddressSearch}>
              우편번호 검색
            </S.SearchButton>
          </S.ZipcodeWrapper>
          <S.Address
            readOnly
            value={
              address !== ""
                ? address
                : props.data?.fetchBoard.boardAddress?.address ?? ""
            }
          />
          <S.Address
            {...register("addressDetail")}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            {...register("youtubeUrl")}
            placeholder="링크를 복사해주세요."
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          <S.ImageBox>
            {fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={onChangeFileUrls}
              />
            ))}
          </S.ImageBox>
        </S.ImageWrapper>
        <S.OptionWrapper>
          <S.Label>메인설정</S.Label>
          <S.RadioButton type="radio" id="youtube" name="radio-button" />
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.RadioButton type="radio" id="image" name="radio-button" />
          <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
        </S.OptionWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton
            style={{ backgroundColor: formState.isValid ? "yellow" : "" }}
            onClick={props.isEdit ? onClickUpdate : onClickSubmit}
            isActive={props.isEdit ? true : isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}

// 374페이지
