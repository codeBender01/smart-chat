import {FC} from 'react';

import Header from '../components/Header';
import {Outlet} from 'react-router-dom';

const ChatViewMobile: FC = () => {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <Header />
            <div className="w-[100%]">
                <Outlet />
            </div>
        </div>
    );
};

export default ChatViewMobile;
