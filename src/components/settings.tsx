import * as React from "react";
import { connect } from "react-redux";
import ListItem from "material-ui/List/ListItem";
import Toggle from "material-ui/Toggle";
import { toggleScore } from "../actions";

interface ISettingsProps {
  score: boolean;
  open: boolean;
  toggleScore: () => {};
}

const SettingsBase: React.SFC<ISettingsProps> = ({
  score,
  open,
  toggleScore
}) =>
  <div>
    <ListItem
      primaryText="Settings"
      tabIndex={open ? 0 : -1}
      primaryTogglesNestedList
      nestedItems={[
        <ListItem
          key="toggle-score"
          primaryText="Toggle Score"
          rightToggle={<Toggle toggled={score} onToggle={toggleScore} />}
        />
      ]}
    />
  </div>;

export const Settings = connect(
  state => ({ score: state.settings.score, open: state.menu.open }),
  { toggleScore }
)(SettingsBase);
