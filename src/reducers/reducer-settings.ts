import { REHYDRATE } from "redux-persist/constants";
import { TOGGLE_SCORE, TOGGLE_DEBUG } from "../actions";

const INITIAL_STATE = {
  debug: false,
  score: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      const { settings } = action.payload;
      return {
        ...INITIAL_STATE,
        ...state,
        ...settings
      };
    case TOGGLE_SCORE:
      return {
        ...state,
        score: !state.score
      };
    case TOGGLE_DEBUG:
      return {
        ...state,
        debug: !state.debug
      };
    default:
      return state;
  }
};
