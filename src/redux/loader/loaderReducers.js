import * as types from "./loaderTypes";

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return action.data;
    case types.HIDE_LOADER:
      return action.data;
    default:
      return state;
  }
};
