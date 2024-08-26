import React from 'react';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import {makeStyles} from '@mui/styles';
import {History} from 'history';
import {Container} from 'inversify';
import {Store} from 'redux';

import {CustomTheme, CustomThemeProvider} from '@style';
import {ModalProvider} from '@components/modal/ModalProvider';

import {Locale} from '../../common/style/theme';
import {Alert} from '../../features/alerts/components/Alert';
import {AppRoutes} from '../routing/AppRoutes';

const useStyles = makeStyles<CustomTheme>(theme => ({
    container: {
        background: theme.palette.background.default,
        marginTop: `${theme.spacing(8)}`,
        minHeight: '100vh',
    },
}));

type AppProps = {
    store: Store;
    history: History<unknown>;
};

function AppInner({history}: Pick<AppProps, 'history'>) {
    const classes = useStyles();

    return (
        <>
            <Alert />
            <div className={classes.container}>
                <AppRoutes history={history} />
            </div>
        </>
    );
}

function App({store, history}: AppProps) {
    const locale: Locale = 'en';

    return (
        <Provider store={store}>
            <IntlProvider locale={locale}>
                <CustomThemeProvider locale={locale}>
                    <ModalProvider>
                        <AppInner history={history} />
                    </ModalProvider>
                </CustomThemeProvider>
            </IntlProvider>
        </Provider>
    );
}

export default App;
