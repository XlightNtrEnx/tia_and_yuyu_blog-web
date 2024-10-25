import { styled } from "styled-components";
import { ChangeEvent, FormEvent, useState, FocusEvent } from "react";
import { useAtomValue } from "jotai";

import { userAtom } from "@src/atoms";
import { TextArea, Form, Button, Input } from "@src/elements";
import { postService } from "@src/firebase/firestore/services";

const StyledTextArea = styled(TextArea)`
  border: none;
  height: 4rem;
`;
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
const StyledButton = styled(Button)`
  height: 2rem;
  align-self: flex-end;
`;
const StyledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid black;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const onSubmit = async (
  e: FormEvent<HTMLFormElement>,
  insertionParams: Parameters<typeof postService.insert>[0]
) => {
  e.preventDefault();
  await postService.insert(insertionParams);
  window.location.reload();
};

export const PostComposer = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const user = useAtomValue(userAtom);
  const userId = user?.uid ?? null;

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const [textFocused, setTextFocused] = useState(false);
  const onTextFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    setTextFocused(true);
  };

  return (
    <StyledForm onSubmit={(e) => onSubmit(e, { text, title, userId })}>
      <StyledInput
        name="title"
        placeholder="Title (optional)"
        value={title}
        onChange={onTitleChange}
      />
      <StyledTextArea
        name="text"
        value={text}
        placeholder="I love tia!"
        onChange={onTextChange}
        onFocus={onTextFocus}
      />
      {textFocused && <StyledButton>Post!</StyledButton>}
    </StyledForm>
  );
};
