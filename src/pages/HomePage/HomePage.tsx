import { styled } from "styled-components";
import { useAtomValue } from "jotai";

import { userAtom } from "@src/atoms";
import { Feed, PostComposer } from "./components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 40px;

  & > * {
    width: 100%;
    max-width: 80%;
  }
`;

export const HomePage = () => {
  const user = useAtomValue(userAtom);
  return (
    <Container>
      {user?.email === "xyf.oco@gmail.com" && <PostComposer />}
      <Feed />
    </Container>
  );
};
