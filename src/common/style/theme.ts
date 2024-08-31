import {PaletteColorOptions as MuiPaletteColorOptions, PaletteMode, Theme} from '@mui/material';
import {beBY, enUS, Localization, plPL, ukUA} from '@mui/material/locale';
import {createTheme} from '@mui/material/styles';

export enum SystemColorsEnum {
    LightBlue = '#224ec0',
    Bronze = '#d1683f',
    LightGreen = '#49a500',
    Orange = '#d47d17',
    LightGrey = '#8993a4',
    DarkGrey = '#001529',
    Violet = '#6d6dff',
    Coffee = '#bd988c',
    Beige = '#e5d29b',
    Mint = '#85ffd9',
    YellowNeon = '#eaff52',
    Burgundy = '#a62b8b',
    SkyBlue = '#01bcd4',
    Pink = '#ff67a6',
    WarmYellow = '#ffd422',
    White = '#ffffff',
    Emerald = '#14aa57',
    DarkTeal = '#367e7f',
}

type Modify<T, R> = Omit<T, keyof R> & R;

type PaletteCustomColorOptions = MuiPaletteColorOptions & {
    extraLight: string;
};

export type ColorOption = {
    main: string;
    light: string;
    hoverMain: string;
    hoverLight: string;
    border?: string;
};

export type PaletteColorOptions = {
    beige: ColorOption;
    blue: ColorOption;
    bronze: ColorOption;
    bronzeInverted: ColorOption;
    burgundy: ColorOption;
    coffee: ColorOption;
    darkGrey: ColorOption;
    default: ColorOption;
    defaultReversed: ColorOption;
    disabled: ColorOption;
    dropdownDefault: ColorOption;
    green: ColorOption;
    greenDark: ColorOption;
    grey: ColorOption;
    greyInverted: ColorOption;
    lightBlue: ColorOption;
    lightGreen: ColorOption;
    lightGrey: ColorOption;
    lime: ColorOption;
    mint: ColorOption;
    orange: ColorOption;
    orangeDark: ColorOption;
    pink: ColorOption;
    primaryButton: ColorOption;
    purple: ColorOption;
    skyBlue: ColorOption;
    transparent: ColorOption;
    turquoise: ColorOption;
    violet: ColorOption;
    warmYellow: ColorOption;
    yellow: ColorOption;
    yellowNeon: ColorOption;
};

type CustomPalette = {
    grid: {
        new: string;
        evenRows: string;
    };
    content: {
        fairGrey: string;
        backgroundDarkBlue: string;
        chipDeleteBackground: string;
        chipDeleteColor: string;
        liner: string;
        border: string;
        borderLight: string;
        boxShadow: string;
        headingText: string;
        primary: string;
        bodyText: string;
        backgroundDark: string;
        backgroundLight: string;
        header: string;
        default: string;
        tagBackground: string;
        commentNewBackground: string;
        light: string;
        secondarySuccess: string;
        secondaryFailed: string;
        secondaryFailedLight: string;
        secondaryInProgress: string;
        secondaryInProgressLight: string;
        scrollbarBackground: string;
        editorBackground: string;
        bulkActionHeaderBackground: string;
        bulkActionSelectBackground: string;
        notificationHistoryDetailsModalBody: string;
        chipDeleteIconMain: string;
    };
    primary: PaletteCustomColorOptions;
    secondary: PaletteCustomColorOptions;
    status: PaletteColorOptions;
};

type CustomButton = {
    xSmall?: {
        height: string | number;
    };
    small?: {
        height?: string | number;
    };
    medium?: {
        height?: string | number;
    };
    large?: {
        height?: string | number;
    };
    xLarge?: {
        height?: string | number;
    };
};

