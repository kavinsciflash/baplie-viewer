/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/react';
import { Button, CircularProgress, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { types, actionCreator } from '../../redux';
import { Box } from '@mui/system';
import backgroundImage from '../../assets/images/Skin.svg';
// import logoImage from '../../assets/images/logo.svg';
// import satoriLogo from '../../assets/images/satoriLogo.svg';
import InputText from '../../components/common/InputText';

const ForgotPassword = ({ actionCreator, authentication }) => {
  const { isSubmitting } = authentication;
  const handleSendLoginLink = ({ email }) => {
    actionCreator({ type: types.FORGOT_PASSWORD, payload: email });
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Please enter your company email address'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: handleSendLoginLink,
    validationSchema,
  });

  return (
    <div css={styles.container}>
      <div className="container" css={styles.content}>

        <form css={styles.form} onSubmit={formik.handleSubmit}>
          <Typography variant="h5" css={styles.formLabel}>
            Trouble Logging In?
          </Typography>
          <Typography css={styles.formSubLabel}>
            Enter Your Email, Phone, or Username & we'll
            Send you a Link to Get Back into Your Account.
          </Typography>
          <InputText
            label="Email"
            id="email"
            name="email"
            css={styles.input}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && !!formik.errors.email}
            onBlur={formik.handleBlur}
          />

          <div css={styles.formBottom}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              disabled={!formik.isValid || isSubmitting}
              type="submit"
              css={styles.button}
            >
              {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </div>

          <div css={styles.dividerContainer}>
            <div css={styles.divider}></div>
            <Typography css={styles.dividerLabel}>OR</Typography>
            <div css={styles.divider}></div>
          </div>
          {/* <div css={styles.formButtonLinks}> */}
            {/* <Link to="/signup" css={styles.link}>
              <Button disableElevation css={styles.button}>
                Sign Up / Create New Account
              </Button>
            </Link> */}
            
            <div css={styles.formButtonLinks}>
            <Typography><Link to="/signup" css={styles.link}>Sign Up / Create New Account</Link></Typography>
            <Box sx={{mt:'10px'}}><Typography><Link to="/login" css={styles.link}>Back To Login</Link></Typography></Box>
            </div>
            
            {/* <Link to="/login" css={styles.link}>
              <Button disableElevation css={styles.button}>
                Back to Login
              </Button>
            </Link>
          </div> */}
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
    alignItems: 'left',
    justifyContent: 'left',
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
    color: 'black',
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
    border: 'solid thin #a5a5a5',
  },
};
