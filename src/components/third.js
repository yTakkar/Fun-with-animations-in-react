import React from "react";
import { getContent, getStyles } from "./helpers";

export default () => {
  const { header, text } = getContent(3);
  return (
    <div style={getStyles(3)}>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
};
