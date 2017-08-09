import * as React from "react";
import { connect } from "react-redux";
import Drawer from "material-ui/Drawer";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import Divider from "material-ui/Divider";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import muiThemeable from "material-ui/styles/muiThemeable";
import Link from "react-router-dom/es/Link";
import { Settings } from "./settings";
import { resetScore } from "../actions";

interface INavigation extends React.Props<{}> {
  toggleMenu: (boolean) => {};
  open: boolean;
  muiTheme: any;
  resetScore: () => {};
}
class NavigationBase extends React.Component<INavigation> {
  onCLick(delay = 200) {
    setTimeout(() => {
      this.props.toggleMenu(false);
    }, delay);
  }

  routes = [
    { route: "/flag-country", text: "Flag Country" },
    { route: "/flag-capital", text: "Flag Capital" },
    { route: "/country-flag", text: "Country Flag" },
    { route: "/country-capital", text: "Country Capital" },
    { route: "/capital-flag", text: "Capital Flag" },
    { route: "/capital-country", text: "Capital Country" },
    { route: "/flag-list", text: "Flag List" }
  ];

  render() {
    const { open, muiTheme } = this.props;

    const tabIndex = open ? 0 : -1;

    return (
      <div>
        <Drawer
          open={open}
          docked={false}
          disableSwipeToOpen={true}
          onRequestChange={() => this.onCLick(0)}
        >
          <List style={{ paddingTop: 0, textAlign: "left" }}>
            <ListItem
              onClick={() => this.onCLick(0)}
              style={{
                backgroundColor: muiTheme.palette.primary1Color,
                height: muiTheme.appBar.height
              }}
              tabIndex={tabIndex}
            >
              <NavigationClose
                style={{
                  color: muiTheme.palette.alternateTextColor,
                  marginTop: "2px"
                }}
              />
            </ListItem>
            {this.routes.map(({ route, text }) =>
              <ListItem
                key={route}
                containerElement={<Link to={route} />}
                primaryText={text}
                tabIndex={tabIndex}
                onClick={() => this.onCLick()}
              />
            )}
          </List>
          <Divider />
          <List>
            <Settings />
            <ListItem
              primaryText="Reset Score"
              tabIndex={tabIndex}
              onClick={() => this.props.resetScore()}
            />
            <ListItem
              containerElement={<Link to="/about" />}
              primaryText="About"
              tabIndex={tabIndex}
              onClick={() => this.onCLick()}
            />
          </List>
        </Drawer>
      </div>
    );
  }
}

export const Navigation = muiThemeable()(
  connect(null, { resetScore })(NavigationBase)
);
