import React from 'react';
import {MessageDescriptor} from 'react-intl';
import {Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import clsx from 'clsx';

import {CustomTheme} from '@style';

import LocalizedText from '../localize/LocalizedText';

const useStyles = makeStyles<CustomTheme>(theme => ({
    modalLayoutContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius * 5,

        maxWidth: '500px',

        background: theme.palette.background.paper,
    },
    modalLayoutTitle: {
        color: theme.palette.text.primary,
    },
    modalLayoutSubTitle: {
        color: theme.palette.text.secondary,
    },
}));

type ModalLayoutProps = {
    title: string | MessageDescriptor;
    subTitle?: string | MessageDescriptor;
    children: React.ReactNode | React.ReactNode[];
    className?: string;
};

export function ModalLayout({title, subTitle, children, className}: ModalLayoutProps) {
    const classes = useStyles();
    return (
        <div className={clsx(classes.modalLayoutContainer, 'shadow-bs', className)}>
            <Typography variant="h2" className={classes.modalLayoutTitle}>
                <LocalizedText label={title} />
            </Typography>
            {subTitle ? (
                <Typography variant="body1" className={classes.modalLayoutSubTitle}>
                    <LocalizedText label={subTitle} />
                </Typography>
            ) : null}

            {children}
        </div>
    );
}
