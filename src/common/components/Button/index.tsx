import {Button} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';

import {FC, ReactElement} from 'react';

interface ButtonProps {
    bgcolor: string;
    color: string;
    borderColor: string;
    width: string;
    closeModal: () => void;
    children: ReactElement;
    disabled?: boolean;
}

const CustomButton: FC<ButtonProps> = ({closeModal, bgcolor, borderColor, color, width, children, disabled}) => {
    return (
        <Button
            disableElevation
            disableRipple
            sx={{
                bgcolor: bgcolor,
                color: color,
                border: '1px solid #A9A9A9',
                borderColor: borderColor,
                borderRadius: '20px',
                width: width,
                textTransform: 'none',
                fontFamily: 'OpenReg',
                fontSize: '16px',
                padding: '10px 16px',
                '&:hover': {
                    bgcolor: bgcolor,
                    opacity: 0.8,
                },
            }}
            onClick={closeModal}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
