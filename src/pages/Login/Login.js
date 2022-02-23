/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/react';
import { Button, Typography, CircularProgress, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { types, actionCreator } from '../../redux';
import backgroundImage from '../../assets/images/Skin.svg';
import backgroundImage1 from '../../assets/images/Boy.svg';

import backgroundImage2 from '../../assets/images/satori_logo.svg';
import logoImage from '../../assets/images/logo.svg';
import satoriLogo from '../../assets/images/satoriLogo.svg';
import InputText from '../../components/common/InputText';
import { textAlign } from '@mui/system';
import Image from 'react-bootstrap/Image'

const Login = ({ authentication, actionCreator }) => {
  const { isAuthenticating } = authentication;

  const handleLogin = async (values) => {
    actionCreator({ type: types.LOGIN, payload: values });
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().required('Please enter your password'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: handleLogin,
    validationSchema,
  });

  // value for captcha
  const name = "j&bcgGHF%dh*";

  return (
    <div css={styles.container}>
       <div css={styles.Boy}><img src={backgroundImage1} /></div> 
      <div css={styles.Logo}><img css={styles.Size} src={backgroundImage2} /></div>
      <div className="container" css={styles.content}>
        <form css={styles.form} onSubmit={formik.handleSubmit}>
          <Typography variant="h5" css={styles.formLabel}>
            Log In
          </Typography>
          <InputText
            label="Username"
            id="username"
            name="username"
            css={styles.input}
            onChange={formik.handleChange}
            helperText={formik.touched.username && formik.errors.username}
            error={formik.touched.username && !!formik.errors.username}
            onBlur={formik.handleBlur}
          />

          <InputText
            label="Password"
            id="password"
            name="password"
            type="password"
            css={styles.input}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && !!formik.errors.password}
            onBlur={formik.handleBlur}
          />

          <Typography css={styles.captcha}>
            <InputText id="" style={styles.Inp} label="Enter Captcha" />
            <InputText
              type="text"
              id="disable"
              label={name}
              variant="filled"
              style={styles.Inp}
              size="small"
              inputProps={{
                readOnly: true,
                style: { textAlign: 'center' }
              }}
              disabled
            />
          </Typography>

          <div css={styles.formBottom}>
            <Link to="/forgot-password" css={styles.link}>
              Forgot Password
            </Link>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              type="submit"
              disabled={isAuthenticating}
            >
              {isAuthenticating ? <CircularProgress size={24} /> : 'Login'}
            </Button>
          </div>
          <div css={styles.formButtonLinks}>
            <Typography>or <Link to="/signup" css={styles.buttonLink}>Sign Up</Link> Now?</Typography>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authentication }) => {
  return { authentication };
};

export default connect(mapStateToProps, { actionCreator })(Login);

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    position:'relative'
  },
  Size: {
    height: '20px',
    weight: '20px'
  },
  captcha: {
    display: 'flex',
    alignContent: 'stretch',
    justifyContent: 'space-between',
  },
  Inp: {
    width: '49%',
  },
  Boy: {
    top: '20%',
    left: '7%',
    position: 'absolute',
    // zIndex:-1
  },
  Logo: {
    position: 'fixed',
    right: 5,
    bottom: 5,
    
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
  form: {
    width: '100%',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
  },
  formBottom: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex:1,
  },
  formButtonLinks:{
    zIndex:1
  },
  input: {
    marginBottom: '16px',
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
  button: {
    fontWeight: '600',
    flex: 1,
    width: '100%',
  },
  link: {
    color: '#000',
    textDecoration: 'none',
  },
  buttonLink: {
    color: '#000',
    textDecoration: 'none',
    backgroundColor: '#fff45b'
  },
}; 