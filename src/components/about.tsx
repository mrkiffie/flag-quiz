import * as React from "react";
import muiThemeable from "material-ui/styles/muiThemeable";
import { SubHeading } from "./ui";

interface IAboutProps extends React.Props<{}> {
  muiTheme: any;
}

const AboutBase: React.SFC<IAboutProps> = ({ muiTheme }) => {
  const styles = {
    div: {
      textAlign: "center",
      fontSize: "1.5em",
      fontWeight: "300",
      margin: "1em"
    },
    a: {
      textDecoration: "none",
      color: muiTheme.palette.primary2Color
    }
  };

  return (
    <div style={styles.div as any}>
      <SubHeading>About</SubHeading>
      <p>a simple flag quiz</p>
      <p>
        created by{" "}
        <a style={styles.a} href="https://mrkiffie.com">
          mrkiffie
        </a>
      </p>
      <p>
        source code is on{" "}
        <a style={styles.a} href="https://github.com/mrkiffie/flag-quiz">
          github
        </a>
      </p>
      <p>
        please report any{" "}
        <a style={styles.a} href="https://github.com/mrkiffie/flag-quiz/issues">
          issues
        </a>
      </p>
      <p>
        uses{" "}
        <a style={styles.a} href="https://facebook.github.io/react/">
          react
        </a>,{" "}
        <a style={styles.a} href="http://redux.js.org/">
          redux
        </a>{" "}
        and&nbsp;<a style={styles.a} href="http://www.material-ui.com/">
          material-ui
        </a>
      </p>
      <p>
        hosted on{" "}
        <a style={styles.a} href="https://surge.sh">
          surge
        </a>
      </p>
    </div>
  );
};

export const About = muiThemeable()(AboutBase);
