import {FC} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Outlet, useLocation} from 'react-router-dom';
import ChatListSidebar from '@app/components/ChatListSidebar';
import Header from '@app/components/Header';

const ChatView: FC = () => {
    const isMobile = useMediaQuery({query: '(max-width: 850px)'});

    const location = useLocation();

    return (
        <div className="flex flex-col max-h-[100vh] overflow-hidden">
            <Header />
            <div className="flex flex-1">
                <ChatListSidebar isAdmin={location.pathname.includes('/admin')} />
                <div className={!isMobile ? 'block w-[65%]' : 'hidden'}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ChatView;
