import { TOGGLE_MENU } from "../actions";

const INITIAL_STATE = {
  open: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        open: action.payload
      };
    default:
      return state;
  }
};
