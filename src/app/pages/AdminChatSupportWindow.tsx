import {FC, useState} from 'react';
import {BsPaperclip} from 'react-icons/bs';
import {CgArrowLongLeft} from 'react-icons/cg';
import {FaHand} from 'react-icons/fa6';
import {IoMdSend} from 'react-icons/io';
import {useNavigate} from 'react-router-dom';
import ChatInfoText from '@app/components/ChatInfoText';
import {Button, InputAdornment, TextField} from '@mui/material';
import LocalizedText from '@components/localize/LocalizedText';
defineMessages;

import {defineMessages, useIntl} from 'react-intl';

import logo from '../../common/assets/chatLogo.png';
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
            backgroundColor: '#fff',
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
        fontWeight: '600',
        '&:hover': {
            opacity: 0.85,
        },
        width: 'fit-content',
    },
    header: {
        padding: '1rem',
        borderBottomWidth: '1px',
        borderColor: theme.custom.palette.newColors.adminChatBorderColor,
        display: 'flex',
        gap: '0.75rem',
    },
    logo: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
    },
    title: {
        color: theme.palette.text.primary,
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
        fontSize: '20px',
    },
    chatContainer: {
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.75rem 1rem',
        gap: '1.5rem',
        zIndex: 10,
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        zIndex: 10,
        padding: '32px',
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
        color: theme.palette.text.primary,
    },
    messageBubbleRight: {
        backgroundColor: theme.palette.secondary.contrastText, // Replace with the value of bg-activeChatGray
        borderRadius: '10px',
        borderBottomLeftRadius: 0,
        padding: '0.75rem 1rem',
        fontFamily: 'Open Sans, sans-serif',
        color: theme.palette.text.primary,
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

    chatInfoText: {
        width: 'fit-content',
        alignSelf: 'center',
        padding: '4px 16px',
    },
    responseButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '24px',
    },
    responseButtonDivider: {
        backgroundColor: theme.palette.text.secondary,
        width: '1px',
        height: '36.5px',
    },

    inputIconContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    starterText: {
        width: '65%',
        padding: theme.spacing(1, 2), // equivalent to px-4 py-1
        alignSelf: 'center',
        [theme.breakpoints.up(850)]: {
            width: 'fit-content', // equivalent to w-fit
        },
    },
}));

const localized = defineMessages({
    weHelped: {
        id: 'AdminChatSupportWindow_weHelped',
        defaultMessage: 'We helped you with your question?',
    },
    yes: {
        id: 'AdminChatSupportWindow_yes',
        defaultMessage: 'yes',
    },
    no: {
        id: 'AdminChatSupportWindow_no',
        defaultMessage: 'no',
    },
    askForHelpFinished: {
        id: 'AdminChatSupportWindow_askForHelpFinished',
        defaultMessage: 'Ask for help conversation finished',
    },
    startDialog: {
        id: 'AdminChatSupportWindow_startDialog',
        defaultMessage: 'Start your dialog. Write something',
    },
    goBack: {
        id: 'AdminChatSupportWindow_goBack',
        defaultMessage: 'Back',
    },
    askForHelpStarted: {
        id: 'AdminChatSupportWindow_askForHelpStarted',
        defaultMessage: 'Ask for help conversation started',
    },
    writeMessage: {
        id: 'ChatWindow_writeMessage',
        defaultMessage: 'Write a message...',
    },
});

