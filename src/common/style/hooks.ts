import {useTheme} from '@mui/material';

import {CustomTheme} from './theme';

export function useCustomTheme(): CustomTheme {
    const theme = useTheme<CustomTheme>();
    return theme;
}
