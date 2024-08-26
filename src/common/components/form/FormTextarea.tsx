import {TextareaAutosize} from '@mui/material';
import {makeStyles} from '@mui/styles';

import {CustomTheme} from '@style';

const useStyles = makeStyles<CustomTheme>(theme => ({
    textarea: {
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: theme.spacing(0.5, 0.5, 0, 0.5),
    },
}));

export function FormTextarea() {
    const classes = useStyles();
    return <TextareaAutosize className={classes.textarea} />;
}
