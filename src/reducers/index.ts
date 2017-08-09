import { combineReducers } from "redux";
import QuizReducer from "./reducer-quiz";
import CountryListReducer from "./reducer-country-list";
import CountryReducer from "./reducer-country";
import MenuReducer from "./reducer-menu";
import SettingsReducer from "./reducer-settings";
import SearchReducer from "./reducer-search";

const rootReducer = combineReducers({
  settings: SettingsReducer,
  menu: MenuReducer,
  quiz: QuizReducer,
  countries: CountryListReducer,
  country: CountryReducer,
  search: SearchReducer
});

export default rootReducer;

export const whitelist = ["settings", "quiz"];
