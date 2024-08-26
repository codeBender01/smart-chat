import React, {useContext} from 'react';
import {MessageDescriptor} from 'react-intl';
import {Box, IconButton, Typography} from '@mui/material';

import {useCustomTheme} from '@style';
import LocalizedText from '@components/localize/LocalizedText';
import {ModalContext} from '@components/modal/ModalProvider';

type ModalTitleProps = {
    title: string | MessageDescriptor;
    titleParams?: object;
    onClose?: () => void;
};

export function ModalTitle({title, titleParams, onClose}: ModalTitleProps) {
    const theme = useCustomTheme();
    const {closeModal} = useContext(ModalContext);
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" padding={theme.spacing(2, 2, 1)}>
            <Typography variant="h2">
                <LocalizedText label={title} labelParams={titleParams} />
            </Typography>
            <IconButton onClick={onClose ?? closeModal}></IconButton>
        </Box>
    );
}
