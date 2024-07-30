import Comments from "@/app/components/Comments";
import getAllPost from "@/lib/getAllPosts";
import getPostComments from "@/lib/getPostComments";
import getSinglePost from "@/lib/getSinglePost";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getSinglePost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function SinglePost({ params }) {
  const { id } = params;
  const postPromise = getSinglePost(id);
  const commentsPromise = getPostComments(id);
  const post = await postPromise;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr className="my-5" />

      <Suspense fallback="<h1>Loading commments....</h1>">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPost();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
