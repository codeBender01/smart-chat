import React, {FC} from 'react';
import {IoIosInformationCircleOutline} from 'react-icons/io';
import {IoMoon} from 'react-icons/io5';
import {MdOutlineMenu} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import {Avatar, Badge} from '@mui/material';
import {defineMessages} from 'react-intl';

import Typography from '@mui/material/Typography';

import LocalizedText from '@components/localize/LocalizedText';

import logo from '../../common/assets/logo.png';
import profileImage from '../../common/assets/profileImage.jpeg';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

const useStyles = makeStyles((theme: CustomTheme) => ({
    header: {
        backgroundColor: theme.palette.primary.contrastText,
        width: '100%',
        borderBottomWidth: '1px',
        borderColor: theme.palette.primary.light,
        paddingTop: '24px',
        paddingBottom: '24px',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        [theme.breakpoints.up(768)]: {
            width: '80%',
        },
    },
    leftSide: {
        display: 'flex',
        alignItems: 'center',
        gap: '85px',
    },
    logoWrapper: {
        width: '120px',
        cursor: 'pointer',
        marginBottom: '12px',
    },
    logo: {
        width: '100%',
    },
    listItem: {
        cursor: 'pointer',
        transition: 'opacity 0.15s ease-in-out',
        textWrap: 'nowrap',
        '&:hover': {
            opacity: 0.8,
        },
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        borderWidth: '1px',
        borderColor: theme.custom.palette.newColors.headerIconBorder,
        cursor: 'pointer',
        marginRight: '12px',
        '&:hover': {
            backgroundColor: theme.custom.palette.newColors.headerIconBorder,
            color: theme.palette.primary.contrastText,
        },
        transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
    },
    alertBadge: {
        width: '8px',
        height: '8px',
        backgroundColor: theme.palette.error.main,
        borderRadius: '50%',
        borderWidth: '1px',
        borderColor: theme.palette.primary.contrastText,
        position: 'absolute',
        bottom: '10%',
        right: '5%',
    },
    linksList: {
        gap: '3rem',
        display: 'flex',
        alignItems: 'center',

        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        '@media (max-width: 1024px)': {
            fontSize: '14px',
        },
    },

    flexHidden: {
        display: 'none',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    alertMessage: {
        display: 'none',
        color: theme.palette.error.main,
        alignItems: 'center',
        gap: '8px',
        marginRight: '32px',
        [theme.breakpoints.up(1024)]: {
            display: 'flex',
        },
    },
    badgeContent: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.primary.contrastText,
        fontSize: '10px',
        borderRadius: '50%',
        width: '12px',
        height: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '1px',
        borderColor: theme.palette.primary.contrastText,
    },
    menuMobile: {
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        [theme.breakpoints.up(768)]: {
            display: 'none',
        },
    },
}));

const localized = defineMessages({
    headerSettings: {
        id: 'Header_headerSettings',
        defaultMessage: 'Settings',
    },
    headerHowItWorks: {
        id: 'Header_headerHowItWorks',
        defaultMessage: 'How it works',
    },
    dealHasBeenUpdated: {
        id: 'Header_dealHasBeenUpdated',
        defaultMessage: 'Your deal status has been updated',
    },
});

const Header: React.FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.leftSide}>
                    <div onClick={() => navigate('/chat-view')} className={classes.logoWrapper}>
                        <img className={classes.logo} src={logo} alt="Eelow" />
                    </div>

                    <ul className={classes.linksList}>
                        <li className={classes.listItem} onClick={() => navigate('/settings/password')}>
                            <Typography variant="body2">
                                <LocalizedText label={localized.headerSettings} />
                            </Typography>
                        </li>
                        <li className={classes.listItem} onClick={() => navigate('/about')}>
                            <Typography variant="body2">
                                <LocalizedText label={localized.headerHowItWorks} />
                            </Typography>
                        </li>
                    </ul>
                </div>

                <div className={classes.flexHidden}>
                    <div className={classes.alertMessage}>
                        <IoIosInformationCircleOutline size={22} />
                        <Typography variant="h5" color="#E2542C">
                            <LocalizedText label={localized.dealHasBeenUpdated} />
                        </Typography>
                    </div>
                    <div className={classes.iconWrapper}>
                        <IoMoon size={24} />
                    </div>

                    <Badge
                        overlap="circular"
                        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                        badgeContent={<div className={classes.badgeContent}>1</div>}
                    >
                        <Avatar sx={{width: 44, height: 44}} alt="Travis Howard" src={profileImage} />
                    </Badge>
                </div>

                <div className={classes.menuMobile}>
                    <MdOutlineMenu size={28} />
                    <div className={classes.alertBadge}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
