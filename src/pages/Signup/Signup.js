/** @jsx jsx */

import React, { useEffect } from 'react';
import {  jsx } from '@emotion/react';
import { connect } from 'react-redux';
import {  Button, CircularProgress, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { actionCreator, types } from '../../redux';
import backgroundImage from '../../assets/images/Skin.svg';
// import logoImage from '../../assets/images/logo.svg';
// import satoriLogo from '../../assets/images/satoriLogo.svg';
import InputText from '../../components/common/InputText';
import { useState } from "react";
import Modal from "react-modal";
import CloseIcon from '@mui/icons-material/Close';
import { Box, padding } from '@mui/system';
import flogo from '../../assets/images/flogo.png';
import inlogo from '../../assets/images/inlogo.png';
import glogo from '../../assets/images/glogo.png';
import backgroundImage1 from '../../assets/images/Boy.svg';
import backgroundImage2 from '../../assets/images/satori_logo.svg';
import zIndex from '@mui/material/styles/zIndex';

const Signup = ({ authentication, actionCreator }) => {
  const { isSubmitting } = authentication;
  const handleSignup = async (values) => {
    actionCreator({ type: types.SIGNUP, payload: values });
  };

  const regexMatch = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
  const validationSchema = Yup.object({
    username: Yup.string().required('Please enter a username'),
    companyName: Yup.string().required('Please enter your company name'),
    companyEmailAddress: Yup.string()
      .email('Please make sure to enter a valid email address')
      .required('Please enter your company email address'),
    password: Yup.string()
      .min(8, 'Password should be at least 8 characters')
      .matches(
        regexMatch,
        'Your password should contain at least one uppercase, lowercase, number and a special character'
      )
      .required('Please enter your password'),
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
    onSubmit: handleSignup,
    validationSchema,
  });

  const name = "jfEt@3DF$s"

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    styles.formy.filter = 'blur(0)'
  })

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
    styles.formy.filter = 'blur(2px)'
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
    styles.formy.filter = 'blur(0)'
  };


  return (
    <div css={styles.container}>

      <div className="container" css={styles.content}>
       <div css={styles.Boy}><img src={backgroundImage1} /></div> 
      <div css={styles.Logo}><img css={styles.Size} src={backgroundImage2} /></div>
        <form css={styles.formy} onSubmit={formik.handleSubmit}>

          <Button css={styles.input} id="disable"><Box css={styles.i1} sx={{ mx: "5px" }}><img src={glogo}/></Box><span css={styles.align}>Sign Up With Google</span></Button>
          <Button css={styles.input} id="disable"><Box css={styles.i} sx={{ mx: "20px" }} ><img src={inlogo}/></Box><span css={styles.align1}>Sign Up With Facebook</span></Button>
          <Button css={styles.input} id="disable"><Box css={styles.i} sx={{ mx: "15px" }}><img src={flogo}/></Box><span css={styles.align2}>Sign Up With LinkedIn</span></Button>

          <div css={styles.dividerContainer}>
            <div css={styles.divider}></div>
            <Typography css={styles.dividerLabel}>OR</Typography>
            <div css={styles.divider}></div>
          </div>
          <Button onClick={setModalIsOpenToTrue} css={styles.input} id="disable">Sign In With Email Or Phone</Button>
          <div css={styles.formButtonLinks}>
            <Typography> Already have an account? <Link to="/login" css={styles.buttonLink}> Log In</Link></Typography>
          </div>

        </form>


        <Modal isOpen={modalIsOpen} css={styles.Modal}>

          <form css={styles.form} onSubmit={formik.handleSubmit}>
            <Typography variant="h5" css={styles.formLabel}>
              <label>Sign Up</label>
              <Button onClick={setModalIsOpenToFalse} style={styles.close}><CloseIcon style={{ color: 'gray', fontSize: '30px' }} /></Button>
            </Typography>

            <InputText
              label="Full Name"
              id="Full Name"
              name="Full Name"
              css={styles.input}
              onChange={formik.handleChange}
              helperText={formik.touched.username && formik.errors.username}
              error={formik.touched.username && formik.errors.username}
              onBlur={formik.handleBlur}
            />
            <InputText
              label="Company Name"
              id="companyName"
              name="companyName"
              css={styles.input}
              onChange={formik.handleChange}
              helperText={formik.touched.companyName && formik.errors.companyName}
              error={formik.touched.companyName && formik.errors.companyName}
              onBlur={formik.handleBlur}
            />
            <InputText
              label="Email"
              id="Email"
              name="Email"
              css={styles.input}
              onChange={formik.handleChange}
              helperText={
                formik.touched.companyEmailAddress &&
                formik.errors.companyEmailAddress
              }
              error={
                formik.touched.companyEmailAddress &&
                formik.errors.companyEmailAddress
              }
              onBlur={formik.handleBlur}
            />

            <InputText
              label="Phone"
              id="Phone"
              name="Phone"
              css={styles.input}
              onChange={formik.handleChange}
              helperText={
                formik.touched.companyEmailAddress &&
                formik.errors.companyEmailAddress
              }
              error={
                formik.touched.companyEmailAddress &&
                formik.errors.companyEmailAddress
              }
              onBlur={formik.handleBlur}
            />

            <Typography css={styles.captcha}>
              <InputText id="" style={styles.Inp} label="City" />
              <InputText id="" style={styles.Inp} label="State" />
              <InputText id="" style={styles.Inp} label="Country" />
            </Typography>

            <InputText
              label="Password"
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
              label="Confirm Password"
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

            <Typography css={styles.captcha}>
              <InputText id="" style={styles.Inp1} label="Enter Captcha" />
              <InputText
                type="text"
                id="disable"
                label={name}
                variant="filled"
                style={styles.Inp1}
                size="small"
                inputProps={{
                  readOnly: true,
                  style: { textAlign: 'center' }
                }}
                disabled
              />
            </Typography>

            <div css={styles.formBottom}>
              <div css={styles.formButtonLinks}>
                <Typography> Already have an account? <Link to="/login" css={styles.buttonLink}> Log In</Link></Typography>
              </div>
              <Button
                className='design'
                variant="contained"
                color="primary"
                disabled={!formik.isValid || isSubmitting}
                disableElevation
                type="submit"
              >
                {isSubmitting ? <CircularProgress size={24} /> : 'Sign up'}
              </Button>



            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authentication }) => {
  return { authentication };
};

