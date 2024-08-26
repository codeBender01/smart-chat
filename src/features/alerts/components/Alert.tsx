import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert as MuiAlert, Snackbar} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';

import {RootState} from 'src/common/store/types';
import {clearAlertAction} from '../actions';

export function Alert() {
    const autoHideDuration = 5000;
    // const dispatch = useDispatch();
    // const message = useSelector((state: RootState) => state?.alert?.message);
    // const values = useSelector((state: RootState) => state?.alert?.values);
    // const isError = useSelector((state: RootState) => state?.alert?.isError);

    function handleSnackbarClose(_: React.SyntheticEvent<unknown> | Event, reason: string) {
        if (reason !== 'clickaway') {
            // clearAlertState();
        }
    }

    // function clearAlertState() {
    //     dispatch(clearAlertAction());
    // }

    return (
        // <Snackbar open={!!message} autoHideDuration={autoHideDuration} onClose={handleSnackbarClose}>
        //     <MuiAlert variant="filled" severity={isError ? 'error' : 'success'} onClose={clearAlertState}>
        //         {message ? <LocalizedText label={message} labelParams={values} /> : null}
        //     </MuiAlert>
        // </Snackbar>

        <div></div>
    );
}
