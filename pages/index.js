// "use client";

import Image from "next/image";
import React, { useState } from "react";
import { loadPosts } from "./api/post";
import Section from "@/components/Section";
import Cover from "@/components/Cover";
import SocialNetworks from "@/components/SocialNetworks";
import BuyMeCoffee from "@/components/BuyMeCoffee";
import Title from "@/components/Title";
import PostGrid from "@/components/PostGrid";
import Post from "@/components/Post";

const LOAD_MORE_STEP = 4;

export default function Home({initialPosts, total}) {
  const [posts, setPosts] = useState(initialPosts);

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
      </Section>
    </div>
  );
}

export async function getServerSideProps() {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);
  console.log(posts)
  return {
    props: {
      initialPosts: posts,
      total
    },
  };
}