type CustomOptions = {
    formInputHeight: number;
    chipDeleteWidth: number;
    chipDeleteHeight: number;
    enrichedButtonHeight: number;
    chipDeleteIconSize: number;
    styledSelectMenuMaxHeight: number;
    defaultChipBoxShadow: string;
    defaultChipBorderRadius: number;
    defaultChipHeight: number;
    bulkSummaryDetailsItemValueWidth: number;
    bulkModalSummaryItemHeight: number;
    bulkModalDialogContentHeight: number;
    filterTextInputMaxWidth: number;
    layoutDetailsSecondaryInfoMinWidth: number;
    autocompleteBorderRadius: number;
    autocompleteMaxHeight: number;
    formActionButtonHeight: number;
    formActionButtonBorderRadius: number;
    borderWidth: number;
    smallSizesNavbarHeight: number;
    smallPlusButtonHeight: number;
    chipHeight: number;
    roundedButtonRadius: number;
    denseButtonHeight: number;
    pageHeaderHeight: number;
    gridHeaderHeight: number;
    gridCheckboxWidth: number;
    searchBarMaxWidth: number;
    numberRangeMaxWidth: number;
    sideBarWidth: number;
    sideBarMinimizedWidth: number;
    appModuleContainerSmallScreenWidth: number;
    sideBarItemWidth: number;
    sideBarItemHeight: number;
    sideModalWidth: number;
    topMenuHeight: number;
    formWidth: number;
    actionsMenuWidth: number;
    dataGridFontSize: string;
    textEditorMinHeight: number;
    textEditorMaxHeight: number;
    legalDocViewHeight: number;
    limitedModalHeight: number;
    tagSize: number;
    tagRadius: number;
    fieldWidth: number;
    autocompleteWidth: number;
    fieldMinWidth: number;
    scrollBarHeight: number;
    secondaryItemHeight: number;
    modalContainerMinHeight: number;
    modalActionButtonWidth: number;
    button: {
        fontFamily?: string;
        fontStyle?: string;
        fontWeight?: string | number;
        fontSize?: string | number;
        lineHeight?: string | number;
        letterSpacing?: string | number;
        textTransform?: string;
        textAlign?: string;
        display?: string;
        justifyContent?: string;
        alignItems?: string;
        padding?: string | number;
        height?: string | number;
    };
    palette: CustomPalette;
    transitions: {
        backgroundColor: string;
    };
    dropdownIconWidth: string;
    buttonIconWidth: string | number;
    keyValueTableCell: number;
    customButton: CustomButton;
};

export type CustomTheme = Modify<
    Theme,
    {
        custom: CustomOptions;
    }
>;

export type Locale = 'be-BY' | 'uk-UA' | 'pl-PL' | 'en';

const localeMap: Record<Locale, Localization> = {
    en: enUS,
    'be-BY': beBY,
    'uk-UA': ukUA,
    'pl-PL': plPL,
};

