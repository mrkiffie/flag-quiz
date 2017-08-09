import * as React from "react";

export default ({ score, count }) =>
  <div
    style={{
      color: "#fff",
      display: "flex",
      justifyContent: "flex-end",
      lineHeight: "48px",
      margin: "0 .5em 0 0",
      fontWeight: "300"
    }}
  >
    {score}/{count} - {`${(100 * (score / count) || 0).toFixed(2)}%`}
  </div>;
