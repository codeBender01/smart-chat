import React, {FC, useState, ChangeEvent} from 'react';
import {BsPaperclip} from 'react-icons/bs';
import {CgArrowLongLeft} from 'react-icons/cg';
import {IoMdMore, IoMdSend, IoIosInformationCircleOutline} from 'react-icons/io';
import {MdEdit} from 'react-icons/md';
import {TbRefresh} from 'react-icons/tb';
import {useNavigate} from 'react-router-dom';
import '../../scrollbar.css';
import AddUserModal from '@app/components/AddUserModal';
import ChatInfoText from '@app/components/ChatInfoText';
import DealCompletedModal from '@app/components/DealCompleteModal';
import TerminationModal from '@app/components/TerminationModal';
import TravelerModal from '@app/components/TravelerModal';
import {InputAdornment, TextField} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';
import {useIntl, defineMessages} from 'react-intl';

import profile1 from '../../common/assets/profile1.jpeg';
import profile2 from '../../common/assets/profile2.jpeg';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

const useStyles = makeStyles((theme: CustomTheme) => ({
    innerContainer: {
        display: 'flex',
        padding: '1rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (min-width: 850px)': {
            display: 'none',
        },
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '90vh',
        height: '90vh',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.up(850)]: {
            backgroundColor: theme.palette.primary.contrastText,
            width: '100%',
        },
    },
    backButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: theme.palette.primary.main, // Replace with the value of logoGreen
        fontSize: '1rem', // Replace with the value of text-default
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: '700',
        '&:hover': {
            opacity: 0.85,
        },
        width: 'fit-content',
    },
    headerContainer: {
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    header: {
        padding: '1rem',
        borderBottom: '1px solid #C6D7DA',
        display: 'flex',
        gap: '0.75rem',
    },
    logo: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        position: 'relative',
    },
    title: {
        color: theme.palette.text.primary,
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
        fontSize: '20px',
    },
    statusText: {
        fontSize: '18px',
        color: theme.palette.text.primary,
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
    },
    chatContainer: {
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        gap: '1.5rem',
        zIndex: 10,
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        gap: theme.spacing(1.5), // This converts 'gap-6'
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(2), // This converts 'lg:p-8'
        },
    },
    chatInfo: {
        alignSelf: 'center',
        backgroundColor: theme.custom.palette.newColors.lightGreen,
        padding: theme.spacing(0.5, 1),
        borderRadius: 10,

        [theme.breakpoints.up(850)]: {
            width: '50%',
        },
    },
    messageWrapper: {
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
    },
    logoIcon: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
    },
    messageBubbleLeft: {
        backgroundColor: theme.palette.secondary.contrastText, // Replace with the value of bg-activeChatGray
        borderRadius: '10px',
        borderBottomRightRadius: 0,
        padding: '0.75rem 1rem',
        fontFamily: 'Open Sans, sans-serif',
        color: theme.palette.text.primary, // Replace with the value of textColor
    },
    messageBubbleRight: {
        backgroundColor: theme.palette.secondary.contrastText, // Replace with the value of bg-activeChatGray
        borderRadius: '10px',
        borderBottomLeftRadius: 0,
        padding: '0.75rem 1rem',
        fontFamily: 'Open Sans, sans-serif',
        color: theme.palette.text.primary, // Replace with the value of textColor
    },
    suggestionContainer: {
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '1rem',
    },
    suggestionButton: {
        color: theme.palette.text.primary,
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '1rem',
        borderRadius: '0.5rem',
        padding: '0.25rem 0.5rem',
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        width: 'fit-content',
        '&:hover': {
            opacity: 0.85,
        },
    },
    chatInfoContainer: {
        width: '80%',
        '@media (min-width: 850px)': {
            width: '60%',
        },
    },
    suggestionsMessage: {
        width: '80%',
    },
    senderMessage: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        alignSelf: 'flex-end',
    },
    inputContainer: {
        padding: '16px 32px',
    },
    inputIcon: {
        cursor: 'pointer',
        transition: 'all 100ms',
        '&:hover': {
            opacity: 0.8,
        },
    },
    suggestionsModal: {
        boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
        transition: 'opacity 312ms cubic-bezier(0.4, 0, 0.2, 1), transform 208ms cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'absolute',
        backgroundColor: 'white',
        left: '0',
        bottom: '110%',
        padding: '8px 0',
        borderRadius: '8px',
        fontSize: '18px',
        fontFamily: 'Quicksand',
        fontWeight: '500',
        textWrap: 'nowrap',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    suggestionsModalText: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 24px',
        color: theme.palette.text.primary,
        fontSize: '1rem',
        fontFamily: 'Open Sans, sans-serif',
        gap: '8px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.secondary.contrastText,
        },
        transition: 'background-color 200ms',
    },
    headerInner: {
        display: 'flex',
        gap: theme.spacing(1.5),
    },
    secondaryLogo: {
        width: '32px',
        height: '32px',
        borderRadius: '50%', // equivalent to rounded-round
        position: 'absolute',
        bottom: '-15%',
        right: '-10%',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
    },
    secondaryName: {
        color: theme.palette.text.primary,
        fontFamily: 'Quicksand, sans-serif',
        fontSize: '0.875rem',
        fontWeight: '700',
    },
    leftHeaderContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        zIndex: 20,
    },
    awaitingText: {
        fontSize: '1rem', // equivalent to text-md
        color: theme.palette.text.primary, // equivalent to text-textColor
        fontFamily: 'Quicksand, sans-serif', // equivalent to font-boldQuick
        fontWeight: '700',
        marginRight: theme.spacing(2), // equivalent to mr-8
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
    },
    refreshIcon: {
        fontSize: '1.125rem',
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.text.secondary,
        },
        transition: 'color 0.2s',
        cursor: 'pointer',
    },
    moreIconContainer: {
        position: 'relative',
    },
    moreIcon: {
        fontSize: '1.25rem',
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.text.secondary,
        },
        transition: 'color 0.2s',
        cursor: 'pointer',
    },
    moreOptions: {
        position: 'absolute',
        backgroundColor: theme.palette.primary.contrastText,
        right: '20%',
        top: '110%',
        borderRadius: '8px',
        fontSize: '1.25rem',
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '500',
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D',
        transition: 'opacity 312ms cubic-bezier(0.4, 0, 0.2, 1), transform 208ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    optionItem: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2, 3),
        color: theme.palette.text.primary,
        fontFamily: 'Open Sans, sans-serif',
        gap: theme.spacing(0.5),
        '&:hover': {
            opacity: 0.8,
        },
        transition: 'opacity 0.2s',
        cursor: 'pointer',
        fontSize: '16px',
    },
    reportItem: {
        color: theme.palette.error.main,
    },
    confirmContainer: {
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.custom.palette.newColors.lightGreen,
        position: 'relative',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(0.5),
    },
    confirmTitle: {
        color: theme.palette.text.primary,
        fontSize: '18px',
        fontweight: '700',
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
    },
    warningText: {
        fontSize: '12px',
        color: theme.palette.text.secondary,
        fontFamily: 'Open Sans, sans-serif',
    },
}));

