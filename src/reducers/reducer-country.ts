import { indexedCountries } from "../data/indexed-countries";
import { LOAD_COUNTRY } from "../actions/index";

export default (state = null, action) => {
  const iso = action.payload;
  const country = { ...indexedCountries[iso] };

  switch (action.type) {
    case LOAD_COUNTRY:
      country.neighbours = country.neighbours.map(iso => indexedCountries[iso]);
      return country;
    default:
      return state;
  }
};
