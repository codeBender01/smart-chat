import {FC, useEffect, useState} from 'react';
import {BsPaperclip} from 'react-icons/bs';
import {CgArrowLongLeft} from 'react-icons/cg';
import {IoMdSend} from 'react-icons/io';
import {MdOutlineNewLabel} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import ChatInfoText from '@app/components/ChatInfoText';
import {InputAdornment, TextField} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';
import {useIntl} from 'react-intl';

import logo from '../../common/assets/chatLogo.png';
import profile2 from '../../common/assets/profile2.jpeg';

import {makeStyles} from '@mui/styles';
import {display} from '@mui/system';
import {CustomTheme} from '@style';

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
    header: {
        padding: '1rem',
        borderBottomWidth: '1px',
        borderColor: theme.custom.palette.newColors.headerIconBorder,
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
}));

const ChatSupportWindow: FC = () => {
    const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [option, setOption] = useState('');
    const [dealOption, setDealOption] = useState('');
    const [textMessage, setTextMessage] = useState('');
    const [messagesList, setMessagesList] = useState<string[]>([]);

    const navigate = useNavigate();
    const intl = useIntl();

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setIsSuggestionsOpen(false);
        });
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            setTextMessage('');
            setIsMessageSent(true);
            setMessagesList([...messagesList, textMessage]);
            event.preventDefault();
        }
    };

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div onClick={() => navigate(-1)} className={classes.backButton}>
                    <CgArrowLongLeft />
                    <LocalizedText label={{id: 'goBack', defaultMessage: 'Back'}} />
                </div>
            </div>
            <div className={classes.header}>
                <div
                    className={classes.logo}
                    style={{
                        backgroundImage: `url(${logo})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div className={classes.title}>Eelow</div>
            </div>
            <div className={`${classes.chatContainer} ${!isMessageSent ? 'justify-center items-center' : ''}`}>
                {isMessageSent || option === 'help' || option === 'service' ? (
                    <div className={classes.messageContainer}>
                        <div className={classes.messageWrapper}>
                            <div
                                className={classes.logoIcon}
                                style={{
                                    backgroundImage: `url(${logo})`,
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <div className={classes.messageBubbleRight}>
                                <LocalizedText label={{id: 'canWeHelpYou', defaultMessage: 'Hello! How can we help you?'}} />
                            </div>
                        </div>
                        <div className={`${classes.messageWrapper} ${classes.suggestionsMessage}`}>
                            <div
                                className={classes.logoIcon}
                                style={{
                                    backgroundImage: `url(${logo})`,
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <div className={classes.messageBubbleRight}>
                                <p>
                                    <LocalizedText
                                        label={{
                                            id: 'selectTag',
                                            defaultMessage: 'Select one of the tags that matches your request to make the process easier',
                                        }}
                                    />
                                </p>
                                <div className={classes.suggestionContainer}>
                                    {suggestions.map(sug => {
                                        return (
                                            <div
                                                key={sug.label}
                                                onClick={() => setOption(sug.value)}
                                                style={{
                                                    backgroundColor: sug.colorCode,
                                                }}
                                                className={classes.suggestionButton}
                                            >
                                                <LocalizedText label={{id: sug.value, defaultMessage: sug.label}} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className={classes.senderMessage}>
                            <div className={classes.messageBubbleLeft}>messagemessagemessage</div>
                            <div
                                className={classes.logoIcon}
                                style={{
                                    backgroundImage: `url(${profile2})`,
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                        </div>

                        {option === 'help' ? (
                            <>
                                <ChatInfoText text="Ask for help conversation started" bgColor="#EFFFF8" />
                                <div className={classes.senderMessage}>
                                    <div className={classes.messageBubbleLeft}>I can’t get verified on the eelow.com</div>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${profile2})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                                <div className={classes.messageWrapper}>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className={classes.messageBubbleRight}>Got it! Give me a second please</div>
                                </div>
                            </>
                        ) : null}

                        {option === 'service' ? (
                            <>
                                <div className={classes.messageWrapper}>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className={classes.messageBubbleRight}>
                                        <LocalizedText label={{id: 'canWeHelpYou'}} />
                                    </div>
                                </div>
                                <div className={`${classes.messageWrapper} ${classes.suggestionsMessage}`}>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className={classes.messageBubbleRight}>
                                        <p>
                                            <LocalizedText
                                                label={{
                                                    id: 'selectTag',
                                                    defaultMessage:
                                                        'Select one of the tags that matches your request to make the process easier',
                                                }}
                                            />
                                        </p>
                                        <div className={classes.suggestionContainer}>
                                            {serviceProblems.map(sug => {
                                                return (
                                                    <div
                                                        onClick={() => setDealOption(sug.value)}
                                                        key={sug.label}
                                                        style={{
                                                            backgroundColor: sug.colorCode,
                                                        }}
                                                        className={
                                                            'text-textColor text-default font-mainSans rounded-medium w-fit py-1 px-4 hover:opacity-85 duration-200 cursor-pointer'
                                                        }
                                                    >
                                                        <LocalizedText label={{id: sug.value, defaultMessage: sug.label}} />
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

                                <div className={classes.senderMessage}>
                                    <div className={classes.messageBubbleLeft}>I can’t pay for the deal</div>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${profile2})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                                <div className={classes.messageWrapper}>
                                    <div
                                        className={classes.logoIcon}
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                            backgroundPosition: 'top',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                    <div className={classes.messageBubbleRight}>Got it! Give me a second please</div>
                                </div>
                            </>
                        ) : null}
                        {messagesList.map(val => {
                            return (
                                <div className={classes.senderMessage}>
                                    <div className={classes.messageBubbleRight}>{val}</div>
                                    <div
                                        className={classes.logoIcon}
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
                    <div className={classes.chatInfoContainer}>
                        <ChatInfoText text="chatSupportMessage" bgColor="#EEEEEE" />
                    </div>
                )}
            </div>

            <div className={classes.inputContainer}>
                <TextField
                    placeholder={intl.formatMessage({
                        id: 'writeMessage',
                        defaultMessage: 'Write a message',
                    })}
                    onKeyDown={handleKeyDown}
                    value={textMessage}
                    onChange={e => {
                        setTextMessage(e.target.value);
                    }}
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
                                <IoMdSend onClick={() => setIsMessageSent(true)} size={20} color="#34434E" className={classes.inputIcon} />
                            </InputAdornment>
                        ),
                        startAdornment: (
                            <InputAdornment position="start">
                                <div className={classes.messageWrapper}>
                                    <BsPaperclip size={22} color="#34434E" className={classes.inputIcon} />
                                    <div
                                        className="relative"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setIsSuggestionsOpen(!isSuggestionsOpen);
                                        }}
                                    >
                                        <MdOutlineNewLabel size={24} color="#34434E" className={classes.inputIcon} />
                                        <div
                                            className={classes.suggestionsModal}
                                            style={{
                                                opacity: isSuggestionsOpen ? '1' : '0',
                                                zIndex: isSuggestionsOpen ? 10 : 0,
                                            }}
                                        >
                                            {suggestions.map(sug => {
                                                return (
                                                    <div key={sug.label} onClick={() => {}} className={classes.suggestionsModalText}>
                                                        <LocalizedText label={{id: sug.value, defaultMessage: sug.label}} />
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
            </div>
        </div>
    );
};

export default ChatSupportWindow;
