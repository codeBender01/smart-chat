import {FC} from 'react';
import {PiGlobe} from 'react-icons/pi';

import LocalizedText from '@components/localize/LocalizedText';

import facebook from '../../common/assets/facebook.png';
import instagram from '../../common/assets/instagram.png';
import logo from '../../common/assets/logo.png';
import telegram from '../../common/assets/telegram.png';
import twitter from '../../common/assets/twitter.png';

import {makeStyles} from '@mui/styles';
import {display} from '@mui/system';
import {CustomTheme} from '@style';

const useStyles = makeStyles((theme: CustomTheme) => ({
    footer: {
        width: '100%',
        marginTop: 'auto',
        paddingTop: '56px',
        paddingBottom: '56px',
    },
    container: {
        width: '90%',
        '@media (min-width: 768px)': {
            width: '80%',
        },
        margin: '0 auto',
    },

    upperContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '44px',
        },
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1rem',
    },
    logoContainer: {
        width: '120px',
        height: '35px',
    },
    logoImage: {
        width: '100%',
    },
    descriptionText: {
        color: theme.palette.text.primary,
        fontSize: '16px',
        fontFamily: 'Open Sans, sans-serif',
        marginTop: '1rem',
        marginBottom: '1.5rem',
        '@media (max-width: 768px)': {
            marginBottom: 0,
        },
    },
    languageSelector: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: theme.palette.text.primary,
        fontSize: '16px',
        fontFamily: 'Open Sans, sans-serif',
        marginBottom: '1.5rem',
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    socialIconsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        '@media (max-width:768px)': {
            display: 'none',
        },
    },
    socialIcon: {
        width: '24px',
        height: '24px',
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.15s',
        },
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '70%',
        '@media (min-width: 768px)': {
            width: '50%',
            flexDirection: 'row',
        },
    },
    companyLinks: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        width: '100%',
        '@media (min-width: 768px)': {
            width: '50%',
        },
    },
    sectionTitle: {
        fontFamily: 'Quicksand, sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    linkItem: {
        fontFamily: 'Quicksand, sans-serif',
        color: theme.palette.text.primary,
        fontSize: '18px',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.8,
            transition: 'opacity 0.2s',
        },
        '&:not(:first-child)': {
            marginTop: '0.5rem',
        },
    },
    contactInfo: {
        fontFamily: 'Quicksand, sans-serif',
        color: theme.palette.text.primary,
        fontSize: '20px',
        '&:not(:first-child)': {
            marginTop: '0.5rem',
        },
    },
    noteText: {
        fontFamily: 'Open Sans, sans-serif',
        color: theme.palette.text.primary,
        fontSize: '18px',

        marginBottom: '1rem',
    },
    divider: {
        width: '100%',
        height: '1px',
        backgroundColor: theme.palette.text.primary,
        marginTop: '2rem',
        marginBottom: '2rem',
    },
    copyrightText: {
        fontFamily: 'Open Sans, sans-serif',
        color: theme.palette.text.primary,
        fontSize: '18px',
    },
    socialIconsContainerMobile: {
        display: 'none',
        alignItems: 'center',
        gap: '44px',
        alignSelf: 'center',
        '@media (max-width: 768px)': {
            display: 'flex',
        },
    },
}));

const Footer: FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.upperContainer}>
                    <div className={classes.flexContainer}>
                        <div className={classes.logoContainer}>
                            <img className={classes.logoImage} src={logo} alt="Eelow" />
                        </div>
                        <p className={classes.descriptionText}>
                            <LocalizedText label={{id: 'weNeed', defaultMessage: 'We need each other'}} />
                        </p>
                        <div className={classes.languageSelector}>
                            <PiGlobe size={24} />
                            English
                        </div>
                        <div className={classes.socialIconsContainer}>
                            <div className={classes.socialIcon}>
                                <img className={classes.logoImage} src={facebook} alt="facebook" />
                            </div>
                            <div className={classes.socialIcon}>
                                <img className={classes.logoImage} src={twitter} alt="twitter" />
                            </div>
                            <div className={classes.socialIcon}>
                                <img className={classes.logoImage} src={instagram} alt="instagram" />
                            </div>
                            <div className={classes.socialIcon}>
                                <img className={classes.logoImage} src={telegram} alt="telegram" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.linksContainer}>
                        <div className={classes.companyLinks}>
                            <div className={classes.sectionTitle}>
                                <LocalizedText label={{id: 'company', defaultMessage: 'Company'}} />
                            </div>
                            <ul>
                                <li className={classes.linkItem}>
                                    <LocalizedText label={{id: 'terms', defaultMessage: 'Terms and Conditions'}} />
                                </li>
                                <li className={classes.linkItem}>
                                    <LocalizedText label={{id: 'ourBlog', defaultMessage: 'Our blog'}} />
                                </li>
                            </ul>
                        </div>
                        <div className={classes.companyLinks}>
                            <div className={classes.sectionTitle}>
                                <LocalizedText label={{id: 'alwaysInTouch', defaultMessage: 'We are always in touch!'}} />
                            </div>
                            <ul>
                                <li className={classes.noteText}>
                                    <LocalizedText
                                        label={{id: 'youCanWrite', defaultMessage: 'You can write us a letter or call the numbers'}}
                                    />
                                </li>
                                <li className={classes.contactInfo}>(123) 456 789</li>
                                <li className={classes.contactInfo}>example@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.socialIconsContainerMobile}>
                        <div className={classes.socialIcon}>
                            <img className={classes.logoImage} src={facebook} alt="facebook" />
                        </div>
                        <div className={classes.socialIcon}>
                            <img className={classes.logoImage} src={twitter} alt="twitter" />
                        </div>
                        <div className={classes.socialIcon}>
                            <img className={classes.logoImage} src={instagram} alt="instagram" />
                        </div>
                        <div className={classes.socialIcon}>
                            <img className={classes.logoImage} src={telegram} alt="telegram" />
                        </div>
                    </div>
                </div>
                <div className={classes.divider}></div>
                <div className={classes.copyrightText}>All rights reserved © 2008-2023</div>
            </div>
        </footer>
    );
};

export default Footer;
