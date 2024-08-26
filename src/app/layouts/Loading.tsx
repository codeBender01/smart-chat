import {FC} from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loading: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress size={64} />
        </Box>
    );
};

export default Loading;
