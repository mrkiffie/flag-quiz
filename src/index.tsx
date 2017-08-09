/* eslint-env browser */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { Routes } from "./routes";
import Theme from "./components/ui/theme";
import reduxThunk from "redux-thunk";
import * as localForage from "localforage";

import reducers, { whitelist } from "./reducers";

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(reduxThunk), autoRehydrate())
);

localForage.config({
  name: "flag-quiz",
  version: 1.0,
  storeName: "flagquiz"
});

persistStore(store, { storage: localForage, whitelist });

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={Theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector(".container")
);
