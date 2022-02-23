import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { types } from '..';
import { dispatchSnackbarSuccess, dispatchSnackbarError } from 'utils/Shared';
import { push } from 'connected-react-router';
import { axiosInstance } from 'network/apis';
import { errorHandler } from 'utils/handler';
import { showSnackbarAction } from '../snackbar/snackbarActions';

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const activation = async (token) => {
  try {
    const response = await axiosInstance.post(`auth/activation`, {
      token,
    });
    return response;
  } catch (e) {
    errorHandler(e);
  }
};

const resetPassword = async ({ token, password }) => {
  try {
    const response = await axiosInstance.post(`auth/resetpassword`, {
      token,
      password,
    });
    return response;
  } catch (e) {
    errorHandler(e);
  }
};

const forgotPassword = async (email) => {
  try {
    const response = await axiosInstance.post(
      `auth/sendforgotpassword/${email}`
    );
    return response;
  } catch (e) {
    errorHandler(e);
  }
};

const login = async ({
  username,
  password,
  companyName,
  companyEmailAddress,
}) => {
  try {
    const response = await axiosInstance.post('auth/signin', {
      username,
      password,
    });
    return response;
  } catch (e) {
    errorHandler(e);
  }
};

const signup = async ({
  username,
  password,
  companyName,
  companyEmailAddress,
}) => {
  try {
    const response = await axiosInstance.post('auth/signup', {
      username,
      password,
      companyName,
      companyEmail: companyEmailAddress,
      userType: 'CUSTOMER',
    });
    return response;
  } catch (e) {
    errorHandler(e);
  }
};

export function* fnLogin({ payload }) {
  try {
    const { data } = yield call(login, payload);
    yield localStorage.setItem('user', JSON.stringify(data));
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: data,
    });
    yield put(showSnackbarAction("Login successful", "success"));
    yield call(delay, 100);
    yield put(push('/'));
  } catch (error) {
    dispatchSnackbarError(error.message);
    yield put({ type: types.LOGIN_FAILED });
  }
}

export function* fnActivation({ payload }) {
  try {
    const { data } = yield call(activation, payload);
    yield put({
      type: types.ACTIVATION_SUCCESS,
      payload:
        'Congratulations. Your account has been activated. You can now use our BaplieViewer application. Head back to the login page.',
    });

    dispatchSnackbarSuccess('Your account has been activated successfully.');
  } catch (error) {
    dispatchSnackbarError(error.message);
    yield put({
      type: types.ACTIVATION_FAILED,
      payload:
        'Sorry, we are unable to activate your account. Please try refreshing the page.',
    });
  }
}

export function* fnResetPassword({ payload }) {
  try {
    const { data } = yield call(resetPassword, payload);
    yield put({
      type: types.RESET_PASSWORD_SUCCESS,
    });

    dispatchSnackbarSuccess(
      'Reset password has been successful. You can now login using your new password.'
    );
    yield put(push('/login'));
  } catch (error) {
    dispatchSnackbarError(error.message);
    yield put({ type: types.RESET_PASSWORD_FAILED });
  }
}

export function* fnSignup({ payload }) {
  try {
    const { data } = yield call(signup, payload);
    yield put({
      type: types.SIGNUP_SUCCESS,
      payload: {
        data,
      },
    });

    dispatchSnackbarSuccess('Account has been successfully registered.');
    yield put(push('/login'));
  } catch (error) {
    dispatchSnackbarError(error.message);
    yield put({ type: types.SIGNUP_FAILED });
  }
}

export function* fnForgotPassword({ payload }) {
  try {
    const { data } = yield call(forgotPassword, payload);
    yield put({
      type: types.FORGOT_PASSWORD_SUCCESS,
      payload: {
        data: data.data,
      },
    });

    dispatchSnackbarSuccess(
      'Your reset password link has been succesfully sent to your email.'
    );
    yield put(push('/login'));
  } catch (error) {
    dispatchSnackbarError(
      'Sending recovery email has failed. Please try again.'
    );
    yield put({ type: types.FORGOT_PASSWORD_FAILED });
  }
}

export function* fnLogout() {
  yield call(delay, 1000);
  localStorage.removeItem('user');
  dispatchSnackbarSuccess('You have logged out successfully.');
  yield put(push('/login'));
}

export default function* watcher() {
  yield takeLatest(types.LOGIN, fnLogin);
  yield takeLatest(types.SIGNUP, fnSignup);
  yield takeLatest(types.FORGOT_PASSWORD, fnForgotPassword);
  yield takeLatest(types.ACTIVATION, fnActivation);
  yield takeLatest(types.RESET_PASSWORD, fnResetPassword);
  yield takeLatest(types.LOGOUT, fnLogout);
}
