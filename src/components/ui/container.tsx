import * as React from "react";
interface IProps extends React.Props<{}> {
  style?: any;
}
export const Container: React.SFC<IProps> = ({ children, style = {} }) =>
  <div
    style={{
      margin: "1em",
      display: "flex",
      justifyContent: "center",
      ...style
    }}
  >
    {children}
  </div>;
