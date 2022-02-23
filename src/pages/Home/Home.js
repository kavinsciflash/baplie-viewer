/** @jsx jsx */
import { jsx } from '@emotion/react';
import { connect } from 'react-redux';
import {
    Button
} from "@mui/material";
import logoImage from 'assets/images/stem.png';
import styles from './styles';

const Home = () => {
    const handleLogout = () => {
        window.location.replace('/login');
    };


    return (
        <div css={styles.container}>
            <div css={styles.content}>
                <div css={styles.navigationBar}>
                    <img src={logoImage} css={styles.logoImage} alt="satoristem" />
                    <h1>Welcome to satoristem!!</h1>
                    <Button
                        css={styles.logoutButton}
                        variant="outlined"
                        color="primary"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authentication }) => {
    return { authentication };
  };

  export default connect(mapStateToProps)(Home);