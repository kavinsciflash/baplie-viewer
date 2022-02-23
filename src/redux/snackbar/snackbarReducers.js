import * as types from "./snackbarTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case types.SHOW_SNACKBAR:
      return {
        ...state,
        isOpen: true,
        message: action.message,
        type: action.snackbarType,
      };
    case types.HIDE_SNACKBAR:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
