/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { jsx } from '@emotion/react';
import { Button, CircularProgress, Typography } from "@mui/material";
import { Link, useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { types, actionCreator } from '../../redux';
import qs from 'query-string';

import backgroundImage from '../../assets/images/Skin.svg';
import logoImage from '../../assets/images/logo.svg';
import satoriLogo from '../../assets/images/satoriLogo.svg';

const ForgotPassword = ({ actionCreator, authentication, location }) => {
  const history = useHistory();

  const { isSubmitting, message, errorMessage } = authentication;
  const queryToken = new URLSearchParams(useLocation().search).get('token');
  const [token, setToken] = useState(queryToken);

  const handleButtonClick = () => {
    if (!isSubmitting) {
      if (errorMessage) {
        window.location.reload();
      } else {
        history.push('/login');
      }
    }
  };

  useEffect(() => {
    const handleActivation = () => {
      if (token) {
        actionCreator({ type: types.ACTIVATION, payload: token });
      }
    };
    handleActivation();
  }, [actionCreator, token]);

  return (
    <div css={styles.container}>
      <div className="container" css={styles.content}>
        <img src={logoImage} css={styles.logoImage} alt="Solversmind Logo" />
      
        <Typography variant="h5" css={styles.title}>
          Online Baplie Viewer
        </Typography>

        <form css={styles.form}>
          <Typography variant="h5" css={styles.formLabel}>
            Account activation
          </Typography>
          <Typography css={styles.formSubLabel}>
            {errorMessage
              ? errorMessage
              : message
              ? message
              : "We're currently activating you're account. Please wait."}
          </Typography>
          <div css={styles.formBottom}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              type="button"
              disabled={isSubmitting}
              onClick={handleButtonClick}
              css={styles.button}
            >
              {isSubmitting ? (
                <CircularProgress size={24} />
              ) : errorMessage ? (
                'Retry'
              ) : (
                'Back to Login'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authentication }) => {
  return { authentication };
};

export default connect(mapStateToProps, { actionCreator })(ForgotPassword);

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  },
  content: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    top: 32,
    position: 'absolute',
    fontWeight: '600',
    letterSpacing: 0,
  },
  formLabel: {
    textAlign: 'left',
    width: '100%',
    marginBottom: '16px',
    fontWeight: '600',
    letterSpacing: 0,
  },
  formSubLabel: {
    fontWeight: '500',
    textAlign: 'left',
    width: '100%',
    marginBottom: '24px',
    letterSpacing: 0,
  },
  form: {
    width: '100%',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
  },
  formBottom: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  formButtonLinks: {
    display: 'flex',
    flexDirection: 'column ',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontWeight: '600',
    flex: 1,
    width: '100%',
  },
  input: {
    marginBottom: '24px',
  },
  link: {
    color: 'white',
    flex: 1,
    width: '100%',
    textDecoration: 'none',
  },
  logoImage: {
    position: 'absolute',
    top: 22,
    left: 22,
  },
  footerLogo: {
    position: 'absolute',
    bottom: 10,
    right: 30,
    height: '100px',
    userSelect: 'none',
    textAlign: 'right',
  },
  dividerContainer: {
    display: 'flex',
    flexDirection: 'colmn',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: '20px 0',
  },
  dividerLabel: {
    margin: '0 20px',
  },
  divider: {
    flex: 1,
    border: 'solid thin #30B9EF',
  },
};
