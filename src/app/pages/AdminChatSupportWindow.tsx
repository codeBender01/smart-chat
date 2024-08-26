import {FC, useState} from 'react';
import {BsPaperclip} from 'react-icons/bs';
import {CgArrowLongLeft} from 'react-icons/cg';
import {FaHand} from 'react-icons/fa6';
import {IoMdSend} from 'react-icons/io';
import {useNavigate} from 'react-router-dom';
import ChatInfoText from '@app/components/ChatInfoText';
import {Button, createTheme, InputAdornment, TextField, ThemeProvider} from '@mui/material';

import logo from '../../common/assets/chatLogo.png';
import profile2 from '../../common/assets/profile2.jpeg';

const AdminChatSupportWindow: FC = () => {
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [isConversationFinished, setIsConversationFinished] = useState(false);
    const [textMessage, setTextMessage] = useState('');
    const [messagesList, setMessagesList] = useState<string[]>([]);

    const navigate = useNavigate();

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
                        '& .MuiInputBase-input:focus': {
                            boxShadow: 'none',
                        },
                        '& fieldset': {
                            border: 'none',
                        },
                        '& .MuiInputBase-input': {
                            padding: '12px 18px',
                            fontFamily: 'OpenReg, sans-serif',
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

            MuiButton: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#E0E0E0',
                        color: '#000000DE',
                        fontWeight: '500',
                        fontSize: 14,
                        padding: '6px 12px',
                        minWidth: '48px',
                        '&:hover': {
                            opacity: 0.85,
                            backgroundColor: '#E0E0E0',
                        },
                    },
                },
                defaultProps: {},
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
                        backgroundImage: `url(${profile2})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div className="text-textColor font-boldQuick text-md2">Alisa</div>
            </div>

            <div
                className={`flex-1 overflow-y-auto  flex flex-col py-6 px-4 gap-6 z-10 ${
                    !isMessageSent ? 'justify-center items-center' : ''
                }`}
            >
                {isMessageSent ? (
                    <div className=" flex flex-col p-8 gap-6 z-10">
                        <div className="w-fit self-center px-4 py-1">
                            {isMessageSent ? <ChatInfoText text="Ask for help conversation started" bgColor="#EFFFF8" /> : null}
                        </div>
                        {isMessageSent ? (
                            <>
                                <div className="flex gap-2 items-center">
                                    <div
                                        className="w-[36px] h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${profile2})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className="bg-activeChatGray rounded-t-[10px] rounded-br-[10px] px-3 py-2 font-mainSans text-textColor">
                                        I can’t get verified on the eelow.com
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center self-end">
                                    <div className="bg-activeChatGray rounded-t-[10px] rounded-bl-[10px] px-3 py-2 font-mainSans text-textColor">
                                        Got it! Give me a second please
                                    </div>
                                    <div
                                        className="w-[36px] h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                                <div className="flex gap-2 items-center self-end">
                                    <div className="bg-activeChatGray rounded-t-[10px] rounded-bl-[10px] px-3 py-2 font-mainSans text-textColor">
                                        Done!
                                    </div>
                                    <div
                                        className="w-[36px] h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                                <div className="flex gap-2 items-center self-end">
                                    <div className="bg-activeChatGray rounded-t-[10px] flex flex-col items-center gap-4 rounded-bl-[10px] px-3 py-2 font-mainSans text-textColor">
                                        <div>We helped you with your question?</div>
                                        <div className="flex items-center">
                                            <ThemeProvider theme={theme}>
                                                <Button
                                                    sx={{
                                                        borderTopRightRadius: 0,
                                                        borderBottomRightRadius: 0,
                                                    }}
                                                    variant="contained"
                                                    onClick={() => setIsConversationFinished(true)}
                                                >
                                                    yes
                                                </Button>
                                                <div className="w-[1px] h-[36.5px] bg-lineGray"></div>
                                                <Button
                                                    sx={{
                                                        borderTopLeftRadius: 0,
                                                        borderBottomLeftRadius: 0,
                                                    }}
                                                    variant="contained"
                                                >
                                                    no
                                                </Button>
                                            </ThemeProvider>
                                        </div>
                                    </div>
                                    <div
                                        className="w-[36px] h-[36px] rounded-round"
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
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
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                            );
                        })}

                        <div className="w-fit self-center px-4 py-1">
                            {isConversationFinished ? <ChatInfoText text="Ask for help conversation finished" bgColor="#EFFFF8" /> : null}
                        </div>
                    </div>
                ) : (
                    <div className="w-[65%] breakpoint:w-fit self-centert px-4 py-1 ">
                        <ChatInfoText text="Start your dialog. Write something" bgColor="#EEEEEE" />
                    </div>
                )}
            </div>

            <div className="px-4">
                <ThemeProvider theme={theme}>
                    <TextField
                        value={textMessage}
                        onKeyDown={handleKeyDown}
                        onChange={e => {
                            setTextMessage(e.target.value);
                        }}
                        placeholder="Write a message..."
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
                                        <FaHand size={22} color="#34434E" className="cursor-pointer hover:opacity-80" />
                                        <BsPaperclip size={22} color="#34434E" className="cursor-pointer hover:opacity-80" />
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

export default AdminChatSupportWindow;
