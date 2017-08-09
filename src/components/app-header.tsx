import * as React from "react";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import { Navigation } from "./navigation";
import { toggleMenu } from "../actions";
import Score from "./score";

interface IAppHeaderProps extends React.Props<any> {
  quiz: any;
  settings: any;
  menu: {
    open: boolean;
  };
  toggleMenu: (open?: boolean) => {};
}

const AppHeaderBase: React.SFC<IAppHeaderProps> = ({
  quiz,
  settings,
  menu,
  toggleMenu
}) =>
  <div>
    <AppBar
      title="Flag Quiz"
      onLeftIconButtonTouchTap={() => toggleMenu(true)}
      iconElementRight={settings.score ? <Score {...quiz} /> : <span />}
    />
    <Navigation open={menu.open} toggleMenu={toggleMenu} />
  </div>;

export const AppHeader = connect(
  ({ menu, settings, quiz }) => ({ menu, settings, quiz }),
  { toggleMenu }
)(AppHeaderBase);
