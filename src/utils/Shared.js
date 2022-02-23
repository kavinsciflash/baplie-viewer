import { store } from "../redux";
import { showSnackbarAction } from "../redux/snackbar/snackbarActions";

// To show error message that returned from backend
export function dispatchSnackbarError(message) {
  store.dispatch(showSnackbarAction(message, "error"));
}
// To show success message after any success request if needed and rendered from locale files
export function dispatchSnackbarSuccess(message) {
  store.dispatch(showSnackbarAction(message, "success"));
}
