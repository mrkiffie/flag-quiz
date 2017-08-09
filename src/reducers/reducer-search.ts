import { SET_SEARCH_TERM } from "../actions";
import countries from "../data/countries";

const initialState = {
  term: "",
  filteredCountries: countries
};

export const filterCountriesByTerm = (term, countries) => {
  const regex = new RegExp(term, "i");
  return countries.filter(
    country => regex.test(country.name) || regex.test(country.capital)
  );
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        term: action.payload,
        filteredCountries: filterCountriesByTerm(action.payload, countries)
      };
    default:
      return state;
  }
};
