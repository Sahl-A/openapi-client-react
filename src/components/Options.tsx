import React from "react";
import { OptionsGroupCreationResponse } from "../PostsClient";
import Option from "./Option";

export default function Options(props: { optionsData: any }) {
  return (
    <div>
      {props.optionsData.map((option: any, index: number) => (
        <Option key={index} optionData={option} />
      ))}
    </div>
  );
}
