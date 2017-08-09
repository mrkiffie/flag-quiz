import * as React from "react";

export const SubHeading: React.SFC = ({ children }) =>
  <h2
    style={{
      lineHeight: "1.5",
      margin: "0 0 .5em",
      textAlign: "center",
      fontWeight: 300
    }}
  >
    {children}
  </h2>;