export default connect(mapStateToProps, { actionCreator })(Signup);

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    position:'relative'
  },
  content: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  align:{
    marginLeft:'20px'
   },
   align1:{
     marginLeft:'5px'
    },
    align2:{
     marginLeft:'10px'
    },
  close: {
    float: 'right',
    justifyContent: 'right',
    alignItems: 'right'
  },
  captcha: {
    display: 'flex',
    alignContent: 'stretch',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  Inp: {
    width: '32%',
  },
  Inp1: {
    width: '49%',
  },
  Boy: {
    top: '20%',
    left: '7%',
    position: 'fixed',
    // zIndex:-1
  },
  Logo: {
    position: 'fixed',
    right: 5,
    bottom: 5,
  },
  Size: {
    height: '20px',
    weight: '20px'
  },

  dividerContainer: {
    display: 'flex',
    flexDirection: 'colmn',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: '20px 0',
    zIndex:1
  },
  dividerLabel: {
    margin: '0 20px',
  },
  divider: {
    flex: 1,
    border: 'solid thin #30B9EF',
    width: '100px'
  },
  Modal: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    position:'absolute'
  },
  align:{
   marginLeft:'20px'
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
    maxWidth: '550px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    padding: '30px',
    borderRadius: '2px',
  },
  formy: {
    width: '100%',
    maxWidth: '550px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  formBottom: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  formButtonLinks: {
    textAlign: 'center',
    zIndex:1
  },
  input: {
    marginBottom: '16px',
  },
  link: {
    color: 'black',
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
  buttonLink: {
    color: '#000',
    textDecoration: 'none',
    backgroundColor: '#fff45b'
  },
  i:{
    backgroundColor:'#006dac',
    borderRadius:'15px',
    padding:'2px 5px'
  },
  i1:{
    backgroundColor:'#ffffff',
    borderRadius:'15px',
    padding:'2px 5px'
  }
}
