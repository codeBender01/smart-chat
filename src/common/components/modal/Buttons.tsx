import React from 'react';
import {defineMessages, MessageDescriptor} from 'react-intl';
import {Button} from '@mui/material';
import {makeStyles} from '@mui/styles';
import clsx from 'clsx';

import {CustomTheme} from '@style';
import LocalizedText from '@components/localize/LocalizedText';
import {ModalStepProps} from '@components/modal/types';

const useStyles = makeStyles<CustomTheme>(theme => ({
    buttonLayoutContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        width: '90px',
        borderRadius: `${theme.shape.borderRadius * 6}px !important`,
        padding: `${theme.spacing()} ${theme.spacing(2)} !important`,
    },
    buttonPrimary: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: '#ffffff !important',
    },
    buttonSecondary: {
        border: `1px solid ${theme.palette.secondary.main} !important`,
        color: `${theme.palette.secondary.main} !important`,
    },
}));

const localized = defineMessages({
    buttonsNext: {
        id: 'Buttons_nextLabel',
        defaultMessage: 'Next',
    },
    buttonsPrevious: {
        id: 'Buttons_previousLabel',
        defaultMessage: 'Previous',
    },
});

type ButtonsProps = ModalStepProps & {
    prevButtonLabel?: string | MessageDescriptor;
    nextButtonLabel?: string | MessageDescriptor;
};

export function Buttons({onPrev, onNext, prevButtonLabel, nextButtonLabel}: ButtonsProps) {
    const classes = useStyles();
    return (
        <div className={classes.buttonLayoutContainer}>
            {onPrev ? (
                <Button onClick={onPrev} className={clsx(classes.button, classes.buttonSecondary)}>
                    <LocalizedText label={prevButtonLabel ?? localized.buttonsPrevious} />
                </Button>
            ) : (
                <div></div>
            )}
            {onNext ? (
                <Button color="primary" onClick={onNext} className={clsx(classes.button, classes.buttonPrimary)}>
                    <LocalizedText label={nextButtonLabel ?? localized.buttonsNext} />
                </Button>
            ) : null}
        </div>
    );
}
