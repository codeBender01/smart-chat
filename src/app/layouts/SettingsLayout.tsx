import {FC} from 'react';
import {useMediaQuery} from 'react-responsive';
import {useLocation, useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Header from '@app/components/Header';
import LocalizedText from '@components/localize/LocalizedText';
import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

const links = [
    {
        label: 'Password',
        path: '/settings/password',
        value: 'password',
    },
    {
        label: 'Currency',
        path: '/settings/currency',
        value: 'currency',
    },
    {
        label: 'Language',
        path: '/settings/language',
        value: 'language',
    },
    {
        label: 'Payments',
        path: '/settings/payments',
        value: 'payments',
    },
    {
        label: 'Account',
        path: '/settings/account',
        value: 'account',
    },
];

const linksMobile = [
    {
        label: 'Password',
        path: '/settings-mob/password',
        value: 'password',
    },
    {
        label: 'Currency',
        path: '/settings-mob/currency',
        value: 'currency',
    },
    {
        label: 'Language',
        path: '/settings-mob/language',
        value: 'language',
    },
    {
        label: 'Payments',
        path: '/settings-mob/payments',
        value: 'payments',
    },
    {
        label: 'Account',
        path: '/settings-mob/account',
        value: 'account',
    },
];

const useStyles = makeStyles((theme: CustomTheme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    contentContainer: {
        backgroundColor: theme.palette.secondary.main,
        minHeight: '90vh',
    },
    headerContainer: {
        width: '95%',
        margin: '0 auto',
        marginTop: '5rem',
        '@media (min-width: 620px)': {
            width: '55%',
        },
        '@media (min-width: 1024px)': {
            width: '63%',
        },
        '@media (min-width: 1440px)': {
            width: '60%',
        },
    },
    headerText: {
        fontSize: '48px',
        color: theme.custom.palette.newColors.headerIconBorder,
        fontFamily: 'Quicksand, sans-serif',
        marginBottom: '1rem',
        fontWeight: '700',
    },
    layoutContainer: {
        display: 'flex',
        gap: '1.5rem',
        width: '95%',
        margin: '0 auto',
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
    link: {
        padding: '0.75rem 1rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s, color 0.2s, border-left 0.2s',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '18px',
        borderColor: theme.palette.secondary.light,
        color: '#242136',
        '&:hover': {
            backgroundColor: theme.custom.palette.newColors.lightGreen,
            color: theme.palette.primary.main,
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
    hiddenContent: {
        width: 0,
        display: 'none',
    },
}));

const SettingsLayout: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isMobile = useMediaQuery({query: '(max-width: 620px)'});

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.contentContainer}>
                <div className={classes.headerContainer}>
                    <h1 className={classes.headerText}>
                        <LocalizedText label={{id: 'headerSettings'}} />
                    </h1>
                </div>
                <div className={classes.layoutContainer}>
                    {isMobile ? (
                        <ul className={classes.mobileLinks}>
                            {linksMobile.map(l => (
                                <li
                                    onClick={() => navigate(l.path)}
                                    key={l.label}
                                    className={`${classes.link} ${location.pathname.includes(l.path) ? classes.activeLink : ''}`}
                                >
                                    <LocalizedText label={{id: l.value}} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className={classes.desktopLinks}>
                            {links.map(l => (
                                <li
                                    onClick={() => navigate(l.path)}
                                    key={l.label}
                                    className={`${classes.link} ${location.pathname.includes(l.path) ? classes.activeLink : ''}`}
                                >
                                    <LocalizedText label={{id: l.value}} />
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className={isMobile ? classes.hiddenContent : classes.desktopContent}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsLayout;
