import React from 'react';

export const Home = React.lazy(() => import('../pages/Home'));
export const Login = React.lazy(() => import('../pages/Login'));
export const Signup = React.lazy(() => import('../pages/Signup'));
export const Activation = React.lazy(() => import('../pages/Activation'));
export const ForgotPassword = React.lazy(() =>
  import('../pages/ForgotPassword')
);
export const ResetPassword = React.lazy(() =>
  import('../pages/ResetPassword')
);
export const NotFound = React.lazy(() =>
  import('../components/NotFound')
);
