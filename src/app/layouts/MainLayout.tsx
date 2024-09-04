import {FC, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Footer from '@app/components/Footer';
import Header from '@app/components/Header';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

import LocalizedText from '@components/localize/LocalizedText';

const links = [
    {
        label: 'Terms and Conditions',
        path: '/about',
        value: 'terms',
    },
    {
        label: 'Privacy Policy',
        path: '/about',
        value: 'privacy',
    },
    {
        label: 'Cookies Policy',
        path: '/about',
        value: 'cookies',
    },
    {
        label: 'General terms and conditions for delivery sharing',
        path: '/about',
        value: 'general',
    },
    {
        label: 'Charges and Payment',
        path: '/about',
        value: 'charges',
    },
];
const linksMobile = [
    {
        label: 'Terms and Conditions',
        path: '/about-mobile',
        value: 'terms',
    },
    {
        label: 'Privacy Policy',
        path: '/about-mobile',
        value: 'privacy',
    },
    {
        label: 'Cookies Policy',
        path: '/about-mobile',
        value: 'cookies',
    },
    {
        label: 'General terms and conditions for delivery sharing',
        path: '/about-mobile',
        value: 'general',
    },
    {
        label: 'Charges and Payment',
        path: '/about-mobile',
        value: 'charges',
    },
];

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.secondary.main,
        overflowY: 'auto',
    },
    contentContainer: {
        width: '90%',
        margin: '0 auto',
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
        '@media (min-width: 950px)': {
            width: '80%',
        },
    },
    headerText: {
        color: theme.palette.text.primary,
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
    },
    lastUpdatedText: {
        color: theme.palette.text.primary,
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '1rem',
        marginTop: '1rem',
    },
    layoutContainer: {
        display: 'flex',
        marginTop: '2.5rem',
        gap: '1rem',
        justifyContent: 'space-between',
    },
    mobileLinks: {
        width: '100%',
    },
    desktopLinks: {
        width: '15%',
        minWidth: '155px',
    },
    desktopContent: {
        width: '80%',
    },
    hiddenContent: {
        width: 0,
        display: 'none',
    },
    link: {
        padding: '1rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s, color 0.2s, border-left 0.2s',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '18px',
        borderBottomWidth: '1px',
        borderColor: theme.palette.secondary.light,
        color: '#242136',
        '&:hover': {
            backgroundColor: theme.custom.palette.newColors.lightGreen, // Replace with the value of lightGreen
            color: theme.palette.primary.main, // Replace with the value of logoGreen
            borderLeftWidth: '2px',
            borderColor: theme.palette.primary.main,
        },
    },
    activeLink: {
        backgroundColor: theme.custom.palette.newColors.lightGreen,
        color: theme.palette.primary.main,
        borderLeftWidth: '2px',
        borderColor: theme.palette.primary.main,
    },
}));

const MainLayout: FC = () => {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    const [activeTab, setActiveTab] = useState('Terms and Conditions');

    const navigate = useNavigate();

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.contentContainer}>
                <h1 className={`${isMobile ? 'text-[36px]' : 'text-[48px]'} ${classes.headerText}`}>
                    <LocalizedText label={{id: 'terms', defaultMessage: 'Terms and Conditions'}} />
                </h1>
                <p className={classes.lastUpdatedText}>
                    <LocalizedText label={{id: 'lastUpdated', defaultMessage: 'Last updated'}} />: 06.04.2023
                </p>
                <div className={classes.layoutContainer}>
                    {isMobile ? (
                        <ul className={classes.mobileLinks}>
                            {linksMobile.map(l => (
                                <li
                                    key={l.label}
                                    onClick={() => {
                                        navigate(l.path);
                                        setActiveTab(l.label);
                                    }}
                                    className={`${classes.link} ${l.label === activeTab ? classes.activeLink : ''}`}
                                >
                                    <LocalizedText label={{id: l.value, defaultMessage: l.label}} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className={classes.desktopLinks}>
                            {links.map(l => (
                                <li
                                    onClick={() => setActiveTab(l.label)}
                                    key={l.label}
                                    className={`${classes.link} ${l.label === activeTab ? classes.activeLink : ''}`}
                                >
                                    <LocalizedText label={{id: l.value, defaultMessage: l.label}} />
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className={isMobile ? classes.hiddenContent : classes.desktopContent}>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
