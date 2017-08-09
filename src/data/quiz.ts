import { Random } from "../util/random";
import countries, { ICountry } from "../data/countries";

export const QUIZ_OPTIONS_COUNT = 5;

type Iso3 = string;

let queue: Iso3[] = [];

export const generateQuizOptions = (num = QUIZ_OPTIONS_COUNT) => {
  if (queue.length > countries.length * 0.2) {
    queue = queue.slice(1);
  }

  const options = Random.getRandomRange(
    countries.filter(country => queue.indexOf(country.iso3) === -1),
    num
  );
  const answer = Random.getRandomRange(options, 1)[0];

  queue.push(answer.iso3);

  return {
    options,
    answer
  };
};
