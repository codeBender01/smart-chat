import React from 'react';
import {Box} from '@mui/material';
import {makeStyles} from '@mui/styles';

import {CustomTheme} from '@style';

const useStyles = makeStyles<CustomTheme>(theme => ({
    modalFooter: {
        borderTop: `1px solid ${theme.custom.palette.content.border}`,
        padding: theme.spacing(2),
    },
}));

type ModalFooterProps = {
    children: React.ReactNode;
};

export function ModalFooter({children}: ModalFooterProps) {
    const classes = useStyles();
    return <Box className={classes.modalFooter}>{children}</Box>;
}
