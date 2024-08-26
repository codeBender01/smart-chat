import React from 'react';
import {makeStyles} from '@mui/styles';
import clsx from 'clsx';

import {CustomTheme} from '@style';

const useStyles = makeStyles<CustomTheme>(theme => ({
    modalContentContainer: {
        maxHeight: '55vh',
        overflowY: 'auto',
        padding: theme.spacing(2, 0.5),
    },
    modalContentFlexColumnMode: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
}));

type ModalContentProps = {
    mode?: 'flex-column';
    children: React.ReactNode | React.ReactNode[];
};

export function FormModalContent({children, mode = 'flex-column'}: ModalContentProps) {
    const classes = useStyles();
    return (
        <div
            className={clsx(classes.modalContentContainer, {
                [classes.modalContentFlexColumnMode]: mode === 'flex-column',
            })}
        >
            {children}
        </div>
    );
}
