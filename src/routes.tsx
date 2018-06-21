import * as React from "react";
import { Router } from "@reach/router";
import { App } from "./components/App";
import { FlagListIndex } from "./components/FlagList";
import { CountryDetail } from "./components/CountryDetail";
import { SpellingChallenge } from "./components/SpellingChallenge";
import { Quiz } from "./components/Quiz";
import { About } from "./components/About";

export const Routes = () => (
  <App>
    <Router>
      <Quiz path="/" />
      <About path="/about" />
      <FlagListIndex path="/flag-list" />
      <CountryDetail path="/countries/:iso" />
      <Quiz path="/:fromTo" />
      <SpellingChallenge path="/spelling-challenge" />
    </Router>
  </App>
);
