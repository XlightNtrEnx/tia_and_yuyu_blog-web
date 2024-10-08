import { styled } from "styled-components";

import { IPost } from "@src/firebase/firestore/services";
import RoseBorder from "@src/assets/images/border_of_roses.gif";

const Container = styled.div`
  padding: 1rem;
  border: 25px solid transparent;
  background: ${({ theme }) => theme.colors.white};
  background-clip: padding-box;
  border-image: url(${RoseBorder}) 10% stretch;
`;

interface Prop {
  post: IPost;
}

export const Post = ({ post }: Prop) => {
  return <Container>{post.text}</Container>;
};
