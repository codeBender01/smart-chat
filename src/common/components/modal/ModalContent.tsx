import React from 'react';
import {makeStyles} from '@mui/styles';

import {CustomTheme} from '@style';

const useStyles = makeStyles<CustomTheme>(theme => ({
    modalContentContainer: {
        gap: theme.spacing(2),
        padding: theme.spacing(0),
        overflowY: 'auto',
        overflowX: 'hidden',
        margin: `0 ${theme.spacing(0.25)}`,
    },
}));

type ModalContentProps = {
    children: React.ReactNode | React.ReactNode[];
};

export function ModalContent({children}: ModalContentProps) {
    const classes = useStyles();
    return <div className={classes.modalContentContainer}>{children}</div>;
}
