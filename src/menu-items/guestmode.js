// assets
import SvgIconStyle from '../ui-component/SvgIconStyle';
import { FaHome } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
function Komodo_Express() {
    return (
        <SvgIconStyle
            src={`${process.env.PUBLIC_URL}/assets/icons/Komodo_Express.svg`}
            sx={{
                width: '20px',
                height: '20px'
            }}
        />
    );
}
// constant
const icons = { FaHome, FaShoppingCart, Komodo_Express };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const GuestMode = {
    id: 'guest',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/home',
            icon: icons.FaHome
        },

        {
            id: 'market-place',
            title: 'Marketplace',
            type: 'item',
            url: '/market-place',
            icon: icons.FaShoppingCart
        },

        {
            id: 'komodo-express',
            title: 'Komodo Express',
            type: 'item',
            url: '/komodo-express',
            icon: icons.Komodo_Express
        }
    ]
};

export default GuestMode;
