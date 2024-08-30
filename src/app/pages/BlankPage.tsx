import {FC} from 'react';
import ChatInfoText from '@app/components/ChatInfoText';

const BlankPage: FC = () => {
    return (
        <div className="flex items-center justify-center bg-white h-[90vh] w-[100%%]">
            <ChatInfoText text="blankPageMessage" bgColor="#EEEEEE" />
        </div>
    );
};

export default BlankPage;
