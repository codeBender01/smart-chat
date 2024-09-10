import {FC} from 'react';
import ChatInfoText from '@app/components/ChatInfoText';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';
import {defineMessages} from 'react-intl';

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '90vh',
        width: '100%',
    },
}));

const localized = defineMessages({
    blankPageMessage: {
        id: 'BlankPage_blankPageMessage',
        defaultMessage: 'Select a chat to start messaging',
    },
});

const BlankPage: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ChatInfoText text={localized.blankPageMessage} bgColor="#EEEEEE" />
        </div>
    );
};

export default BlankPage;
