import React from "react";
import "./App.css";
import { PostsApi, Configuration } from "./PostsClient";
import Posts from "./components/Posts";

function App() {
  const posts = new PostsApi({
    basePath: "http://localhost:4010",
  } as Configuration);
  posts
    .getPosts()
    .then((res) => console.log(res))
    .catch(console.error);
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
