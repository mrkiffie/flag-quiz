import * as React from "react";
import { connect } from "react-redux";

interface IDebugProps extends React.Props<{}> {
  state: any;
}

const DebugBase: React.SFC<IDebugProps> = ({ state }) =>
  <div>
    {state.settings.debug &&
      <pre>
        {JSON.stringify(state, null, 4)}
      </pre>}
  </div>;

export const Debug = connect(state => ({ state }))(DebugBase);
