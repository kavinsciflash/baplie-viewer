import { all } from "redux-saga/effects";
import { saga as authenticationSaga } from "./authentication";

export function* watchSagas() {
  yield all([
    authenticationSaga()
  ]);
}
