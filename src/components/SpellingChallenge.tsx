import * as React from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";
import { Flag } from "./ui/Flag";
import { Container } from "./ui/Container";
import { Input } from "./ui/atoms/Input";
import { Section } from "./ui/atoms/Section";
import { P } from "./ui/atoms/P";
import { Page } from "./ui/atoms/Page";
import { IconButton, Button } from "./ui/atoms/Button";
import LeftArrow from "./icon/LeftArrow";
import RightArrow from "./icon/RightArrow";
import { Score } from "./Score";

import { FlagQuizStore } from "../store/FlagQuizStore";
import { CountrySpellingChallenge } from "../store/CountrySpellingChallenge";
import { TimedGame } from "../store/TimedGame";
import { CountDownTimer } from "../store/CountDownTimer";
import { Heading } from "./ui/Heading";
import { ICountry } from "../data/countries";
import { SubHeading } from "./ui/SubHeading";

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.5em 0;
`;
const Padding = styled.div`
  padding: 0 1em;
`;

interface ISpellingQuiz {
  country?: ICountry;
  previous?: () => void;
  next?: () => void;
  randomize?: () => void;
  value?: string;
  completed?: number;
  total?: number;
  setAnswer?: (value: string) => void;
}
const SpellingQuiz: React.SFC<ISpellingQuiz> = inject(
  (allStores: { flagQuizStore: FlagQuizStore }) => ({
    spellingChallenge: allStores.flagQuizStore.spellingChallenge,
    country: allStores.flagQuizStore.spellingChallenge.game.country,
    previous: allStores.flagQuizStore.spellingChallenge.game.previous,
    next: allStores.flagQuizStore.spellingChallenge.game.next,
    randomize: allStores.flagQuizStore.spellingChallenge.game.randomize,
    value: allStores.flagQuizStore.spellingChallenge.game.answer,
    completed: allStores.flagQuizStore.spellingChallenge.game.completed,
    total: allStores.flagQuizStore.spellingChallenge.game.total,
    setAnswer: allStores.flagQuizStore.spellingChallenge.game.setAnswer
  })
)(
  observer((props: ISpellingQuiz) => (
    <Section>
      <Container>
        <Flag flag={props.country.flag} large />
      </Container>

      <Flex>
        <Padding>
          <IconButton onClick={props.previous}>
            <LeftArrow />
          </IconButton>
        </Padding>
        <Input
          value={props.value}
          onChange={e => props.setAnswer(e.target.value)}
        />
        <Padding>
          <IconButton onClick={props.next}>
            <RightArrow />
          </IconButton>
        </Padding>
      </Flex>
      <Flex>
        <Score>
          {props.completed} / {props.total}
        </Score>
        <Button onClick={props.randomize} autoWidth>
          Randomize
        </Button>
      </Flex>
    </Section>
  ))
);

const SpellingQuizIntro: React.SFC<{ start: () => void }> = props => (
  <Page>
    <SubHeading>Country Spelling Challenge</SubHeading>
    <P>
      During this challenge, you will be shown various countries flags. The
      challenge is to correctly identify the country and spell the country's
      name of displayed flag. Type your answer into the input field.
    </P>
    <P>
      When you have successflly typed the correct country name, you will be
      shown the next countries flag.
    </P>
    <P>
      The challenge is over when either time runs out or you sucessfully
      identify all the flags.
    </P>
    <P>
      As this is a race against time, you may temporarily skip flags you don't
      know.
    </P>

    <Button onClick={props.start} autoWidth autoFocus>
      Start Game
    </Button>
  </Page>
);

interface ISpellingQuizWin {
  playAgain: () => void;
  remainingTime: string;
}

const SpellingQuizWin: React.SFC<ISpellingQuizWin> = props => (
  <Page>
    <Heading>Congratulations!</Heading>
    <P center>
      Completed with <strong>{props.remainingTime}</strong> remaining.
    </P>

    <Button onClick={props.playAgain} autoWidth autoFocus>
      Play Again
    </Button>
  </Page>
);

interface ISpellingQuizLose {
  tryAgain: () => void;
  total: number;
  completed: number;
}

const SpellingQuizLose: React.SFC<ISpellingQuizLose> = props => (
  <Page>
    <Heading>Times Up!</Heading>

    <P center>
      Answered <strong>{props.completed}</strong> of{" "}
      <strong>{props.total}</strong>.
    </P>

    <Button onClick={props.tryAgain} autoWidth autoFocus>
      Try Again
    </Button>
  </Page>
);

type TTimedSpellingChallenge = TimedGame<
  CountrySpellingChallenge,
  CountDownTimer
>;
interface ISpellingChallengeProps {
  path?: string;
  spellingChallenge?: TTimedSpellingChallenge;
}

export const SpellingChallenge: React.SFC<ISpellingChallengeProps> = inject(
  (allStores: { flagQuizStore: FlagQuizStore }) => ({
    spellingChallenge: allStores.flagQuizStore.spellingChallenge
  })
)(
  observer((props: ISpellingChallengeProps) => {
    if (!props.spellingChallenge.started) {
      return <SpellingQuizIntro start={props.spellingChallenge.start} />;
    }

    if (props.spellingChallenge.win) {
      return (
        <SpellingQuizWin
          playAgain={props.spellingChallenge.start}
          remainingTime={props.spellingChallenge.timer}
        />
      );
    }

    if (props.spellingChallenge.lose) {
      return (
        <SpellingQuizLose
          tryAgain={props.spellingChallenge.start}
          total={props.spellingChallenge.game.total}
          completed={props.spellingChallenge.game.completed}
        />
      );
    }

    return <SpellingQuiz />;
  })
);
