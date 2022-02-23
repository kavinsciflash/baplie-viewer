/** @jsx jsx */

import React from 'react';
import { jsx, keyframes } from '@emotion/react';
import './Loader.scss';
import backgroundImage from 'assets/images/dashboard-bg.png';
import loadingIcon from 'assets/images/loadingIcon.png';

const Loader = () => {
  return (
    <div
      css={styles.container}
      className="spinnerContainer d-flex justify-content-center align-items-center h-100 absolute"
    >
      <img src={loadingIcon} alt="Loading..." css={styles.spinner} />
    </div>
  );
};

export default Loader;

const pulseKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(359deg)' },
});

const styles = {
  container: {
    position: 'absolute',
    zIndex: '900',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  },
  spinner: {
    animation: 'x 2s infinite linear',
    animationName: pulseKeyframes,
    height: '80px',
    width: '80px',
  },
};
