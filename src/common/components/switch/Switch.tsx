import React from 'react';
import {MessageDescriptor} from 'react-intl';
import {Switch as MuiSwitch, Typography} from '@mui/material';
import {SwitchProps as MuiSwitchProps} from '@mui/material/Switch/Switch';
import {makeStyles} from '@mui/styles';

import LocalizedText from '@components/localize/LocalizedText';

const useStyles = makeStyles({
    switchContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export type SwitchProps = MuiSwitchProps & {
    label?: string | MessageDescriptor;
};

export function Switch({label, ...props}: SwitchProps) {
    const classes = useStyles();
    return (
        <div className={classes.switchContainer}>
            {label ? (
                <Typography variant="body1" fontWeight="bold" color="textPrimary">
                    <LocalizedText label={label} />
                </Typography>
            ) : null}
            <MuiSwitch {...props} />
        </div>
    );
}
