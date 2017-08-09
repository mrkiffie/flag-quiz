import * as React from "react";
import { App } from "./components/app";
import { FlagListIndex } from "./components/flag-list";
import { CountryDetail } from "./components/country-detail";
import { Quiz } from "./components/quiz";
import { About } from "./components/about";
import Route from "react-router/es/Route";
import Switch from "react-router/es/Switch";
import Router from "react-router-dom/es/BrowserRouter";

export const Routes = () =>
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Quiz} />
        <Route path="/about" component={About} />
        <Route path="/flag-list" component={FlagListIndex} />
        <Route
          path="/countries/:iso"
          render={({ match }) => <CountryDetail params={match.params} />}
        />
        <Route
          path="/:from-:to"
          render={({ match }) => <Quiz params={match.params} />}
        />
      </Switch>
    </App>
  </Router>;
