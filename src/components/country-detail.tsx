import * as React from "react";
import { connect } from "react-redux";
import { selectCountry, loadCountry } from "../actions/index";
import { Flag, FlagList, Container, Heading, SubHeading } from "./ui";

import { ICountry } from "../data/countries";

interface ICountryDetailProps extends React.Props<{}> {
  loadCountry: (iso: string) => void;
  params: {
    iso?: string;
  };
  country: ICountry;
}

class CountryDetailBase extends React.Component<ICountryDetailProps> {
  componentDidMount() {
    this.props.loadCountry(this.props.params.iso);
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.params.iso;
    const newId = this.props.params.iso;
    if (newId !== oldId) {
      this.props.loadCountry(this.props.params.iso);
    }
  }

  render() {
    const country = this.props.country;
    if (!country) {
      return <div />;
    }

    return (
      <div>
        <Container>
          <Flag flag={country.flag} large />
        </Container>
        <Heading>
          {country.name}
        </Heading>
        <SubHeading>
          {country.capital}
        </SubHeading>

        <FlagList countries={country.neighbours} />
      </div>
    );
  }
}

export const CountryDetail = connect(({ country }) => ({ country }), {
  loadCountry,
  selectCountry
})(CountryDetailBase);
