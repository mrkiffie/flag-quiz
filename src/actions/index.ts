export * from "./quiz";

export const LOAD_COUNTRY = "LOAD_COUNTRY";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const TOGGLE_DEBUG = "TOGGLE_DEBUG";
export const TOGGLE_SCORE = "TOGGLE_SCORE";
export const RESET_SCORE = "RESET_SCORE";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export const loadCountry = (iso: string = null) => ({
  type: LOAD_COUNTRY,
  payload: iso
});

export const toggleMenu = (open = false) => ({
  type: TOGGLE_MENU,
  payload: open
});

export const toggleScore = () => ({
  type: TOGGLE_SCORE
});

export const resetScore = () => ({
  type: RESET_SCORE
});

export const toggleDebug = () => ({
  type: TOGGLE_DEBUG
});

export const setSearchTerm = (term: string) => ({
  type: SET_SEARCH_TERM,
  payload: term
});