const localized = defineMessages({
    awaitingHandover: {
        id: 'ChatWindow_awaitingHandover',
        defaultMessage: 'awaiting handover',
    },
    pendingConfirmation: {
        id: 'ChatWindow_pendingConfirmation',
        defaultMessage: 'pending confirmation',
    },
    isTravelerRight: {
        id: 'ChatWindow_isTravelerRight',
        defaultMessage: 'Is this traveler right for you?',
    },
    warningText: {
        id: 'ChatWindow_warningText',
        defaultMessage: 'If you click on the "yes" button, the deal status will change and you will not be able to select another traveler',
    },
    goBack: {
        id: 'ChatWindow_goBack',
        defaultMessage: 'Back',
    },
    editTheOffer: {
        id: 'ChatWindow_editTheOffer',
        defaultMessage: 'Edit the offer',
    },
    reportProblem: {
        id: 'ChatWindow_reportProblem',
        defaultMessage: 'Report a problem',
    },
    dealTerminated: {
        id: 'ChatWindow_dealTerminated',
        defaultMessage: 'The deal was terminated due to the death of the other party',
    },
    paidSuccessfully: {
        id: 'ChatWindow_paidSuccessfully',
        defaultMessage: 'The deal has been paid successfully, agree on the other side to hand over the parcel',
    },
    writeMessage: {
        id: 'ChatWindow_writeMessage',
        defaultMessage: 'Write a message...',
    },
});

