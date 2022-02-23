import React, { Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux';
import * as LazyComponent from '../utils/LazyLoaded';
import Loader from '../components/Loader/Loader';
import PrivateRoute from '../utils/PrivateRoute';

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ConnectedRouter history={history}>
        <Switch>
          <LazyComponent.Login path="/login" exact />
          <LazyComponent.Signup path="/signup" exact />
          <LazyComponent.ForgotPassword path="/forgot-password" exact />
          <LazyComponent.Activation path="/activation" exact />
          <LazyComponent.ResetPassword path="/forgotpassword" exact />
          <PrivateRoute component={LazyComponent.Home} path="/" exact />
          <Redirect from="**" to={`/`} exact />
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
};

export default Routes;
