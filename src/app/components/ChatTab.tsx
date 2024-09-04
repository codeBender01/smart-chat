import {FC} from 'react';
import {FaStar} from 'react-icons/fa';
import {IoCarSharp} from 'react-icons/io5';
import {MdOutlineLocationOn} from 'react-icons/md';
import {RiArchiveLine} from 'react-icons/ri';
import {useMediaQuery} from 'react-responsive';
import {useLocation, useNavigate} from 'react-router-dom';
import {makeStyles} from '@mui/styles';
import '../../cursor.css';

import profile1 from '../../common/assets/profile1.jpeg';
import profile2 from '../../common/assets/profile2.jpeg';
import {CustomTheme} from '@style';

interface ChatTabProps {
    name: string;
    isPackage: boolean;
    rating: string;
    packageName: string;
    bgColor: string;
    chatId: number;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        width: '100%',
        borderBottomWidth: '1px',
        borderColor: theme.palette.primary.light,
        padding: '1rem 0.5rem',
        display: 'flex',
        gap: '0.5rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.secondary.contrastText,
            transition: 'background-color 0.2s',
        },
    },
    imageContainer: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
    },
    iconContainer: {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        color: '#fff',
    },
    badgeBlack: {
        backgroundColor: '#242136',
    },
    logoGreen: {
        backgroundColor: theme.palette.primary.main,
    },
    flex1: {
        flex: 1,
    },
    flexBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
    },
    textPrimary: {
        color: theme.palette.text.primary,
        fontSize: '20px',
        marginRight: '5px',
        fontFamily: 'Quicksand',
        fontWeight: '700',
    },
    locationText: {
        fontFamily: 'Open Sans',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '19.07px',
        color: theme.palette.text.primary,
    },
    dateTimeText: {
        fontFamily: 'Open Sans',
        fontSize: '8px',
        fontWeight: '400',
        lineHeight: '10.89px',
        color: theme.palette.text.secondary,
    },
    textSecondary: {
        color: theme.palette.text.secondary,
        fontSize: '12px',
        fontFamily: 'Open Sans',
        textTransform: 'uppercase',
    },
    ratingIcon: {
        color: theme.palette.primary.main,
        fontSize: '12px',
        marginLeft: '2px',
    },
    line: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '0.25rem',
        marginRight: '0.5rem',
        '& div:first-child': {
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            border: '1px solid #333333',
        },
        '& div:nth-child(2)': {
            width: '1px',
            height: '32px',
            color: theme.palette.text.primary,
        },
        '& div:last-child': {
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            color: theme.palette.text.primary,
        },
    },
    packageInfo: {
        display: 'flex',
        gap: '5px',
        fontFamily: 'Open Sans',
        fontSize: '14px',
        color: theme.palette.text.primary,
        marginBottom: '0.5rem',
    },
    priceTag: {
        padding: '0.25rem 10px',
        borderRadius: '6px',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: '700',
        fontSize: '12px',
        color: theme.palette.text.primary,
        alignSelf: 'flex-end',
    },
    priceBordered: {
        padding: '0.25rem 10px',
        borderRadius: '8px',
        borderWidth: '1px',
        borderColor: theme.palette.text.primary,
        fontFamily: 'Open Sans',
        fontWeight: '700',
        fontSize: '12px',
        color: theme.palette.text.primary,
        alignSelf: 'flex-end',
        marginLeft: '16px',
    },
    unreadBadge: {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.contrastText,
    },

    ratingText: {
        color: theme.palette.text.primary,
        fontFamily: 'Open Sans',
        fontSize: '10px',
        fontWeight: '600',
        marginLeft: '3px',
    },
}));

const ChatTab: FC<ChatTabProps> = ({isPackage, name, rating, packageName, bgColor, chatId}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isMobile = useMediaQuery({query: '(max-width: 850px)'});
    const classes = useStyles();

    return (
        <>
            <div
                onClick={() => {
                    if (isMobile) {
                        navigate(`/chat-view-mobile/${chatId}`, {state: isPackage});
                        return;
                    }
                    navigate(`/chat-view/${chatId}`, {state: isPackage});
                }}
                className={classes.container}
                style={{
                    backgroundColor: location.pathname.includes(`/chat-view/${chatId}`) ? '#eee' : '#f6f6f6',
                }}
            >
                <div
                    className={classes.imageContainer}
                    style={{
                        backgroundImage: `url(${isPackage ? profile2 : profile1})`,
                    }}
                >
                    {isPackage ? (
                        <div className={`${classes.iconContainer} ${classes.badgeBlack}`}>
                            <RiArchiveLine />
                        </div>
                    ) : (
                        <div className={`${classes.iconContainer} ${classes.logoGreen}`}>
                            <IoCarSharp />
                        </div>
                    )}
                </div>
                <div className={classes.flex1}>
                    <div className={classes.flexBetween}>
                        <div className={classes.flexBetween}>
                            <div className={classes.textPrimary}>{name}</div>
                            <div className={classes.ratingIcon}>
                                <FaStar />
                            </div>
                            <div className={classes.ratingText}>{rating}</div>
                        </div>
                        <div className={classes.textSecondary}>31 sep</div>
                    </div>
                    <div className={classes.flexBetween}>
                        {isPackage ? (
                            <div className={classes.flexColumn}>
                                <div className={classes.packageInfo}>
                                    <MdOutlineLocationOn size={18} />
                                    <div>Krakov - Kiev</div>
                                </div>
                                <div className={classes.flexBetween}>
                                    <div
                                        className={classes.priceTag}
                                        style={{
                                            backgroundColor: bgColor,
                                        }}
                                    >
                                        {packageName}
                                    </div>
                                    <div className={classes.priceBordered}>124$</div>
                                </div>
                            </div>
                        ) : (
                            <div className={classes.flexBetween}>
                                <div className={classes.line}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={classes.flexColumn}>
                                    <div>
                                        <div className={classes.locationText}>Krakov</div>
                                        <div className={classes.dateTimeText}>Jul 18, 12:00</div>
                                    </div>
                                    <div>
                                        <div className={classes.locationText}>Kiev</div>
                                        <div className={classes.dateTimeText}>Jul 18, 12:00</div>
                                    </div>
                                </div>
                                <div className={classes.priceBordered}>124$</div>
                            </div>
                        )}
                        <div className={classes.unreadBadge}>1</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatTab;