const ChatWindow: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isTerminated, setIsTerminated] = useState(false);
    const [isDealApproved, setIsDealApproved] = useState(false);
    const [selectedRole, setSelectedRole] = useState<string>('');
    const [textMessage, setTextMessage] = useState('');
    const [messagesList, setMessagesList] = useState<string[]>([]);
    const navigate = useNavigate();
    const intl = useIntl();

    const handleRoleSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedRole(value);
    };

    const classes = useStyles();

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
        <div className={classes.container}>
            <div>
                <div className={classes.innerContainer}>
                    <div onClick={() => navigate(-1)} className={classes.backButton}>
                        <CgArrowLongLeft />
                        <LocalizedText label={localized.goBack} />
                    </div>
                    <div className={classes.statusText}>
                        {' '}
                        {isEmailSent ? (
                            <LocalizedText label={localized.awaitingHandover} />
                        ) : (
                            <LocalizedText label={localized.pendingConfirmation} />
                        )}
                    </div>
                </div>
                <div className={classes.headerContainer}>
                    <div className={classes.headerInner}>
                        <div
                            className={classes.logo}
                            style={{
                                backgroundImage: `url(${profile1})`,
                            }}
                        >
                            {isDealApproved ? (
                                <div
                                    className={classes.secondaryLogo}
                                    style={{
                                        backgroundImage: `url(${profile2})`,
                                        backgroundPosition: 'top',
                                        backgroundSize: 'cover',
                                    }}
                                ></div>
                            ) : null}
                        </div>
                        <div>
                            <div className={classes.title}>Andrew</div>
                            {isDealApproved ? <div className={classes.secondaryName}>& Alisa</div> : null}
                        </div>
                    </div>

                    <div className={classes.leftHeaderContainer}>
                        <div className={classes.awaitingText}>
                            {isEmailSent ? (
                                <LocalizedText label={localized.awaitingHandover} />
                            ) : (
                                <LocalizedText label={localized.pendingConfirmation} />
                            )}
                        </div>
                        <TravelerModal />

                        <div className={classes.refreshIcon} onClick={() => setIsModalOpen(true)}>
                            {isEmailSent ? (
                                <TbRefresh />
                            ) : (
                                <AddUserModal
                                    open={isModalOpen}
                                    setOpen={setIsModalOpen}
                                    isEmailSent={isEmailSent}
                                    selectedRole={selectedRole}
                                    handleRoleSelect={handleRoleSelect}
                                />
                            )}
                        </div>
                        <div className="relative">
                            <div
                                className={classes.moreIcon}
                                onClick={e => {
                                    e.stopPropagation();
                                    setIsMoreOpen(!isMoreOpen);
                                }}
                            >
                                <IoMdMore />
                            </div>
                            <div
                                className={classes.moreOptions}
                                style={{
                                    opacity: isMoreOpen ? '1' : '0',
                                    zIndex: isMoreOpen ? '10' : '0',
                                }}
                            >
                                <div className={classes.optionItem}>
                                    <MdEdit />
                                    <LocalizedText label={localized.editTheOffer} />
                                </div>
                                <div className={`${classes.optionItem} ${classes.reportItem}`}>
                                    <IoIosInformationCircleOutline />
                                    <LocalizedText label={localized.reportProblem} />
                                </div>
                                <TerminationModal isTerminated={isTerminated} setIsTerminated={setIsTerminated} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.confirmContainer}>
                    <div className={classes.textContainer}>
                        <div className={classes.confirmTitle}>
                            <LocalizedText label={localized.isTravelerRight} />
                        </div>
                        <p className={classes.warningText}>
                            <LocalizedText label={localized.warningText} />
                        </p>
                    </div>
                    <DealCompletedModal setIsDealApproved={setIsDealApproved} />
                </div>
            </div>

            <div className={` ${classes.chatContainer} ${isTerminated ? 'justify-center' : ''}`} id="chatbody">
                {/* <div className="text-textColor font-mainQuick text-md bg-activeChatGray rounded-pill px-4 py-1">
          Start your dialog. Write something
        </div> */}

                {isTerminated ? (
                    <ChatInfoText text={localized.dealTerminated} bgColor="#E2542C40" />
                ) : (
                    <div className={classes.messageContainer}>
                        <div className={`${classes.messageWrapper} ${classes.senderMessage}`}>
                            <div className={classes.messageBubbleLeft}>Hello, can you bring my box with you?</div>
                            <div
                                className={classes.logoIcon}
                                style={{
                                    backgroundImage: `url(${profile2})`,
                                }}
                            ></div>
                        </div>
                        <div className={classes.chatInfo}>
                            <ChatInfoText text={localized.paidSuccessfully} bgColor="#EFFFF8" />
                        </div>
                        <div className={classes.messageWrapper}>
                            <div
                                className={classes.logoIcon}
                                style={{
                                    backgroundImage: `url(${profile1})`,
                                }}
                            ></div>
                            <div className={classes.messageBubbleRight}>Hello, Yes I can</div>
                        </div>
                        {messagesList.map(val => {
                            return (
                                <div className={`${classes.messageWrapper} ${classes.senderMessage}`}>
                                    <div className={classes.messageBubbleLeft}>{val}</div>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${profile2})`,
                                        }}
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className={classes.inputContainer}>
                <TextField
                    value={textMessage}
                    onKeyDown={handleKeyDown}
                    onChange={e => {
                        setTextMessage(e.target.value);
                    }}
                    placeholder={intl.formatMessage(localized.writeMessage)}
                    sx={{
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
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IoMdSend size={20} color="#34434E" className={classes.inputIcon} />
                            </InputAdornment>
                        ),
                        startAdornment: (
                            <InputAdornment position="end">
                                <BsPaperclip size={20} color="#34434E" className={classes.inputIcon} />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </div>
    );
};

export default ChatWindow;
