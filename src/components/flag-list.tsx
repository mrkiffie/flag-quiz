import * as React from "react";
import { connect } from "react-redux";
import Link from "react-router-dom/es/Link";
import ListItem from "material-ui/List/ListItem";

import { List, AutoSizer } from "react-virtualized";
import { Flag } from "./ui/flag";
import { Search } from "./ui/search";

import { setSearchTerm } from "../actions";

import { ICountry } from "../data/countries";
interface IFlagListIndex extends React.Props<{}> {
  search: {
    term: string;
    filteredCountries: ICountry[];
  };
  setSearchTerm: (term: string) => void;
}

interface IRowRenderer {
  key: string;
  index: number;
  style: any;
}

interface IVirtulizedList {
  rowRenderer: (props: IRowRenderer) => JSX.Element;
}

class FlagListIndexBase extends React.Component<IFlagListIndex>
  implements IVirtulizedList {
  rowRenderer = ({ key, index, style }) => {
    const { filteredCountries = [] } = this.props.search;
    const country = filteredCountries[index];

    if (!country) {
      return null;
    }

    return (
      <ListItem
        containerElement={<Link to={`/countries/${country.iso}`} />}
        key={key}
        style={style}
      >
        <div style={{ textAlign: "center", marginBottom: ".5em" }}>
          {country.name}, {country.capital}
        </div>
        <Flag flag={country.flag} />
      </ListItem>
    );
  };

  onChange = (e, term) => {
    this.props.setSearchTerm(term);
  };

  render() {
    const { term, filteredCountries } = this.props.search;
    return (
      <div
        style={{ position: "absolute", top: 64, left: 0, right: 0, bottom: 0 }}
      >
        <Search value={term} onChange={this.onChange} />
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <AutoSizer>
            {({ height, width }) =>
              <List
                width={width}
                height={height}
                rowCount={filteredCountries.length}
                rowHeight={120}
                rowRenderer={this.rowRenderer}
              />}
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export const FlagListIndex = connect(({ search }) => ({ search }), {
  setSearchTerm
})(FlagListIndexBase);
