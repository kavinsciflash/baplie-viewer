/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { jsx } from '@emotion/react';
import CssBaseline from "@mui/material/CssBaseline";
import { Router } from 'react-router-dom';
import { actionCreator, types } from '../redux';
import history from '../routes/History';
import Routes from '../routes/Routes';
import MaterialSnackbar from '../components/Snackbar';
import { connect } from 'react-redux';

const App = ({ actionCreator }) => {
  const [isValidating, setIsValidating] = useState(true);
  useEffect(() => {
    checkIfUserLoggedIn();
  }, [actionCreator]);
  const checkIfUserLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.accessToken) {
      actionCreator({ type: types.LOGIN_SUCCESS, payload: user });
      actionCreator({
        type: types.SET_CURRENT_FILE_COUNT,
        payload: user.currentfilecount,
      });
    }
    setIsValidating(false);
  };
  return (
    <>
      <CssBaseline />
      {!isValidating && (
        <div>
          <Router history={history}>
            <MaterialSnackbar />
            {<Routes />}
          </Router>
        </div>
      )}
    </>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { actionCreator })(App);

