import React, { useEffect, useState } from "react";
import Post from "./Post";
// import { PostsApi, Configuration, FeedResponse } from "../PostsClient";
import { PostsApi, Configuration, FeedResponse } from "pickly-posts-client";

export default function Posts() {
  const postsApi = new PostsApi({
    basePath: "http://localhost:4010",
  } as Configuration);

  const [posts, setPosts] = useState({} as FeedResponse);

  useEffect(() => {
    // postsApi.createPost({})
    // postsApi.createOptionsGroup({})
    postsApi
      .getPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch(console.error);
  }, []);
  return (
    <ul>
      <h3>Posts Count:{posts.postsCount}</h3>
      {posts.posts?.map((post, index) => (
        <Post key={index} postData={post} />
      ))}
    </ul>
  );
}
