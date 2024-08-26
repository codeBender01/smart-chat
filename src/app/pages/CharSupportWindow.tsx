import {FC, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {createTheme, ThemeProvider, TextField, InputAdornment} from '@mui/material';
import ChatInfoText from '@app/components/ChatInfoText';

import {IoMdSend} from 'react-icons/io';
import {BsPaperclip} from 'react-icons/bs';
import {MdOutlineNewLabel} from 'react-icons/md';
import {CgArrowLongLeft} from 'react-icons/cg';

import logo from '../../common/assets/chatLogo.png';
import profile2 from '../../common/assets/profile2.jpeg';

const suggestions = [
    {
        label: 'Ask for help',
        value: 'help',
        colorCode: '#A0D6FF',
    },
    {
        label: 'Leave review',
        value: 'review',
        colorCode: '#B3E5B4',
    },
    {
        label: 'Report a service problem',
        value: 'service',
        colorCode: '#FF9A9A',
    },
    {
        label: 'Suggest improvements',
        value: 'suggest',
        colorCode: '#FFFFB3',
    },
    {
        label: 'Others',
        value: 'others',
        colorCode: '#D3D3D3',
    },
];

const serviceProblems = [
    {
        label: 'Problem on my side',
        value: 'myside',
        colorCode: '#D3B6F3',
    },
    {
        label: 'Problem with another party',
        value: 'party',
        colorCode: '#FFD5B8',
    },
    {
        label: 'Problem with agreement',
        value: 'agreement',
        colorCode: '#B3E4E6',
    },
    {
        label: 'Problem with payment',
        value: 'payment',
        colorCode: '#B0C4DE',
    },
    {
        label: 'Problem with parcel',
        value: 'parcel',
        colorCode: '#F8B3A1',
    },
];

const ChatSupportWindow: FC = () => {
    const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [option, setOption] = useState('');
    const [dealOption, setDealOption] = useState('');
    const [textMessage, setTextMessage] = useState('');
    const [messagesList, setMessagesList] = useState<string[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setIsSuggestionsOpen(false);
        });
    }, []);

    const theme = createTheme({
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        borderRadius: '12px',
                        backgroundColor: '#eee',
                        border: 'none',
                        width: '100%',
                        color: '#282D41',
                        fontFamily: 'OpenReg',

                        '& fieldset': {
                            border: 'none',
                        },
                        '& .MuiInputBase-input': {
                            padding: '12px 18px',
                            fontFamily: 'OpenReg, sans-serif',
                        },
                        '& .MuiInputBase-input:focus': {
                            boxShadow: 'none',
                        },
                        input: {
                            '::placeholder': {
                                color: '#282D41',
                                opacity: 1,
                            },
                        },
                    },
                },
            },
        },
    });

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            setTextMessage('');
            setIsMessageSent(true);
            setMessagesList([...messagesList, textMessage]);
            event.preventDefault();
        }
    };

    return (
        <div className="w-[100%] breakpoint:w-[100%] flex flex-col max-h-[90vh] h-[90vh] justify-between pb-4 bg-paleGray breakpoint:bg-white">
            <div className="flex breakpoint:hidden p-4 justify-between items-center">
                <div
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-logoGreen text-default hover:opacity-85 w-fit cursor-pointer duration-200 font-boldSans"
                >
                    <CgArrowLongLeft />
                    Back
                </div>
            </div>
            <div className="p-4 border-b-[1px] border-[#C6D7DA] flex gap-3">
                <div
                    className="w-[50px] h-[50px] rounded-round"
                    style={{
                        backgroundImage: `url(${logo})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div className="text-textColor font-boldQuick text-md2">Eelow</div>
            </div>

            <div
                className={`flex-1 overflow-y-auto  flex flex-col py-3 px-4 gap-6 z-10 ${
                    !isMessageSent ? 'justify-center items-center' : ''
                }`}
            >
                {isMessageSent || option === 'help' || option === 'service' ? (
                    <div className=" flex flex-col gap-6 z-10">
                        <div className="flex gap-2 items-center">
                            <div
                                className="w-[36px] h-[36px] rounded-round"
                                style={{
                                    backgroundImage: `url(${logo})`,
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <div className="bg-activeChatGray rounded-t-[10px] rounded-br-[10px] px-3 py-2 font-mainSans text-textColor">
                                Hello! How can we help you?
                            </div>
                        </div>
                        <div className="flex gap-2 w-[80%] items-center">
                            <div
                                className="w-[36px] h-[36px] min-w-[36px] min-h-[36px] rounded-round"
                                style={{
                                    backgroundImage: `url(${logo})`,
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <div className="bg-activeChatGray rounded-t-[10px] rounded-br-[10px] px-3 py-2 font-mainSans text-textColor">
                                <p>Select one of the tags that matches your request to make the process easier</p>
                                <div className="flex gap-4 items-center flex-wrap mt-4">
                                    {suggestions.map(sug => {
                                        return (
                                            <div
                                                key={sug.label}
                                                onClick={() => setOption(sug.value)}
                                                style={{
                                                    backgroundColor: sug.colorCode,
                                                }}
                                                className={`text-textColor flex-wrap text-default font-mainSans rounded-medium w-fit py-1 px-2 hover:opacity-85 duration-200 cursor-pointer`}
                                            >
                                                {sug.label}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center self-end">
                            <div className="bg-activeChatGray rounded-t-[10px] rounded-bl-[10px] px-3 py-2 font-mainSans text-textColor">
                                messagemessagemessage
                            </div>
                            <div
                                className="w-[36px] h-[36px] rounded-round"
                                style={{
                                    backgroundImage: `url(${profile2})`,
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                        </div>

                        {option === 'help' ? <ChatInfoText text="Ask for help conversation started" bgColor="#EFFFF8" /> : null}

                        {option === 'help' ? (
                            <>
                                <div className="flex gap-2 items-center self-end">
                                    <div className="bg-activeChatGray rounded-t-[10px] rounded-bl-[10px] px-3 py-2 font-mainSans text-textColor">
                                        I can’t get verified on the eelow.com
                                    </div>
                                    <div
                                        className="w-[36px] h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${profile2})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div
                                        className="w-[36px] h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className="bg-activeChatGray rounded-t-[10px] rounded-br-[10px] px-3 py-2 font-mainSans text-textColor">
                                        Got it! Give me a second please
                                    </div>
                                </div>
                            </>
                        ) : null}

                        {option === 'service' ? (
                            <>
                                <div className="flex gap-2 items-center">
                                    <div
                                        className="w-[36px] h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className="bg-activeChatGray rounded-t-[10px] rounded-br-[10px] px-3 py-2 font-mainSans text-textColor">
                                        Hello! How can we help you?
                                    </div>
                                </div>
                                <div className="flex gap-2 w-[80%] items-center">
                                    <div
                                        className="w-[36px] h-[36px] min-w-[36px] min-h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className="bg-activeChatGray rounded-t-[10px] rounded-br-[10px] px-3 py-2 font-mainSans text-textColor">
                                        <p>Select one of the tags that matches your request to make the process easier</p>
                                        <div className="flex gap-3 items-center flex-wrap mt-4">
                                            {serviceProblems.map(sug => {
                                                return (
                                                    <div
                                                        onClick={() => setDealOption(sug.value)}
                                                        key={sug.label}
                                                        style={{
                                                            backgroundColor: sug.colorCode,
                                                        }}
                                                        className={`text-textColor text-default font-mainSans rounded-medium w-fit py-1 px-4 hover:opacity-85 duration-200 cursor-pointer`}
                                                    >
                                                        {sug.label}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                        {dealOption.length > 0 ? (
                            <>
                                <ChatInfoText text="Problem with payment conversation started" bgColor="#EFFFF8" />

                                <div className="flex gap-2 items-center self-end">
                                    <div className="bg-activeChatGray rounded-t-[10px] rounded-bl-[10px] px-3 py-2 font-mainSans text-textColor">
                                        I can’t pay for the deal
                                    </div>
                                    <div
                                        className="w-[36px] h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${profile2})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div
                                        className="w-[36px] h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className="bg-activeChatGray rounded-t-[10px] rounded-br-[10px] px-3 py-2 font-mainSans text-textColor">
                                        Got it! Give me a second please
                                    </div>
                                </div>
                            </>
                        ) : null}
                        {messagesList.map(val => {
                            return (
                                <div className="flex gap-2 items-center self-end">
                                    <div className="bg-activeChatGray rounded-t-[10px] rounded-bl-[10px] px-3 py-2 font-mainSans text-textColor">
                                        {val}
                                    </div>
                                    <div
                                        className="w-[36px] h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${profile2})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="breakpoint:w-[60%] w-[80%]">
                        <ChatInfoText
                            text=" Select one of the tags that matches your request before starting a
              conversation"
                            bgColor="#EEEEEE"
                        />
                    </div>
                )}
            </div>

            <div className="px-4 mb-2">
                <ThemeProvider theme={theme}>
                    <TextField
                        placeholder="Write a message..."
                        onKeyDown={handleKeyDown}
                        value={textMessage}
                        onChange={e => {
                            setTextMessage(e.target.value);
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IoMdSend
                                        onClick={() => setIsMessageSent(true)}
                                        size={20}
                                        color="#34434E"
                                        className="cursor-pointer hover:opacity-80"
                                    />
                                </InputAdornment>
                            ),
                            startAdornment: (
                                <InputAdornment position="start">
                                    <div className="flex items-center gap-2">
                                        <BsPaperclip size={22} color="#34434E" className="cursor-pointer hover:opacity-80" />
                                        <div
                                            className="relative"
                                            onClick={e => {
                                                e.stopPropagation();
                                                setIsSuggestionsOpen(!isSuggestionsOpen);
                                            }}
                                        >
                                            <MdOutlineNewLabel size={24} color="#34434E" className="cursor-pointer hover:opacity-80" />
                                            <div
                                                className="absolute bg-white left-[0%] bottom-[110%] py-2 rounded-[8px] text-md font-mainQuick font-semibold text-nowrap flex flex-col gap-4"
                                                style={{
                                                    boxShadow:
                                                        '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                                                    transition:
                                                        'opacity 312ms cubic-bezier(0.4, 0, 0.2, 1), transform 208ms cubic-bezier(0.4, 0, 0.2, 1)',
                                                    opacity: isSuggestionsOpen ? '1' : '0',
                                                    zIndex: isSuggestionsOpen ? 10 : 0,
                                                }}
                                            >
                                                {suggestions.map(sug => {
                                                    return (
                                                        <div
                                                            key={sug.label}
                                                            onClick={() => {}}
                                                            className="flex items-center px-[24px] py-[12px] text-textColor text-default font-mainSans gap-2 hover:bg-[#eee] duration-200 cursor-pointer"
                                                        >
                                                            {sug.label}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </InputAdornment>
                            ),
                        }}
                    />
                </ThemeProvider>
            </div>
        </div>
    );
};

export default ChatSupportWindow;
