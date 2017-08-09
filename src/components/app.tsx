import * as React from "react";
import { AppHeader } from "./app-header";
import { Debug } from "./debug";

interface IAppProps extends React.Props<{}> {}

export const App: React.SFC<IAppProps> = ({ children }) =>
  <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
    <AppHeader />
    {children}
    <Debug />
  </div>;
