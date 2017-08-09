import * as React from "react";

export const Heading: React.SFC = ({ children }) =>
  <h1
    style={{
      lineHeight: "1.5",
      margin: "0 0 .5em",
      textAlign: "center",
      fontWeight: 300
    }}
  >
    {children}
  </h1>;
