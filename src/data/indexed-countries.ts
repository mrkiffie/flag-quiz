import countries, { ICountry } from "./countries";

export const indexedCountries: {
  [iso: string]: ICountry;
} = countries.reduce((hash, country) => {
  hash[country.iso] = country;
  return hash;
}, {});

countries.forEach(country => {
  country.neighbours.forEach(iso => {
    const neighbour = indexedCountries[iso];
    if (!neighbour) {
      console.warn("country not found", iso);
    }
  });
});

export default indexedCountries;
