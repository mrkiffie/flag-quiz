import * as React from "react";
import { observer, inject } from "mobx-react";
import { Flag } from "./ui/Flag";
import { FlagList } from "./ui/FlagList";
import { Container } from "./ui/Container";
import { Heading } from "./ui/Heading";
import { SubHeading } from "./ui/SubHeading";
import { Input } from "./ui/atoms/Input";
import { IconButton } from "./ui/atoms/Button";
import LeftArrow from "./icon/LeftArrow";
import RightArrow from "./icon/RightArrow";

import { ICountry } from "../data/countries";
import { FlagQuizStore } from "../store/FlagQuizStore";

interface ISpellingChallengeProps {
  path?: string;
  country?: ICountry;
  next?: () => void;
  previous?: () => void;
  value?: string;
  setAnswer?: (value: string) => void;
  total?: number;
  completed?: number;
  reset?: () => void;
  randomize?: () => void;
}

export const SpellingChallenge: React.SFC<ISpellingChallengeProps> = inject(
  (allStores: { flagQuizStore: FlagQuizStore }) => ({
    country: allStores.flagQuizStore.spellingChallenge.country,
    next: allStores.flagQuizStore.spellingChallenge.next,
    previous: allStores.flagQuizStore.spellingChallenge.previous,
    value: allStores.flagQuizStore.spellingChallenge.answer,
    setAnswer: allStores.flagQuizStore.spellingChallenge.setAnswer,
    reset: allStores.flagQuizStore.spellingChallenge.reset,
    total: allStores.flagQuizStore.spellingChallenge.total,
    completed: allStores.flagQuizStore.spellingChallenge.completed,
    randomize: allStores.flagQuizStore.spellingChallenge.randomize
  })
)(
  observer(props => (
    <>
      <Container>
        <Flag flag={props.country.flag} large />
      </Container>
      {props.completed} / {props.total}
      <IconButton onClick={props.previous}>
        <LeftArrow />
      </IconButton>
      <Input
        value={props.value}
        onChange={e => props.setAnswer(e.target.value)}
      />
      <IconButton onClick={props.next}>
        <RightArrow />
      </IconButton>
      <IconButton onClick={props.reset}>Reset</IconButton>
      <IconButton onClick={props.randomize}>Randomize</IconButton>
    </>
  ))
);
