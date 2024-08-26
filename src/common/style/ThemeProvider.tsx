import React, {useEffect, useState} from 'react';
import {ThemeProvider} from '@mui/material';

import {createCustomTheme, CustomTheme, Locale} from './theme';

type CustomThemeProviderProps = {
    children: React.ReactNode;
    locale: Locale;
};

export const CustomThemeProvider = ({children, locale}: CustomThemeProviderProps) => {
    const [theme, setTheme] = useState(createCustomTheme(locale));

    useEffect(() => {
        setTheme(createCustomTheme(locale));
    }, [locale]);

    return <ThemeProvider<CustomTheme> theme={theme}>{children}</ThemeProvider>;
};
