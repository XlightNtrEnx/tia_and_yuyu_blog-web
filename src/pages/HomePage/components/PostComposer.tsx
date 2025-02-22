import styled from "styled-components";
import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { useAtomValue } from "jotai";

import { ReactComponent as AttachmentSVG } from "@src/assets/svgs/attachment.svg";
import { userAtom } from "@src/atoms";
import { TextArea, Form, Button, Input, HiddenFileInput } from "@src/elements";
import { postService } from "@src/firebase/firestore/services";
import { FlexRow } from "@src/components";

const StyledForm = styled(Form)`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 10px;

  & > *:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  & > *:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const TitleInput = styled(Input)`
  border: none;
  border-bottom: 1px solid black;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  min-height: 2rem;
  outline: none;
`;

const TextContentInput = styled(TextArea)`
  border: none;
  height: 4rem;
  min-height: 2rem;
  outline: none;
`;

// const FilePreviewBar = styled(FlexRow)``;

const ActionBar = styled(FlexRow)`
  justify-content: space-between;
  height: 2rem;
  > * {
    height: 100%;
  }
`;

const AdditionalContentBar = styled(FlexRow)`
  margin-left: 0.5rem;
  > * {
    height: 80%;
  }
`;

const SubmitPostButton = styled(Button)``;

const onSubmitPost = async (
  e: FormEvent<HTMLFormElement>,
  insertionParams: Parameters<typeof postService.insert>[0]
) => {
  e.preventDefault();
  await postService.insert(insertionParams);
  window.location.reload();
};

const _files: File[] = [];

export const PostComposer = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [,] = useState<File[]>([]);
  const user = useAtomValue(userAtom);
  const userId = user?.id ?? null;

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const onClickPictureSVG = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    if (!newFiles) return;

    Array.from(newFiles).forEach((file) => {
      _files.push(file);
      console.log(_files);
    });
  };

  return (
    <StyledForm onSubmit={(e) => onSubmitPost(e, { text, title, userId })}>
      <TitleInput
        name="title"
        placeholder="Title (optional)"
        value={title}
        onChange={onTitleChange}
      />
      <TextContentInput
        name="text"
        value={text}
        placeholder="I love tia!"
        onChange={onTextChange}
      />
      <ActionBar>
        <AdditionalContentBar>
          <HiddenFileInput
            ref={fileInputRef}
            onChange={onFileChange}
            multiple
            accept="image/*,video/*"
          />
          <AttachmentSVG cursor="pointer" onClick={onClickPictureSVG} />
        </AdditionalContentBar>
        <SubmitPostButton>Post!</SubmitPostButton>
      </ActionBar>
    </StyledForm>
  );
};
