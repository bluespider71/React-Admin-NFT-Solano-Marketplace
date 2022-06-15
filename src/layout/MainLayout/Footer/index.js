// ==============================|| Footer Component ||============================== //
import { Box, Typography } from '@mui/material';

const Footer = () => (
    <>
        <Box
            sx={{
                height: '50px',
                bgcolor: '#252525',
                width: '100%',
                textAlign: 'center'
            }}
        >
            <Typography
                sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '50px',
                    color: '#FFFFFF',
                    verticalAlign: 'middle'
                }}
            >
                Copyright 2022 PT. Komodo Legends Interaktif
            </Typography>
        </Box>
    </>
);

export default Footer;
