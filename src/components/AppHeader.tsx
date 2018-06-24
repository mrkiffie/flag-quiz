import * as React from "react";
import { observer, inject } from "mobx-react";

import MenuIcon from "./icon/Menu";
import { Toolbar } from "./ui/Toolbar";
import { ToolbarHeading } from "./ui/ToolbarHeading";
import { IconButton } from "./ui/atoms/Button";

import { formatScore } from "../util/formatScore";

import { Navigation } from "./Navigation";
import { Score } from "./Score";
import { Timer } from "./ui/atoms/Timer";
import { FlagQuizStore } from "../store/FlagQuizStore";

interface IAppHeaderProps extends React.Props<any> {
  count?: number;
  score?: number;
  showScore?: boolean;
  timer?: string;
  showTimer?: boolean;
  toggleMenu?: (open?: boolean) => {};
}

export const AppHeader: React.SFC<IAppHeaderProps> = inject(
  (allStores: { flagQuizStore: FlagQuizStore }) => ({
    count: allStores.flagQuizStore.quiz.count,
    score: allStores.flagQuizStore.quiz.score,
    showScore: allStores.flagQuizStore.settings.isScoreEnabled,
    toggleMenu: allStores.flagQuizStore.menu.toggleMenu,
    timer: allStores.flagQuizStore.spellingChallenge.countDownTimer.timer,
    showTimer: allStores.flagQuizStore.spellingChallenge.countDownTimer.timer
  })
)(
  observer(props => (
    <>
      <Toolbar>
        <IconButton aria-label="Menu" onClick={props.toggleMenu}>
          <MenuIcon />
        </IconButton>
        <ToolbarHeading>Flag Quiz</ToolbarHeading>
        {props.showScore && (
          <Score>
            {props.score} / {props.count} -{" "}
            {formatScore(props.score, props.count)}
          </Score>
        )}
        {props.showTimer && <Timer>{props.timer}</Timer>}
      </Toolbar>
      <Navigation />
    </>
  ))
);
