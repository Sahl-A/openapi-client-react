import React from "react";
import Groups from "./Groups";
import { SinglePostResponse } from "../PostsClient";

export default function Post(props: { postData: SinglePostResponse }) {
  return (
    <ul>
      <h4 style={{ display: "inline-block", marginRight: "1rem" }}>
        Post id:{" "}
      </h4>
      <span>{props.postData.id}</span>
      <div>
        <Groups groupData={props.postData.options_groups}/>
      </div>
    </ul>
  );
}
