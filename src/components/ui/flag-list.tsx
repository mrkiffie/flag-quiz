import * as React from "react";
import Link from "react-router-dom/es/Link";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import { Flag } from "./flag";

import { ICountry } from "../../data/countries";

interface IFlagListProps extends React.Props<{}> {
  countries: ICountry[];
}

export const FlagList: React.SFC<IFlagListProps> = ({ countries = [] }) =>
  <List
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }}
  >
    {countries.map(country =>
      <ListItem
        key={country.iso}
        containerElement={<Link to={`/countries/${country.iso}`} />}
      >
        <Flag flag={country.flag} />
      </ListItem>
    )}
  </List>;
