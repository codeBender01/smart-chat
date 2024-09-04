import {FC} from 'react';
import {CgArrowLongLeft} from 'react-icons/cg';
import {useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Footer from '@app/components/Footer';
import Header from '@app/components/Header';
import LocalizedText from '@components/localize/LocalizedText';

import {Typography} from '@mui/material';

import {CustomTheme} from '@style';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        minHeight: '90vh',
        backgroundColor: theme.palette.secondary.main,
    },
    innerContainer: {
        padding: '2rem 24px',
    },
    goBackButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: theme.palette.primary.main,
        fontSize: '24px',
        width: 'fit-content',
        cursor: 'pointer',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: '700',
        transition: 'all 200ms',
        '&:hover': {
            opacity: 0.85,
        },
    },
    termsText: {
        color: theme.palette.text.primary,
        fontWeight: '700',
        fontfamily: 'Quicksand',
        fontSize: '36px',
    },
    lastUpdatedText: {
        color: theme.palette.text.primary,
        margin: '16px 0',
    },
}));

const MainLayoutMobile: FC = () => {
    const navigate = useNavigate();

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.innerContainer}>
                <div onClick={() => navigate(-1)} className={classes.goBackButton}>
                    <CgArrowLongLeft />
                    <LocalizedText label={{id: 'goBack', defaultMessage: 'Back'}} />
                </div>
                <div className={classes.termsText}>
                    <LocalizedText label={{id: 'terms', defaultMessage: 'Terms and Conditions'}} />
                </div>
                <p className={classes.lastUpdatedText}>
                    <Typography variant="body1">
                        <LocalizedText label={{id: 'lastUpdated', defaultMessage: 'Last updated'}} />: 06.04.2023
                    </Typography>
                </p>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default MainLayoutMobile;
