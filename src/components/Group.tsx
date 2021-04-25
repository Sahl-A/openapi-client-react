import React from "react";
import { OptionsGroupCreationRequest } from "../PostsClient";
import Options from "./Options";

export default function Group(props: { groupData: OptionsGroupCreationRequest }) {
  return (
    <ul>
      <h3>Group Name:{props.groupData.name}</h3>
      <Options optionsData={props.groupData.options} />
    </ul>
  );
}
