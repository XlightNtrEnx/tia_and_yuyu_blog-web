import { styled } from "styled-components";
import { useEffect, useState } from "react";

import { IPost, postService, Order } from "@src/firebase/firestore/services";
import { Post } from "./components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > * {
    width: 80%;
  }
`;

export const Feed = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await postService.filter(
        {},
        { limit: 10, orderBy: { by: "createdAt", order: Order.DESC } }
      );
      setPosts(fetchedPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <>
      {!loading && (
        <Container>
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </Container>
      )}
    </>
  );
};
