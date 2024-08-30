import {useEffect, useState} from 'react';
import {IntlProvider} from 'react-intl';
import {BrowserRouter} from 'react-router-dom';
import {makeStyles} from '@mui/styles';
import {Provider} from 'react-redux';

import {useTypedSelector} from '@store/initStore';

import messages from '../../common/lang';

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
    const lang = useTypedSelector(state => state.lang.lang);

    useEffect(() => {
        console.log(lang);
    }, [lang]);

    return (
        <IntlProvider messages={messages[lang]} locale={lang}>
            <CustomThemeProvider locale={lang}>
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
