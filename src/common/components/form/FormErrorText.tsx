import React from 'react';
import {FormHelperText} from '@mui/material';
import {makeStyles} from '@mui/styles';

import {CustomTheme} from '@style';

const useStyles = makeStyles<CustomTheme>(theme => ({
    formErrorText: {
        marginTop: `${theme.spacing(0.5)} !important`,
        marginLeft: `${theme.spacing(1.75)} !important`,
    },
}));

type FormErrorTextProps = {
    text?: string;
};

export function FormErrorText({text}: FormErrorTextProps) {
    const classes = useStyles();
    return text ? (
        <FormHelperText error className={classes.formErrorText}>
            {text}
        </FormHelperText>
    ) : null;
}
