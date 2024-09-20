import {FC, useEffect} from 'react';
import {CgArrowLongLeft} from 'react-icons/cg';
import {useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Footer from '@app/components/Footer';
import Header from '@app/components/Header';
import LocalizedText from '@components/localize/LocalizedText';
import {defineMessages} from 'react-intl';

import {Typography} from '@mui/material';

import {CustomTheme} from '@style';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        minHeight: '120vh',
        backgroundColor: theme.palette.secondary.main,
        overflow: 'scroll',
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

const localized = defineMessages({
    lastUpdated: {
        id: 'MainLayoutMobile_lastUpdated',
        defaultMessage: 'Last updated',
    },
    terms: {
        id: 'MainLayoutMobile_terms',
        defaultMessage: 'Terms and Conditions',
    },
    goBack: {
        id: 'MainLayoutMobile_goBack',
        defaultMessage: 'Back',
    },
});

const MainLayoutMobile: FC = () => {
    const navigate = useNavigate();

    const classes = useStyles();

    useEffect(() => {
        document.body.classList.add('overflow-auto');

        return () => {
            document.body.classList.remove('overflow-auto');
        };
    }, []);

    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.innerContainer}>
                <div onClick={() => navigate(-1)} className={classes.goBackButton}>
                    <CgArrowLongLeft />
                    <LocalizedText label={localized.goBack} />
                </div>
                <div className={classes.termsText}>
                    <LocalizedText label={localized.terms} />
                </div>
                <p className={classes.lastUpdatedText}>
                    <Typography variant="body1">
                        <LocalizedText label={localized.lastUpdated} />: 06.04.2023
                    </Typography>
                </p>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default MainLayoutMobile;
