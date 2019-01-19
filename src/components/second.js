import React from "react";
import { Spring } from "react-spring";
import { getContent, getStyles } from "./helpers";

export default props => {
  const { header, text } = getContent(2);
  return (
    <>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000 }}
      >
        {style => (
          <div style={getStyles(2, style)}>
            <h2>{header}</h2>
            <p>{text}</p>
            <button onClick={props.toggle}>Toggle Next Component</button>
          </div>
        )}
      </Spring>
    </>
  );
};
