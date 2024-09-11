import {FC} from 'react';
import {Outlet} from 'react-router-dom';

import {makeStyles} from '@mui/styles';

import Header from '../components/Header';

import {CustomTheme} from '@style';

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    innerContainer: {
        width: '100%',
    },
}));

const ChatViewMobile: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.innerContainer}>
                <Outlet />
            </div>
        </div>
    );
};

export default ChatViewMobile;
