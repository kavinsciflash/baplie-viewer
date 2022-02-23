/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/react';
import { Button, CircularProgress, Typography } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { types, actionCreator } from '../../redux';

import backgroundImage from '../../assets/images/Skin.svg';
import logoImage from '../../assets/images/logo.svg';
import satoriLogo from '../../assets/images/satoriLogo.svg';
import InputText from '../../components/common/InputText';

const ResetPassword = ({ actionCreator, authentication }) => {
  const { isSubmitting } = authentication;
  const params = new URLSearchParams(useLocation().search);

  const handleResetPassword = ({ password }) => {
    const token = params.get('token');
    actionCreator({
      type: types.RESET_PASSWORD,
      payload: { password, token },
    });
  };

  const regexMatch =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Please enter your password')
      .min(8, 'Password should be at least 8 characters')
      .matches(
        regexMatch,
        'Your password should contain at least one uppercase, lowercase, number and a special character'
      ),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref('password'), null],
        'Please make sure your passwords match'
      )
      .required('Please confirm your password'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      companyName: '',
      companyEmailAddress: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: handleResetPassword,
    validationSchema,
  });

  return (
    <div css={styles.container}>
      <div className="container" css={styles.content}>
        <img src={logoImage} css={styles.logoImage} alt="Solversmind Logo" />
        

        <Typography variant="h5" css={styles.title}>
          Online Baplie Viewer
        </Typography>

        <form css={styles.form} onSubmit={formik.handleSubmit}>
          <Typography variant="h5" css={styles.formLabel}>
            Reset Your Password
          </Typography>
          <Typography css={styles.formSubLabel}>
            Strong passwords include at least one number, one lowercase, one
            uppercase and one special character.
          </Typography>
          <InputText
            label="Enter your new password"
            id="password"
            name="password"
            type="password"
            css={styles.input}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
          />
          <InputText
            label="Enter your password one more time"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            css={styles.input}
            onChange={formik.handleChange}
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
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
              {isSubmitting ? <CircularProgress size={24} /> : 'Reset Password'}
            </Button>
          </div>

          <div css={styles.dividerContainer}>
            <div css={styles.divider}></div>
            <Typography css={styles.dividerLabel}>OR</Typography>
            <div css={styles.divider}></div>
          </div>
          <div css={styles.formButtonLinks}>
            <Link to="/signup" css={styles.link}>
              <Button disableElevation css={styles.button}>
                Create New Account
              </Button>
            </Link>

            <Link to="/login" css={styles.link}>
              <Button disableElevation css={styles.button}>
                Back to Login
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authentication }) => {
  return { authentication };
};

export default connect(mapStateToProps, { actionCreator })(ResetPassword);

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
