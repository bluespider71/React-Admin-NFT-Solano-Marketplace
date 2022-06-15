import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Drawer, useMediaQuery } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import MenuCard from './MenuCard';
import { drawerWidth } from 'store/constant';

// ==============================|| MY MODIFY ||============================== //
import Header from '../Header';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <>
            <Header handleLeftDrawerToggle={drawerToggle} />
            <BrowserView>
                <PerfectScrollbar
                    component="div"
                    style={{
                        height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        paddingLeft: '15px',
                        paddingRight: '15px'
                    }}
                >
                    <MenuList authmenu={'guest'} />

                    <Button
                        variant="contained"
                        sx={{
                            mt: '32px',
                            borderRadius: '26px',
                            background: 'linear-gradient(180deg, #007E05 0%, #000000 100%);',
                            fontWeight: 700,
                            backgroundColor: '#fff',
                            width: '100%',
                            fontSize: '14px'
                        }}
                    >
                        Connect Wallet
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            mt: '32px',
                            borderRadius: '26px',
                            background: 'linear-gradient(180deg, #007E05 0%, #000000 100%);',
                            fontWeight: 700,
                            backgroundColor: '#fff',
                            width: '100%',
                            fontSize: '14px'
                        }}
                    >
                        BwkQ...prW7
                    </Button>

                    <MenuList authmenu={'signin'} />
                </PerfectScrollbar>
            </BrowserView>
        </>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? 240 : 'auto' }} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: '#13161B',
                        color: theme.palette.text.primary,
                        borderRight: '1px solid #CBCBCB',
                        overflow: 'hidden'
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default Sidebar;
