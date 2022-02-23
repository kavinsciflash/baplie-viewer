/** @jsx jsx */
import { jsx } from '@emotion/react';
import { connect } from 'react-redux';
import {
    Button
} from "@mui/material";
import logoImage from 'assets/images/logo.svg';
import styles from './styles';

const Dashboard = () => {
    return (
        <div css={styles.container}>
            <div css={styles.content}>
                <div css={styles.navigationBar}>
                    <img src={logoImage} css={styles.logoImage} alt="Solversmind Logo" />
                    <h1>Welcome to solverminds!!</h1>
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

  export default Dashboard;