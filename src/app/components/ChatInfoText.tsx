import {FC} from 'react';

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
            {text}
        </div>
    );
};

export default ChatInfoText;
