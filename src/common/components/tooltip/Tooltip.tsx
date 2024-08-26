import {Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps} from '@mui/material';

type TooltipProps = MuiTooltipProps & {
    disable?: boolean;
};

export function Tooltip({disable, children, ...props}: TooltipProps) {
    return disable ? children : <MuiTooltip {...props}>{children}</MuiTooltip>;
}
