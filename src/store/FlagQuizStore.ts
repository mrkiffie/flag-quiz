import { reaction } from "mobx";
import { MenuStore } from "./MenuStore";
import { QuizStore } from "./QuizStore";
import { SettingsStore } from "./SettingsStore";
import { CountryListStore } from "./CountyListStore";
import { SearchStore } from "./SearchStore";
import { CountryStore } from "./CountryStore";
import { CountrySpellingChallenge } from "./CountrySpellingChallenge";

export class FlagQuizStore {
  public settings = new SettingsStore();
  public menu = new MenuStore();
  public quiz = new QuizStore();
  public countries = new CountryListStore();
  public country = new CountryStore();
  public search = new SearchStore();
  public spellingChallenge = new CountrySpellingChallenge();
}
