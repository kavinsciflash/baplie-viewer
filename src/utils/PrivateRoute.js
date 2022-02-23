import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authentication, ...rest }) => {
  const { isAuthenticated } = authentication;
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={`/login`} />
      }
    />
  );
};

const mapStateToProps = ({ authentication }) => {
  return { authentication };
};

export default connect(mapStateToProps)(PrivateRoute);
