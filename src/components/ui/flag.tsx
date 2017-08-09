import * as React from "react";

interface IFlagProps extends React.Props<{}> {
  flag: string;
  large?: boolean;
  onLoad?: () => {};
}

export const Flag: React.SFC<IFlagProps> = ({ flag = "", large, onLoad }) => {
  const flagStyle = {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: large ? "45vh" : "4em",
    display: "block",
    margin: "0 auto"
  };

  return (
    <div style={{ width: "100%" }}>
      <img
        src={`/${flag.replace(/^\//, "")}`}
        alt="Flag"
        style={flagStyle}
        onLoad={onLoad}
      />
    </div>
  );
};
