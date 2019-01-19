import React from "react";
import { getContent, getStyles } from "./helpers";
import { Spring } from "react-spring";

export default () => {
  const { header, text } = getContent(1);
  return (
    <>
      <Spring
        from={{ opacity: 0, marginTop: -300 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div style={getStyles(1, props)}>
            <h2>{header}</h2>
            <p>{text}</p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 100 }}
              config={{ duration: 100000 }}
            >
              {({ number }) => (
                <div style={{ textAlign: "center" }}>
                  <h2>{number.toFixed()}</h2>
                </div>
              )}
            </Spring>
          </div>
        )}
      </Spring>
    </>
  );
};
