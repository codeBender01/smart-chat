import {FC} from 'react';

import LocalizedText from '@components/localize/LocalizedText';

interface ChatInfoTextProps {
    text: string;
    bgColor: string;
}

const ChatInfoText: FC<ChatInfoTextProps> = ({text, bgColor}) => {
    return (
        <div
            className="text-textColor font-boldQuick text-md self-center rounded-[16px] px-4 py-1"
            style={{
                backgroundColor: bgColor,
            }}
        >
            <LocalizedText label={{id: text}} />
        </div>
    );
};

export default ChatInfoText;
