import {FC} from 'react';

import {makeStyles} from '@mui/styles';

import LocalizedText from '@components/localize/LocalizedText';

import {CustomTheme} from '@style';

interface ChatInfoTextProps {
    text: {
        id: string;
        defaultMessage: string;
    };
    bgColor: string;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
    chatInfoText: {
        borderRadius: '16px',
        fontSize: '18px',
        padding: '4px 16px',
        alignSelf: 'center',
        fontFmaily: 'QuicksandBold',
        color: theme.palette.text.primary,
        fontWeight: '600',
    },
}));

const ChatInfoText: FC<ChatInfoTextProps> = ({text, bgColor}) => {
    const classes = useStyles();

    return (
        <div
            className={classes.chatInfoText}
            style={{
                backgroundColor: bgColor,
            }}
        >
            <LocalizedText label={text} />
        </div>
    );
};

export default ChatInfoText;
