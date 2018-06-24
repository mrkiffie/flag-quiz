import * as React from "react";
import { observer, inject } from "mobx-react";
import { H2 } from "./ui/Heading";
import { FlagQuizStore } from "../store/FlagQuizStore";
import { Button } from "./ui/atoms/Button";
import { SettingsStore } from "../store/SettingsStore";
import { Switch } from "./ui/Switch";

interface ISettingsProps {
  path?: string;
  settings?: SettingsStore;
  resetScore?: () => void;
}

export const Settings: React.SFC<ISettingsProps> = inject(
  (allStores: { flagQuizStore: FlagQuizStore }) => ({
    settings: allStores.flagQuizStore.settings,
    resetScore: allStores.flagQuizStore.quiz.resetScore
  })
)(
  observer((props: ISettingsProps) => (
    <>
      <H2>Settings</H2>

      <Button onClick={props.settings.toggleScore}>
        Toggle Score
        <Switch checked={props.settings.isScoreEnabled} />
      </Button>
      {/* <Button onClick={props.settings.toggleFastMode}>
        Toggle Fast Mode
        <Switch checked={props.settings.isFastModeEnabled} />
      </Button> */}
      <Button onClick={props.resetScore}>Reset Score</Button>
    </>
  ))
);
