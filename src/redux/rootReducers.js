import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as authentication } from './authentication';
import { reducer as snackbar } from './snackbar';
import { reducer as loader } from './loader';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    authentication,
    loader,
    snackbar
  });

export default createRootReducer;
