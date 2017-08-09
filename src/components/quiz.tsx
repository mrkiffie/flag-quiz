import * as React from "react";
import { connect } from "react-redux";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import { Flag, Container, AnswerStatus, Heading } from "./ui";
import { answerQuiz } from "../actions";

import { ICountry } from "../data/countries";
interface IQuizProps extends React.Props<{}> {
  selected: ICountry;
  answerQuiz: (answer: ICountry) => void;
  options?: ICountry[];
  answer?: ICountry;
  params: {
    from?: string;
    to?: string;
  };
}

class QuizBase extends React.Component<IQuizProps> {
  onClick(option) {
    if (this.props.selected) {
      return; // option already selected - prevent duplicate clicks
    }
    this.props.answerQuiz(option);
  }

  renderOptions(type) {
    return this.props.options.map(option =>
      <ListItem
        key={option.iso3}
        onClick={() => this.onClick(option)}
        innerDivStyle={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          lineHeight: "2",
          padding: ".5em 1em"
        }}
        style={{
          padding: "0em 1em"
        }}
      >
        <span style={{ width: "24px" }} />
        {type === "flag" && <Flag flag={option.flag} />}
        {type === "country" && option.name}
        {type === "capital" && option.capital}
        <AnswerStatus {...this.props} option={option} />
      </ListItem>
    );
  }

  render() {
    const { answer, params = {} } = this.props;

    if (!answer) {
      return <div />;
    }

    const { from = "flag", to = "country" } = params;

    return (
      <div>
        {from === "flag" &&
          <Container>
            <Flag flag={answer.flag} large />
          </Container>}
        {from === "country" &&
          <Heading>
            {answer.name}
          </Heading>}
        {from === "capital" &&
          <Heading>
            {answer.capital}
          </Heading>}
        <List style={{ maxWidth: "100%", width: "35em", margin: "0 auto" }}>
          {this.renderOptions(to)}
        </List>
      </div>
    );
  }
}

export const Quiz = connect(({ quiz }) => quiz, { answerQuiz })(QuizBase);
