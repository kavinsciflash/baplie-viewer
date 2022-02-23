import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import reducers from './rootReducers';
import createSagaMiddleware from 'redux-saga';
import { watchSagas } from './rootSagas';
import * as types from './actionTypes';

const history = createBrowserHistory();

const saga = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

let middleware = [routerMiddleware(history), saga];
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middleware = [...middleware, logger];
}

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducers(history), enhancer);

const actionCreator = (props) => props;

saga.run(watchSagas);

export { store, types, actionCreator, history };
