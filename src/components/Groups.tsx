import React from "react";
import Group from "./Group";
import { OptionsGroupCreation } from "../PostsClient";

export default function Groups(props: { groupData: any }) {
  const htmlOutput = props.groupData.groups.map((group: any, index: number) => (
    <Group key={index} groupData={group} />
  ));
  return htmlOutput;
}
