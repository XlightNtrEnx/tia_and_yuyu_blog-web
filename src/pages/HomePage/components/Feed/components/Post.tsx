import { styled } from "styled-components";

import { IPost } from "@src/firebase/firestore/services";
import PochaccoBorder from "@src/assets/images/pochacco_border.png";

const Container = styled.div`
  padding: 1rem;
  border: 6px solid transparent;
  background: ${({ theme }) => theme.colors.white};
  background-clip: padding-box;
  border-image: url(${PochaccoBorder}) 10% repeat;
`;

interface Prop {
  post: IPost;
}

export const Post = ({ post }: Prop) => {
  return <Container>{post.text}</Container>;
};
