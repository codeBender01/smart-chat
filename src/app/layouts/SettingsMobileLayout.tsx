import {FC} from 'react';
import {CgArrowLongLeft} from 'react-icons/cg';
import {useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Header from '@app/components/Header';
import LocalizedText from '@components/localize/LocalizedText';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        width: '100%',
        height: '100vh',
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
}));

const SettingsMobileLayout: FC = () => {
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
                <Outlet />
            </div>
        </div>
    );
};

export default SettingsMobileLayout;
