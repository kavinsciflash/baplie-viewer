import { dispatchSnackbarSuccess } from 'utils/Shared';
import { put } from 'redux-saga/effects';
// import { types } from 'ducks';

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    // Modify request here
    // store.dispatch(loader(true));
  }
  return request;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    // Hanlde Response
    // store.dispatch(loader(false));
  }
  console.log(response);
  return response;
 
};

export const errorHandler = (error) => {
  const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
  if (isHandlerEnabled(error.config)) {
    if (error.response.status === 401) {
      localStorage.removeItem('user');
      dispatchSnackbarSuccess('Session expired. Please login again.');
      delay(3000);
      window.location.replace('/login');
    }
    // store.dispatch(loader(false));
    // You can decide what you need to do to handle errors.
    // here's example for unautherized user to log them out .
    // error.response.status === 401 && Auth.signOut();
  }
  return Promise.reject({ ...error });
};
