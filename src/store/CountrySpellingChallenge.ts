import { observable, computed, action } from "mobx";
import { indexedCountries } from "../data/indexed-countries";
import { Random } from "../util/Random";

export class CountrySpellingChallenge {
  private readonly all = Object.keys(indexedCountries);
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

  @action
  public setAnswer = (value: string) => {
    this.answer = value;
    if (this.answer.toLowerCase().trim() === this.country.name.toLowerCase()) {
      this.done.push(this.country.iso);
      this.todo.pop();
      this.answer = "";
    }
  };

  @action
  public previous = () => {
    this.todo.push(this.todo.shift());
  };

  @action
  public next = () => {
    this.todo.unshift(this.todo.pop());
  };

  @action
  public reset = () => {
    this.done = [];
    this.todo = Random.shuffleArray(this.all);
  };

  @action
  public randomize = () => {
    this.todo = Random.shuffleArray(this.todo);
  };
}
