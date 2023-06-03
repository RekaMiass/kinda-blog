import React, { useState } from "react";
import { loadPosts } from "./api/post";
import Section from "@/components/Section";
import Cover from "@/components/Cover";
import SocialNetworks from "@/components/SocialNetworks";
import BuyMeCoffee from "@/components/BuyMeCoffee";
import Title from "@/components/Title";
import PostGrid from "@/components/PostGrid";
import Post from "@/components/Post";
import Button from "@/components/Button";

const LOAD_MORE_STEP = 4;

export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadBtn = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const data = await fetch(
        `/api/post?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
      ).then((response) => response.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Section>
        <Cover title="Maria<br /> Avramenko" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post.slug.current} {...post} />
          ))}
        </PostGrid>
        {isLoadBtn && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={getMorePosts} disabled={loading}>
              Load more posts...
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
}

export async function getServerSideProps() {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);
  console.log(posts);
  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
}
