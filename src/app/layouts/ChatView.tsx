import {FC} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Outlet, useLocation} from 'react-router-dom';
import ChatListSidebar from '@app/components/ChatListSidebar';
import Header from '@app/components/Header';

import {CustomTheme} from '@style';

import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100vh',
        overflow: 'hidden',
    },
    innerContainer: {
        display: 'flex',
        flex: '1',
    },
}));

const ChatView: FC = () => {
    const isMobile = useMediaQuery({query: '(max-width: 850px)'});

    const location = useLocation();

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.innerContainer}>
                <ChatListSidebar isAdmin={location.pathname.includes('/admin')} />
                <div className={!isMobile ? 'block w-[70%]' : 'hidden'}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ChatView;