const AdminChatSupportWindow: FC = () => {
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [isConversationFinished, setIsConversationFinished] = useState(false);
    const [textMessage, setTextMessage] = useState('');
    const [messagesList, setMessagesList] = useState<string[]>([]);

    const navigate = useNavigate();
    const intl = useIntl();

    const classes = useStyles();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            setTextMessage('');
            setIsMessageSent(true);
            setMessagesList([...messagesList, textMessage]);
            event.preventDefault();
        }
    };

    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div onClick={() => navigate(-1)} className={classes.backButton}>
                    <CgArrowLongLeft />
                    <LocalizedText label={localized.goBack} />
                </div>
            </div>
            <div className={classes.header}>
                <div
                    className={classes.logo}
                    style={{
                        backgroundImage: `url(${profile2})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div className={classes.title}>Alisa</div>
            </div>

            <div className={`${classes.chatContainer} ${!isMessageSent ? 'justify-center items-center' : ''}`}>
                {isMessageSent ? (
                    <div className={classes.messageContainer}>
                        <div className={classes.chatInfoText}>
                            {isMessageSent ? <ChatInfoText text={localized.askForHelpStarted} bgColor="#EFFFF8" /> : null}
                        </div>
                        {isMessageSent ? (
                            <>
                                <div className={classes.messageWrapper}>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${profile2})`,
                                        }}
                                    ></div>
                                    <div className={classes.messageBubbleRight}>I can’t get verified on the eelow.com</div>
                                </div>
                                <div className={`${classes.messageWrapper} ${classes.senderMessage}`}>
                                    <div className={classes.messageBubbleLeft}>Got it! Give me a second please</div>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                        }}
                                    ></div>
                                </div>
                                <div className={`${classes.messageWrapper} ${classes.senderMessage}`}>
                                    <div className={classes.messageBubbleLeft}>Done!</div>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                        }}
                                    ></div>
                                </div>
                                <div className={`${classes.messageWrapper} ${classes.senderMessage}`}>
                                    <div className={classes.messageBubbleLeft}>
                                        <div>
                                            <LocalizedText label={localized.weHelped} />
                                        </div>
                                        <div className={classes.responseButtonContainer}>
                                            <Button
                                                sx={{
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 0,
                                                    backgroundColor: '#E0E0E0',
                                                    color: '#000000DE',
                                                    fontWeight: '500',
                                                    fontSize: 14,
                                                    padding: '6px 12px',
                                                    minWidth: '48px',
                                                    textTransform: 'uppercase',
                                                    '&:hover': {
                                                        opacity: 0.85,
                                                        backgroundColor: '#E0E0E0',
                                                    },
                                                }}
                                                variant="contained"
                                                onClick={() => setIsConversationFinished(true)}
                                            >
                                                <LocalizedText label={localized.yes} />
                                            </Button>
                                            <div className={classes.responseButtonDivider}></div>
                                            <Button
                                                sx={theme => ({
                                                    borderTopLeftRadius: 0,
                                                    borderBottomLeftRadius: 0,
                                                    backgroundColor: '#E0E0E0',
                                                    color: '#000000DE',
                                                    fontWeight: '500',
                                                    fontSize: 14,
                                                    padding: '6px 12px',
                                                    minWidth: '48px',
                                                    textTransform: 'uppercase',

                                                    '&:hover': {
                                                        opacity: 0.85,
                                                        backgroundColor: '#E0E0E0',
                                                    },
                                                })}
                                                variant="contained"
                                            >
                                                <LocalizedText label={localized.no} />
                                            </Button>
                                        </div>
                                    </div>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                        }}
                                    ></div>
                                </div>
                            </>
                        ) : null}
                        {messagesList.map(val => {
                            return (
                                <div className={classes.messageWrapper}>
                                    <div className={classes.messageBubbleLeft}>{val}</div>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                        }}
                                    ></div>
                                </div>
                            );
                        })}

                        <div className={classes.chatInfoText}>
                            {isConversationFinished ? <ChatInfoText text={localized.askForHelpFinished} bgColor="#EFFFF8" /> : null}
                        </div>
                    </div>
                ) : (
                    <div className={classes.starterText}>
                        <ChatInfoText text={localized.startDialog} bgColor="#EEEEEE" />
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
                    sx={theme => ({
                        borderRadius: '12px',
                        backgroundColor: '#eee',
                        border: 'none',
                        width: '100%',
                        color: theme.palette.text.primary,
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
                                color: theme.palette.text.primary,
                                opacity: 1,
                            },
                        },
                    })}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IoMdSend onClick={() => setIsMessageSent(true)} size={20} color="#34434E" className={classes.inputIcon} />
                            </InputAdornment>
                        ),
                        startAdornment: (
                            <InputAdornment position="start">
                                <div className={classes.inputIconContainer}>
                                    <FaHand size={22} color="#34434E" className={classes.inputIcon} />
                                    <BsPaperclip size={22} color="#34434E" className={classes.inputIcon} />
                                </div>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </div>
    );
};

export default AdminChatSupportWindow;
