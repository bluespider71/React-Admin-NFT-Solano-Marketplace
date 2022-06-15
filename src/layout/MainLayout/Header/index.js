import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

// assets
import { IconMenu2 } from '@tabler/icons';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();
    const public_url = process.env.PUBLIC_URL;
    return (
        <Box
            sx={{
                marginBottom: '5px'
            }}
        >
            {/* logo & toggler button */}
            <Box
                sx={{
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box
                    component="span"
                    sx={{
                        flexGrow: 1,
                        marginTop: '21px',
                        marginLeft: '31px'
                    }}
                >
                    <LogoSection />
                </Box>
            </Box>
            <Box
                sx={{
                    textAlign: 'right'
                }}
            >
                <ButtonBase sx={{ backgroundColor: 'none' }}>
                    <Avatar
                        variant="circle"
                        sx={{
                            transition: 'all .2s ease-in-out',
                            width: '19px',
                            height: '19px',
                            position: 'fixed',
                            bgcolor: 'transparent'
                        }}
                        onClick={handleLeftDrawerToggle}
                        src={`${public_url}/assets/images/appbar-menu.png`}
                        alt="appbar-menu"
                    ></Avatar>
                </ButtonBase>
            </Box>
        </Box>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
