import React from 'react';
import {IntlProvider} from 'react-intl';
import {BrowserRouter} from 'react-router-dom';
import {makeStyles} from '@mui/styles';

import {CustomTheme, CustomThemeProvider} from '@style';
import {ModalProvider} from '@components/modal/ModalProvider';

import {Locale} from '../../common/style/theme';
import {AppRoutes} from '../routing/AppRoutes';

const useStyles = makeStyles<CustomTheme>(theme => ({
    container: {
        background: theme.palette.background.default,
        minHeight: '100vh',
    },
}));

function AppInner() {
    const classes = useStyles();

    return (
        <>
            {/* <Alert /> */}
            <div className={classes.container}>
                <AppRoutes />
            </div>
        </>
    );
}

function App() {
    const locale: Locale = 'en';

    return (
        <IntlProvider locale={locale}>
            <CustomThemeProvider locale={locale}>
                <BrowserRouter>
                    <ModalProvider>
                        <AppInner />
                    </ModalProvider>
                </BrowserRouter>
            </CustomThemeProvider>
        </IntlProvider>
    );
}

export default App;
