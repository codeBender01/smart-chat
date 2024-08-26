import {FC} from 'react';
import {FaStar} from 'react-icons/fa';
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';

import profile1 from '../../common/assets/profile1.jpeg';
import profile2 from '../../common/assets/profile2.jpeg';

interface ChatTabProps {
    name: string;
    isPackage: boolean;
    rating: string;
    chatId: number;
    requestType: string;
    requestText: string;
}

const AdminChatTab: FC<ChatTabProps> = ({isPackage, name, rating, chatId, requestType, requestText}) => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({query: '(max-width: 850px)'});

    return (
        <div
            onClick={() => {
                if (isMobile) {
                    navigate(`/admin-mobile/${chatId}`, {state: isPackage});
                    return;
                }
                navigate(`/admin/${chatId}`, {state: isPackage});
            }}
            className="w-[100%] border-b-[1px] border-borderGray py-4 px-2 flex gap-2 hover:bg-activeChatGray duration-200"
        >
            <div
                className="w-[70px] h-[70px] rounded-round flex items-end"
                style={{
                    backgroundImage: `url(${isPackage ? profile2 : profile1})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                }}
            ></div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="text-textColor font-mainQuick text-md2 ">{name}</div>
                        <div className="text-sm2 text-logoGreen">
                            <FaStar />
                        </div>
                        <div className="text-xs text-textColor font-mainSans">{rating}</div>
                    </div>
                    <div className="text-lineGray text-sm font-mainSans uppercase">31 sep</div>
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <div
                        style={{
                            backgroundColor: requestType,
                        }}
                        className={
                            'text-textColor mt-2 text-default font-mainSans rounded-medium w-fit py-1 px-4 hover:opacity-85 duration-200 cursor-pointer'
                        }
                    >
                        {requestText}
                    </div>
                    <div className="w-[20px] h-[20px] text-white bg-textColor flex items-center justify-center rounded-round">1</div>
                </div>
            </div>
        </div>
    );
};

export default AdminChatTab;
