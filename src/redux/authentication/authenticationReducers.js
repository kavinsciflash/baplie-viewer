import * as types from './authenticationType';

const INITIAL_STATE = {
  isAuthenticating: false,
  isAuthenticated: false,
  isSubmitting: false,
  token: null,
  errorMessage: null,
  message: null,
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isAuthenticating: true,
        token: action.payload.accessToken,
        email: action.payload.email,
        userId: action.payload.id,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        data: action.payload,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticating: false,
      };
    case types.ACTIVATION:
      return {
        ...state,
        isSubmitting: true,
      };
    case types.ACTIVATION_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        message: action.payload,
      };
    case types.ACTIVATION_FAILED:
      return {
        ...state,
        isSubmitting: false,
        errorMessage: action.payload,
      };
    case types.RESET_PASSWORD:
      return {
        ...state,
        isSubmitting: true,
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
      };
    case types.RESET_PASSWORD_FAILED:
      return {
        ...state,
        isSubmitting: false,
      };
    case types.SIGNUP:
      return {
        ...state,
        isSubmitting: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        data: action.payload,
      };
    case types.SIGNUP_FAILED:
      return {
        ...state,
        isSubmitting: false,
      };
    case types.FORGOT_PASSWORD:
      return {
        ...state,
        isSubmitting: true,
      };
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        data: action.payload,
      };
    case types.FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        isSubmitting: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
