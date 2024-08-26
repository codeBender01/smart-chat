import React, {FC, useState} from 'react';
import {BsPaperclip} from 'react-icons/bs';
import {CgArrowLongLeft} from 'react-icons/cg';
import {IoIosInformationCircleOutline, IoMdCloseCircleOutline, IoMdMore, IoMdSend} from 'react-icons/io';
import {MdEdit} from 'react-icons/md';
import {TbRefresh} from 'react-icons/tb';
import {useNavigate} from 'react-router-dom';
import '../../scrollbar.css';
import AddUserModal from '@app/components/AddUserModal';
import ApproveModal from '@app/components/ApproveModal';
import ChatInfoText from '@app/components/ChatInfoText';
import DealCompletedModal from '@app/components/DealCompleteModal';
import TerminationModal from '@app/components/TerminationModal';
import TravelerModal from '@app/components/TravelerModal';
import {Button, createTheme, InputAdornment, TextField, ThemeProvider} from '@mui/material';

import AddUser from 'src/common/svgs/AddUser';
import profile1 from '../../common/assets/profile1.jpeg';
import profile2 from '../../common/assets/profile2.jpeg';

const ChatWindow: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApproveModal, setIsApproveModal] = useState(false);
    const [isTerminateModal, setIsTerminateModal] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isTerminated, setIsTerminated] = useState(false);
    const [isDealApproved, setIsDealApproved] = useState(false);
    const [isTravelerModalOpen, setIsTravelerModalOpen] = useState(false);
    const [isDealCompletedModalOpen, setIsDealCompletedModalOpen] = useState(false);
    const [textMessage, setTextMessage] = useState('');
    const [messagesList, setMessagesList] = useState<string[]>([]);
    const navigate = useNavigate();

    const theme = createTheme({
        components: {
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                },
                styleOverrides: {
                    root: {
                        backgroundColor: '#15C370',
                        fontFamily: 'OpenReg',
                        fontSize: 16,
                        transitionDuration: '500ms',
                        borderRadius: '20px',
                        height: '40px',
                        padding: '0 26px',
                        textTransform: 'capitalize',
                        '&:hover': {
                            backgroundColor: '#15C370',
                            opacity: 0.8,
                        },
                    },
                },
            },

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

    document.body.addEventListener('click', () => {
        setIsMoreOpen(false);
    });

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            setTextMessage('');
            setMessagesList([...messagesList, textMessage]);
            event.preventDefault();
        }
    };

    return (
        <div className="w-[100%] flex flex-col max-h-[90vh] h-[90vh] justify-between pb-4 bg-paleGray breakpoint:bg-white">
            <div>
                <div className="flex breakpoint:hidden p-4 justify-between items-center">
                    <div
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-logoGreen text-default hover:opacity-85 w-fit cursor-pointer duration-200 font-boldSans"
                    >
                        <CgArrowLongLeft />
                        Back
                    </div>
                    <div className="text-md text-textColor font-boldQuick">
                        {isEmailSent ? 'awaiting handover' : 'pending confirmation'}
                    </div>
                </div>
                <div className="p-4 flex justify-between">
                    <div className="flex gap-3">
                        <div
                            className="w-[50px] h-[50px] rounded-round relative"
                            style={{
                                backgroundImage: `url(${profile1})`,
                                backgroundPosition: 'top',
                                backgroundSize: 'cover',
                            }}
                        >
                            {isDealApproved ? (
                                <div
                                    className="w-[32px] h-[32px] rounded-round absolute bottom-[-15%] right-[-10%]"
                                    style={{
                                        backgroundImage: `url(${profile2})`,
                                        backgroundPosition: 'top',
                                        backgroundSize: 'cover',
                                    }}
                                ></div>
                            ) : null}
                        </div>
                        <div>
                            <div className="text-textColor font-boldQuick text-md2">Andrew</div>
                            {isDealApproved ? <div className="font-boldQuick text-sm text-textColor">& Alisa</div> : null}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-md text-textColor font-boldQuick mr-8 hidden min-[850px]:block">
                            {isEmailSent ? 'awaiting handover' : 'pending confirmation'}
                        </div>
                        <div
                            onClick={() => setIsTravelerModalOpen(true)}
                            className="text-md2 text-textColor hover:text-lineGray duration-200 cursor-pointer"
                        >
                            <IoIosInformationCircleOutline />
                        </div>
                        <div
                            className="text-md2 text-textColor hover:text-lineGray duration-200 cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            {isEmailSent ? <TbRefresh /> : <AddUser />}
                        </div>
                        <div className="relative">
                            <div
                                className="text-md2 text-textColor hover:text-lineGray duration-200 cursor-pointer"
                                onClick={e => {
                                    e.stopPropagation();
                                    setIsMoreOpen(!isMoreOpen);
                                }}
                            >
                                <IoMdMore />
                            </div>
                            <div
                                className="absolute bg-white right-[20%] top-[110%] rounded-[8px] text-md font-mainQuick font-semibold text-nowrap flex flex-col"
                                style={{
                                    boxShadow: 'box-shadow: 0px 2px 6px 2px #00000026 0px 1px 2px 0px #0000004D',
                                    transition: 'opacity 312ms cubic-bezier(0.4, 0, 0.2, 1), transform 208ms cubic-bezier(0.4, 0, 0.2, 1)',
                                    opacity: isMoreOpen ? '1' : '0',
                                    zIndex: isMoreOpen ? 10 : 0,
                                }}
                            >
                                <div className="flex items-center py-[16px] px-[24px] text-textColor text-default font-mainSans gap-2 hover:opacity-80 duration-200 cursor-pointer">
                                    <MdEdit />
                                    Edit the offer
                                </div>
                                <div className="flex items-center text-alertRed py-[16px] px-[24px] text-default font-mainSans gap-2 hover:opacity-80 duration-200 cursor-pointer">
                                    <IoIosInformationCircleOutline />
                                    Report a problem
                                </div>
                                <div
                                    onClick={() => setIsTerminateModal(true)}
                                    className="flex items-center text-alertRed text-default py-[16px] px-[24px] font-mainSans gap-2 hover:opacity-80 duration-200 cursor-pointer"
                                >
                                    <IoMdCloseCircleOutline />
                                    Terminate the deal
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 flex justify-between items-center bg-lightGreen">
                    <div className="flex flex-col gap-2">
                        <div className="text-textColor text-md font-boldQuick">Is this traveler right for you?</div>
                        <p className="text-sm2 text-lineGray font-mainSans">
                            If you click on the "yes" button, the deal status will change and you will not be able to select another
                            traveler
                        </p>
                    </div>
                    <ThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            sx={{
                                zIndex: 1,
                            }}
                            onClick={() => {
                                setIsDealApproved(true);
                                setIsDealCompletedModalOpen(true);
                            }}
                        >
                            Yes
                        </Button>
                    </ThemeProvider>
                </div>
            </div>

            <div
                className={` flex-1 overflow-y-auto  flex flex-col pt-8 px-8 pb-8 gap-6  ${isTerminated ? 'justify-center' : ''}`}
                id="chatbody"
            >
                {/* <div className="text-textColor font-mainQuick text-md bg-activeChatGray rounded-pill px-4 py-1">
          Start your dialog. Write something
        </div> */}

                {isTerminated ? (
                    <ChatInfoText text="The deal was terminated due to the death of the other party" bgColor="#E2542C40" />
                ) : (
                    <div className="flex flex-col p-0 lg:p-8 gap-6">
                        <div className="flex gap-2 items-center self-end">
                            <div className="bg-activeChatGray rounded-t-[10px] rounded-bl-[10px] px-3 py-2 font-mainSans text-textColor">
                                Hello, can you bring my box with you?
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
                        <div className="self-center breakpoint:w-[50%] bg-lightGreen py-2 px-4 rounded-[10px] ">
                            <ChatInfoText
                                text="The deal has been paid successfully, agree on the other side to
              hand over the parcel"
                                bgColor="#EFFFF8"
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <div
                                className="w-[36px] h-[36px] rounded-round"
                                style={{
                                    backgroundImage: `url(${profile1})`,
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <div className="bg-activeChatGray rounded-t-[10px] rounded-br-[10px] px-3 py-2 font-mainSans text-textColor">
                                Hello, Yes I can
                            </div>
                        </div>
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
                )}
            </div>

            <div className="px-4 mb-6">
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
                                    <IoMdSend size={20} color="#34434E" />
                                </InputAdornment>
                            ),
                            startAdornment: (
                                <InputAdornment position="end">
                                    <BsPaperclip size={20} color="#34434E" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </ThemeProvider>
            </div>

            <TravelerModal open={isTravelerModalOpen} setOpen={setIsTravelerModalOpen} />
            <AddUserModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                isEmailSent={isEmailSent}
                setIsEmailSent={setIsEmailSent}
                setInviteModal={setIsApproveModal}
            />

            <ApproveModal open={isApproveModal} setOpen={setIsApproveModal} />
            <TerminationModal
                open={isTerminateModal}
                setOpen={setIsTerminateModal}
                isTerminated={isTerminated}
                setIsTerminated={setIsTerminated}
            />
            <DealCompletedModal open={isDealCompletedModalOpen} setOpen={setIsDealCompletedModalOpen} />
        </div>
    );
};

export default ChatWindow;
