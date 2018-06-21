import { observable, computed } from "mobx";
import { indexedCountries } from "../data/indexed-countries";
import { ICountry } from "../data/countries";
import { Random } from "../util/Random";

export class CountrySpellingChallenge {
  private all = Object.keys(indexedCountries);
  @observable public answer: string = "";

  @observable private done: string[] = [];
  @observable private todo: string[] = Random.shuffleArray(this.all);

  @computed
  public get completed() {
    return this.done.length;
  }
  @computed
  public get total() {
    return this.all.length;
  }

  @computed
  public get country() {
    return indexedCountries[this.todo[this.todo.length - 1]];
  }

  public setAnswer = (value: string) => {
    this.answer = value;
    if (this.answer.toLowerCase().trim() === this.country.name.toLowerCase()) {
      this.done.push(this.country.iso);
      this.todo.pop();
      this.answer = "";
    }
  };

  public previous = () => {
    this.todo.push(this.todo.shift());
  };
  public next = () => {
    this.todo.unshift(this.todo.pop());
  };
  public reset = () => {
    this.done = [];
    this.todo = Random.shuffleArray(this.all);
  };
  public randomize = () => {
    this.todo = Random.shuffleArray(this.todo);
  };
}
