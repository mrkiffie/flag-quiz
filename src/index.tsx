import * as React from "react";
import * as ReactDOM from "react-dom";
import { observer, Provider } from "mobx-react";

import { Router } from "@reach/router";
import { App as AppShell } from "./components/App";
import { FlagListIndex } from "./components/FlagList";
import { CountryDetail } from "./components/CountryDetail";
import { SpellingChallenge } from "./components/SpellingChallenge";
import { Settings } from "./components/Settings";
import { Quiz } from "./components/Quiz";
import { About } from "./components/About";

import { FlagQuizStore } from "./store/FlagQuizStore";

const flagQuizStore = new FlagQuizStore();

// tslint:disable-next-line:no-string-literal
window["kiff"] = flagQuizStore;

const App = observer(() => (
  <Provider flagQuizStore={flagQuizStore}>
    <AppShell>
      <Router>
        <Quiz path="/" />
        <About path="/about" />
        <FlagListIndex path="/flag-list" />
        <CountryDetail path="/countries/:iso" />
        <Quiz path="/:fromTo" />
        <SpellingChallenge path="/spelling-challenge" />
        <Settings path="settings" />
      </Router>
    </AppShell>
  </Provider>
));

ReactDOM.render(<App />, document.getElementById("flag-quiz"));
