import {FaStar} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';

import {CustomTheme} from '@style';

import {Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';

import profile1 from '../../common/assets/profile1.jpeg';
import profile2 from '../../common/assets/profile2.jpeg';

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        width: '100%',
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        padding: theme.spacing(4, 2),
        display: 'flex',
        gap: theme.spacing(2),
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
        transition: 'background-color 0.2s ease-in-out',
    },
    imageContainer: {
        width: 70,
        height: 70,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
    },
    flexContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(0.5),
    },
    rating: {
        color: theme.palette.success.main,
        fontSize: 'small',
    },
    date: {
        color: theme.palette.text.secondary,
        textTransform: 'uppercase',
        fontSize: 'small',
    },
    requestButton: {
        marginTop: theme.spacing(1),
        color: theme.palette.text.primary,
        backgroundColor: (props: {requestType: string}) => props.requestType,
        padding: theme.spacing(0.5, 1),
        borderRadius: '8px',
        '&:hover': {
            opacity: 0.85,
        },
        transition: 'opacity 0.2s ease-in-out',
        cursor: 'pointer',
        fontFamily: 'sans-serif',
    },
    notificationBubble: {
        width: 20,
        height: 20,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.text.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
    },
    notifContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
    },
    ratingNumber: {
        marginBottom: '5px',
    },
}));

interface Props {
    chatId: number;
    isPackage: boolean;
    name: string;
    rating: string;
    requestType: string;
    requestText: string;
}

export default function MyComponent(props: Props) {
    const {chatId, isPackage, name, rating, requestType, requestText} = props;
    const classes = useStyles({requestType});
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
            className={classes.container}
        >
            <div
                className={classes.imageContainer}
                style={{
                    backgroundImage: `url(${isPackage ? profile2 : profile1})`,
                }}
            ></div>
            <div className={classes.flexContainer}>
                <div className={classes.header}>
                    <div className={classes.subHeader}>
                        <div>
                            <Typography variant="h4">{name}</Typography>
                        </div>
                        <div className={classes.rating}>
                            <FaStar />
                        </div>
                        <div className={classes.ratingNumber}>
                            <Typography variant="caption" color={'#282D41'}>
                                {rating}
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.date}>31 sep</div>
                </div>
                <div className={classes.notifContainer}>
                    <div className={classes.requestButton}>{requestText}</div>
                    <div className={classes.notificationBubble}>1</div>
                </div>
            </div>
        </div>
    );
}
