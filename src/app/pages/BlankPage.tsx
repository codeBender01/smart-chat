import {FC} from 'react';
import ChatInfoText from '@app/components/ChatInfoText';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

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

const BlankPage: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ChatInfoText text="blankPageMessage" bgColor="#EEEEEE" />
        </div>
    );
};

export default BlankPage;
