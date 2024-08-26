import {FC, RefObject, useEffect, useRef} from 'react';
import {FaStar} from 'react-icons/fa';
import {FaPenAlt} from 'react-icons/fa';
import {IoCarSharp} from 'react-icons/io5';
import {MdOutlineLocationOn} from 'react-icons/md';
import {RiArchiveLine} from 'react-icons/ri';
import {useMediaQuery} from 'react-responsive';
import {useLocation, useNavigate} from 'react-router-dom';
import '../../cursor.css';

import profile1 from '../../common/assets/profile1.jpeg';
import profile2 from '../../common/assets/profile2.jpeg';

interface ChatTabProps {
    name: string;
    isPackage: boolean;
    rating: string;
    packageName: string;
    bgColor: string;
    chatId: number;
}

interface CursorProps {
    cursor: RefObject<HTMLDivElement>;
}

function moveCursor(e: MouseEvent, cursor: CursorProps['cursor']) {
    const x = e.clientX;
    const y = e.clientY;

    if (cursor.current) {
        cursor.current.style.left = `${x}px`;
        cursor.current.style.top = `${y}px`;
    }
}

const ChatTab: FC<ChatTabProps> = ({isPackage, name, rating, packageName, bgColor, chatId}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isMobile = useMediaQuery({query: '(max-width: 850px)'});
    const cursor = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => moveCursor(e, cursor);

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div ref={cursor} id="cursor" className="cursor-invisible">
                <FaPenAlt />
            </div>
            <div
                onClick={() => {
                    if (isMobile) {
                        navigate(`/chat-view-mobile/${chatId}`, {state: isPackage});
                        return;
                    }
                    navigate(`/chat-view/${chatId}`, {state: isPackage});
                }}
                onMouseEnter={() => {
                    cursor.current?.classList.remove('cursor-invisible');
                    cursor.current?.classList.add('cursor');
                }}
                onMouseLeave={() => {
                    cursor.current?.classList.add('cursor-invisible');
                    cursor.current?.classList.remove('cursor');
                }}
                className={`${
                    location.pathname.includes(`/chat-view/${chatId}`) ? 'bg-activeChatGray' : 'bg-paleGray'
                } w-[100%] border-b-[1px] border-borderGray py-4 px-2 flex gap-2 hover:bg-activeChatGray duration-200 cursor-none`}
                style={{}}
            >
                <div
                    className="w-[70px] h-[70px] rounded-round flex items-end"
                    style={{
                        backgroundImage: `url(${isPackage ? profile2 : profile1})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                    }}
                >
                    {isPackage ? (
                        <div className="text-white bg-badgeBlack w-[24px] h-[24px] rounded-round flex items-center justify-center text-md">
                            <RiArchiveLine />
                        </div>
                    ) : (
                        <div className="text-white bg-logoGreen w-[24px] h-[24px] rounded-round flex items-center justify-center text-md">
                            <IoCarSharp />
                        </div>
                    )}
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-textColor font-boldQuick text-md2 mr-[5px]">{name}</div>
                            <div className="text-sm2 text-logoGreen">
                                <FaStar />
                            </div>
                            <div className="text-xs text-textColor font-boldSans ml-[2px]">{rating}</div>
                        </div>
                        <div className="text-lineGray text-sm font-mainSans uppercase">31 sep</div>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                        {isPackage ? (
                            <div id="package" className="flex flex-col gap-2 mt-[8px]">
                                <div className="flex items-center gap-2 font-mainSans">
                                    <div>
                                        <MdOutlineLocationOn size={18} />
                                    </div>
                                    <div className="text-textColor text-sm mb-[2px]">
                                        Krakov <span>-</span> Kiev
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div
                                        className={'text-sm2 font-boldSans text-blackSecondary px-2 py-1 rounded-[6px]'}
                                        style={{
                                            backgroundColor: bgColor,
                                        }}
                                    >
                                        {packageName}
                                    </div>
                                    <div className="self-end text-sm2 text-textColor font-boldSans border-[1px] border-textColor px-2 py-1 rounded-medium">
                                        124$
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex">
                                <div id="line" className="flex flex-col items-center mt-2 mr-2">
                                    <div className="border-blackMain border-[1px] rounded-round w-[6px] h-[6px]"></div>
                                    <div className="h-[28px] bg-textColor w-[1px]"></div>
                                    <div className="bg-textColor rounded-round w-[6px] h-[6px]"></div>
                                </div>
                                <div id="destinations" className="flex flex-col">
                                    <div>
                                        <div className="text-sm text-textColor font-mainSans">Krakov</div>
                                        <div className="text-xs2 text-lineGray font-mainSans">Jul 18, 12:00</div>
                                    </div>
                                    <div className="">
                                        <div className="text-sm text-textColor font-mainSans">Kiev</div>
                                        <div className="text-xs2 text-lineGray font-mainSans">Jul 18, 12:00</div>
                                    </div>
                                </div>
                                <div className="self-end text-sm2 ml-4 text-textColor font-boldSans border-[1px] border-textColor px-2 py-1 rounded-medium">
                                    124$
                                </div>
                            </div>
                        )}

                        <div className="w-[20px] h-[20px] text-white bg-textColor flex items-center justify-center rounded-round">1</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatTab;
