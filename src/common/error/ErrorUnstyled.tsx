import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Link} from '@mui/material';

import {ErrorProps} from './types';

export function ErrorUnstyled({error}: ErrorProps) {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Box>Something went wrong. Please contact support team.</Box>
            <br />
            <Accordion style={{width: '50%'}}>
                <AccordionSummary>
                    <Link style={{textAlign: 'center', width: '100%'}}>Check error details</Link>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <Box>{error?.message}</Box>
                        <Box>{error?.stack}</Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
