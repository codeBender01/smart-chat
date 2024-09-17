import React from 'react';
import {Dialog} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {maxWidth} from '@mui/system';

import {CustomTheme} from '@style';
import {ModalContext} from '@components/modal/ModalProvider';

const useStyles = makeStyles<CustomTheme>(theme => ({
    modal: {
        '& .MuiPaper-root': {
            borderRadius: theme.shape.borderRadius * 4,
            maxWidth: '840px',
        },
    },
}));

export function Modal() {
    const classes = useStyles();
    const {open, modalContent, closeModal} = React.useContext(ModalContext);
    return (
        <Dialog className={classes.modal} open={open} onClose={closeModal}>
            {modalContent}
        </Dialog>
    );
}
