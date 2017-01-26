import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Link from 'react-router/lib/Link';

class Navigation extends Component {

  onCLick(delay = 200) {
    setTimeout(() => {
      this.props.toggleMenu(false);
    }, delay);
  }

  render() {
    const routes = [
      { route: '/flag-country', text: 'Flag Country' },
      { route: '/flag-capital', text: 'Flag Capital' },
      { route: '/country-flag', text: 'Country Flag' },
      { route: '/country-capital', text: 'Country Capital' },
      { route: '/capital-flag', text: 'Capital Flag' },
      { route: '/capital-country', text: 'Capital Country' },
      { route: '/flag-list', text: 'Flag List' },
    ];

    const { open, muiTheme, score } = this.props;

    return (
      <div>
        <Drawer open={open}>
          <List style={{ paddingTop: 0, textAlign: 'left' }}>
            <ListItem
              onClick={() => this.onCLick(0)}
              style={{
                backgroundColor: muiTheme.palette.primary1Color,
                height: muiTheme.appBar.height,
              }}
              tabIndex={open ? 0 : -1}
            >
              <NavigationClose
                style={{
                  color: muiTheme.palette.alternateTextColor,
                  marginTop: '2px',
                }}
              />
            </ListItem>
            {routes.map(({ route, text }) => (
              <ListItem
                key={route}
                containerElement={<Link to={route} />}
                primaryText={text}
                tabIndex={open ? 0 : -1}
                onClick={() => this.onCLick()}
              />
            ))}

          </List>
          <Divider />
          <List>
            <ListItem
              primaryText="Settings"
              tabIndex={open ? 0 : -1}
              primaryTogglesNestedList
              nestedItems={[
                <ListItem
                  key="toggle-score"
                  primaryText="Toggle Score"
                  rightToggle={<Toggle
                    toggled={this.props.score}
                    onToggle={() => this.props.toggleScore()}
                  />}
                />,
              ]}
            />
            <ListItem
              containerElement={<Link to="/about" />}
              primaryText="About"
              tabIndex={open ? 0 : -1}
              onClick={() => this.onCLick()}
            />
          </List>
        </Drawer>
      </div>
    );
  }
}

export default muiThemeable()(Navigation);