export function createCustomTheme(locale: Locale, mode: PaletteMode = 'light'): CustomTheme {
    const baseTheme = createTheme(
        {
            palette: {
                mode,
                background:
                    mode === 'light'
                        ? {
                              paper: '#fff',
                              default: 'rgba(238, 238, 238, 1)',
                          }
                        : {
                              paper: '#191919',
                              default: '#121212',
                          },
                action: {
                    disabledOpacity: 0.2,
                },
                primary: {
                    light: 'rgba(238, 244, 255, 1)',
                    main: 'rgba(21, 195, 112, 1)',
                    dark: 'rgb(17,146,84)',
                    contrastText: '#fff',
                },
                secondary: {
                    light: 'rgba(240, 242, 245, 1)',
                    main: 'rgba(137, 147, 164, 1)',
                    dark: 'rgba(208, 212, 220, 1)',
                    contrastText: 'rgba(0, 21, 41, 1)',
                },
                error: {
                    light: '#e57373',
                    main: '#f44336',
                    dark: '#d32f2f',
                    contrastText: '#fff',
                },
                // text: {
                //     primary: 'rgba(0, 21, 41, 1)',
                //     secondary: 'rgba(137, 147, 164, 1)',
                //     disabled: 'rgba(163, 170, 177, 1)',
                // hint: 'rgba(169, 175, 182, 1)',
                // },
                success: {
                    light: 'rgba(232, 247, 239, 1)',
                    main: 'rgba(20, 170, 87, 1)',
                    dark: 'rgba(40, 199, 111, 1)',
                    contrastText: '#fff',
                },
                warning: {
                    light: 'rgba(212, 125, 23, 0.2)',
                    main: 'rgba(212, 125, 23, 1)',
                    dark: 'rgba(245, 124, 0, 1)',
                    contrastText: '#fff',
                },
            },
            typography: {
                fontFamily: 'Quicksand',

                h1: {
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '48px',
                    lineHeight: '66px',
                },
                h2: {
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '32px',
                    lineHeight: '40px',
                },
                h3: {
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '30px',
                },
                // Typography -> Title
                h4: {
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '30px',
                },
                h5: {
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '27px',
                    letterSpacing: '-1%',
                },
                // Typography -> Headline
                h6: {
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px !important',
                    lineHeight: '20px',
                    letterSpacing: '-0.32%',
                },
                // Typography -> Text
                body1: {
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '-0.3%',
                },
                body2: {
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '24.51px',
                    letterSpacing: '-0.32%',
                },

                // Typography -> Subhead
                subtitle1: {
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontFamily: 'Open Sans',
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.3%',
                    textTransform: 'unset',
                    color: 'rgba(137, 147, 164, 1)',
                },
                // Typography -> Subhead
                subtitle2: {
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '18px',
                    letterSpacing: '-0.32%',
                },
                // Typography -> Caption Caps
                caption: {
                    fontWeight: 600,
                    fontSize: '10px',
                    lineHeight: '14px',
                    letterSpacing: '1px',
                    color: 'rgba(137, 147, 164, 1)',
                },
                button: {
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20px',
                    letterSpacing: '-0.3%',
                    textTransform: 'none',
                },
            },
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 600,
                    md: 900,
                    lg: 1200,
                    xl: 1420,
                },
            },
            mixins: {
                toolbar: {
                    minHeight: '64px',
                },
            },
        },
        localeMap[locale]
    );

    const customButton: CustomButton = {
        medium: {
            height: 35,
        },
    };

    const customPalette = {
        grid: {
            new: 'rgba(183, 212, 241, 1)',
            evenRows: 'rgba(251, 252, 252, 1)',
        },
        content: {
            backgroundDarkBlue: 'rgba(36, 33, 54, 1)',
            fairGrey: 'rgba(200, 195, 226, 1)',
            //deprecated colors!!
            chipDeleteBackground: 'rgba(137, 147, 164, 0.4)', //Will be removed with https://services-cloud.atlassian.net/browse/IGP-1705
            chipDeleteColor: 'rgba(251, 252, 252, 1)', //Will be removed with https://services-cloud.atlassian.net/browse/IGP-1705
            liner: '#E1E7EB',
            header: 'rgba(169, 175, 182, 1)',
            default: 'rgba(222, 222, 222, 1)',
            primary: 'rgba(43, 75, 242, 1)',
            light: 'rgba(43, 75, 242, 0.15)',
            headingText: 'rgba(0, 21, 41, 1)',
            bodyText: 'rgba(0, 21, 41, 1)',
            backgroundDark: 'rgba(208, 212, 220, 1)',
            backgroundLight: 'rgba(247, 248, 249, 1)',
            backgroundWhite: 'rgba(255, 255, 255, 1)',
            tagBackground: 'rgba(230, 230, 242, 1)',
            commentNewBackground: 'rgba(238, 239, 255, 1)',
            scrollbarBackground: 'rgba(137, 147, 164, 0.5)',
            border: 'rgba(225, 231, 235, 1)',
            borderLight: 'rgba(225, 231, 235, 0.5)',
            boxShadow: 'rgba(19, 64, 106, 0.06)',
            buttonText: 'rgba(255, 255, 255, 1)',
            outlinedButtonText: 'rgba(0, 21, 41, 1)',
            failed: 'rgba(137, 147, 164, 1)',
            failedLight: 'rgba(137, 147, 164, 0.2)',
            secondarySuccess: 'rgba(20, 170, 87, 1)',
            secondaryFailedLight: 'rgba(137, 147, 164, 0.2)',
            secondaryFailed: 'rgba(137, 147, 164, 1)',
            secondaryInProgressLight: 'rgba(212, 125, 23, 0.2)',
            secondaryInProgress: 'rgba(212, 125, 23, 1)',
            editorBackground: 'rgba(240, 243, 245, 1)',
            bulkActionHeaderBackground: 'rgba(137, 147, 164, 0.06)',
            bulkActionSelectBackground: 'rgba(225, 231, 235, 0.3)',
            notificationHistoryDetailsModalBody: 'rgba(249, 250, 251, 1)',
            chipDeleteIconMain: 'rgba(175, 185, 198, 1)',
        },
        status: {
            transparent: {
                main: 'rgba(0, 0, 0, 1)',
                light: 'transparent',
                hoverMain: 'rgba(0, 0, 0, 1)',
                hoverLight: 'transparent',
                border: '1px rgba(240, 242, 245, 1) solid',
            },
            disabled: {
                main: 'rgba(137, 147, 164, 1)',
                light: 'rgba(240, 242, 245, 1)',
                hoverMain: 'rgba(137, 147, 164, 1)',
                hoverLight: 'rgba(240, 242, 245, 1)',
            },
            default: {
                main: 'rgba(137, 147, 164, 1)',
                light: 'rgba(255, 255, 255, 1)',
                hoverMain: 'rgba(137, 147, 164, 1)',
                hoverLight: 'rgba(255, 255, 255, 1)',
            },
            defaultReversed: {
                main: 'rgba(255, 255, 255, 1)',
                light: 'rgba(137, 147, 164, 1)',
                hoverMain: 'rgba(255, 255, 255, 1)',
                hoverLight: 'rgba(137, 147, 164, 1)',
            },
            orange: {
                main: 'rgba(212, 125, 23, 1)',
                light: 'rgba(231, 132, 17, 0.2)',
                hoverMain: 'rgba(212, 125, 23, 1)',
                hoverLight: 'rgba(231, 132, 17, 0.2)',
            },
            orangeDark: {
                main: 'rgba(255, 255, 255, 1)',
                light: 'rgba(212, 125, 23, 1)',
                hoverMain: 'rgba(255, 255, 255, 1)',
                hoverLight: 'rgba(212, 125, 23, 1)',
            },
            bronze: {
                main: 'rgba(209, 104, 63, 1)',
                light: 'rgba(253, 236, 229, 1)',
                hoverMain: 'rgba(209, 104, 63, 1)',
                hoverLight: 'rgba(253, 236, 229, 1)',
            },
            green: {
                main: 'rgba(20, 170, 87, 1)',
                light: 'rgba(20, 174, 89, 0.2)',
                hoverMain: 'rgba(20, 170, 87, 1)',
                hoverLight: 'rgba(20, 174, 89, 0.2)',
            },
            greenDark: {
                main: 'rgba(255, 255, 255, 1)',
                light: 'rgba(20, 170, 87, 1)',
                hoverMain: 'rgba(255, 255, 255, 1)',
                hoverLight: 'rgba(20, 170, 87, 1)',
            },
            lightGreen: {
                main: 'rgba(73, 165, 0, 1)',
                light: 'rgba(230, 246, 217, 1)',
                hoverMain: 'rgba(73, 165, 0, 1)',
                hoverLight: 'rgba(230, 246, 217, 1)',
            },
            turquoise: {
                main: 'rgba(34, 154, 161, 1)',
                light: 'rgba(222, 244, 246, 1)',
                hoverMain: 'rgba(34, 154, 161, 1)',
                hoverLight: 'rgba(222, 244, 246, 1)',
            },
            lightBlue: {
                main: 'rgba(34, 78, 192, 1)',
                light: 'rgba(222, 229, 246, 1)',
                hoverMain: 'rgba(34, 78, 192, 1)',
                hoverLight: 'rgba(222, 229, 246, 1)',
            },
            blue: {
                main: 'rgba(255, 255, 255, 1)',
                light: 'rgba(20, 111, 249, 1)',
                hoverMain: 'rgba(255, 255, 255, 1)',
                hoverLight: 'rgba(20, 111, 249, 1)',
            },
            purple: {
                main: 'rgba(172, 41, 161, 1)',
                light: 'rgba(246, 222, 244, 1)',
                hoverMain: 'rgba(172, 41, 161, 1)',
                hoverLight: 'rgba(246, 222, 244, 1)',
            },
            violet: {
                main: 'rgba(109, 109, 255, 1)',
                light: 'rgba(109, 109, 255, 0.1)',
                hoverMain: 'rgba(109, 109, 255, 1)',
                hoverLight: 'rgba(109, 109, 255, 0.1)',
            },
            yellow: {
                main: 'rgba(166, 172, 16, 1)',
                light: 'rgba(246, 246, 222, 1)',
                hoverMain: 'rgba(166, 172, 16, 1)',
                hoverLight: 'rgba(246, 246, 222, 1)',
            },
            grey: {
                main: baseTheme.palette.text.primary,
                light: 'rgba(240, 242, 245, 0.5)',
                hoverMain: baseTheme.palette.text.primary,
                hoverLight: 'rgba(240, 242, 245, 0.5)',
            },
            lightGrey: {
                main: 'rgba(137, 147, 164, 1)',
                light: 'rgba(240, 242, 245, 0.5)',
                hoverMain: 'rgba(137, 147, 164, 1)',
                hoverLight: 'rgba(240, 242, 245, 0.5)',
            },
            darkGrey: {
                main: baseTheme.palette.text.primary,
                light: 'rgba(231, 236, 239, 1)',
                hoverMain: baseTheme.palette.text.primary,
                hoverLight: 'rgba(231, 236, 239, 1)',
            },
            greyInverted: {
                main: 'rgba(255, 255, 255, 1)',
                light: 'rgba(137, 147, 164, 1)',
                hoverMain: 'rgba(255, 255, 255, 1)',
                hoverLight: 'rgba(137, 147, 164, 1)',
            },
            bronzeInverted: {
                main: 'rgba(255, 255, 255, 1)',
                light: 'rgba(209, 104, 63, 1)',
                hoverMain: 'rgba(255, 255, 255, 1)',
                hoverLight: 'rgba(209, 104, 63, 1)',
            },
            dropdownDefault: {
                main: 'rgba(0, 21, 41, 1)',
                light: 'rgba(251, 252, 252, 1)',
                hoverMain: 'rgba(255, 255, 255, 1)',
                hoverLight: 'rgba(20, 111, 249, 1)',
            },
            primaryButton: {
                main: 'rgba(251, 252, 252, 1)',
                light: 'rgba(251, 252, 252, 0.3)',
                hoverMain: 'rgba(255, 255, 255, 0.3)',
                hoverLight: 'rgba(255, 255, 255, 0.3)',
            },
            lime: {
                main: 'rgba(2, 187, 166, 1)',
                light: 'rgba(246, 246, 222, 1)',
                hoverMain: 'rgba(2, 187, 166, 1)',
                hoverLight: 'rgba(246, 246, 222, 1)',
            },
            coffee: {
                main: 'rgba(189, 152, 140, 1)',
                light: 'rgba(189, 152, 140, 0.1)',
                hoverMain: 'rgba(189, 152, 140, 1)',
                hoverLight: 'rgba(189, 152, 140, 0.1)',
            },
            beige: {
                main: 'rgba(114, 88, 13, 1)',
                light: 'rgba(229, 210, 155, 0.25)',
                hoverMain: 'rgba(114, 88, 13, 1)',
                hoverLight: 'rgba(229, 210, 155, 0.25)',
            },
            mint: {
                main: 'rgba(66, 167, 135, 1)',
                light: 'rgba(133, 255, 217, 0.25)',
                hoverMain: 'rgba(66, 167, 135, 1)',
                hoverLight: 'rgba(133, 255, 217, 0.25)',
            },
            yellowNeon: {
                main: 'rgba(146, 163, 22, 1)',
                light: 'rgba(234, 255, 82, 0.25)',
                hoverMain: 'rgba(146, 163, 22, 1)',
                hoverLight: 'rgba(234, 255, 82, 0.25)',
            },
            burgundy: {
                main: 'rgba(167, 44, 140, 1)',
                light: 'rgba(167, 44, 140, 0.1)',
                hoverMain: 'rgba(167, 44, 140, 1)',
                hoverLight: 'rgba(167, 44, 140, 0.1)',
            },
            skyBlue: {
                main: 'rgba(1, 188, 212, 1)',
                light: 'rgba(1, 188, 212, 0.1)',
                hoverMain: 'rgba(1, 188, 212, 1)',
                hoverLight: 'rgba(1, 188, 212, 0.1)',
            },
            pink: {
                main: 'rgba(255, 103, 166, 1)',
                light: 'rgba(255, 103, 166, 0.1)',
                hoverMain: 'rgba(255, 103, 166, 1)',
                hoverLight: 'rgba(255, 103, 166, 0.1)',
            },
            warmYellow: {
                main: 'rgba(231, 186, 0, 1)',
                light: 'rgba(255, 212, 34, 0.2)',
                hoverMain: 'rgba(231, 186, 0, 1)',
                hoverLight: 'rgba(255, 212, 34, 0.2)',
            },
        },
        primary: {
            extraLight: 'rgba(157, 167, 177, 1)',
        },
        secondary: {
            extraLight: 'rgba(224, 238, 251, 1)',
        },
    } as CustomPalette;

    const commonButtonProps = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: baseTheme.spacing(1.25, 2.5),
        height: 40,
        minWidth: 100,
    };

    return {
        ...baseTheme,
        custom: {
            chipDeleteWidth: 16, //Will be removed with https://services-cloud.atlassian.net/browse/IGP-1705
            chipDeleteHeight: 16, //Will be removed with https://services-cloud.atlassian.net/browse/IGP-1705
            enrichedButtonHeight: 95,
            chipDeleteIconSize: 18,
            styledSelectMenuMaxHeight: 500,
            defaultChipBoxShadow: '0px 0.8125px 0.8125px rgba(19, 64, 106, 0.06)',
            defaultChipBorderRadius: 81.25,
            defaultChipHeight: 26,
            bulkSummaryDetailsItemValueWidth: 200,
            bulkModalSummaryItemHeight: 75,
            bulkModalDialogContentHeight: 590,
            filterTextInputMaxWidth: 400,
            layoutDetailsSecondaryInfoMinWidth: 165,
            autocompleteBorderRadius: 6,
            autocompleteMaxHeight: 300,
            formActionButtonHeight: 44,
            formActionButtonBorderRadius: 6,
            borderWidth: 1,
            smallSizesNavbarHeight: 56,
            smallPlusButtonHeight: 32,
            chipHeight: 24,
            roundedButtonRadius: 8,
            denseButtonHeight: 36,
            pageHeaderHeight: 80,
            gridHeaderHeight: 48,
            gridCheckboxWidth: 64,
            numberRangeMaxWidth: 400,
            searchBarMaxWidth: 400,
            sideBarWidth: 260,
            sideBarMinimizedWidth: 80,
            appModuleContainerSmallScreenWidth: 1280,
            sideBarItemWidth: 200,
            sideBarItemHeight: 50,
            sideModalWidth: 334,
            topMenuHeight: 60,
            formWidth: 400,
            actionsMenuWidth: 150,
            textEditorMinHeight: 300,
            textEditorMaxHeight: 550,
            legalDocViewHeight: 700,
            limitedModalHeight: 600,
            fieldWidth: 150,
            autocompleteWidth: 340,
            fieldMinWidth: 60,
            tagSize: 16,
            tagRadius: 3,
            dataGridFontSize: '0.875rem',
            scrollBarHeight: 18,
            secondaryItemHeight: 38,
            modalContainerMinHeight: 500,
            palette: customPalette,
            button: commonButtonProps,
            transitions: {
                backgroundColor: 'background-color 1s linear',
            },
            modalActionButtonWidth: 162,
            dropdownIconWidth: '1.5em',
            buttonIconWidth: 15,
            keyValueTableCell: 55,
            customButton,
            formInputHeight: 38,
        },
    };
}
