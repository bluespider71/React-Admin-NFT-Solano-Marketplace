// assets
import SvgIconStyle from '../ui-component/SvgIconStyle';

function Account() {
    return (
        <SvgIconStyle
            src={`${process.env.PUBLIC_URL}/assets/icons/Account.svg`}
            sx={{
                width: '20px',
                height: '20px'
            }}
        />
    );
}

function Inventory() {
    return (
        <SvgIconStyle
            src={`${process.env.PUBLIC_URL}/assets/icons/Inventory.svg`}
            sx={{
                width: '20px',
                height: '20px'
            }}
        />
    );
}

// constant
const icons = { Account, Inventory };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const SigninMode = {
    id: 'signin',
    type: 'group',
    children: [
        {
            id: 'account',
            title: 'Account',
            type: 'item',
            url: '/account',
            icon: icons.Account
        },

        {
            id: 'inventory',
            title: 'Inventory',
            type: 'item',
            url: '/inventory',
            icon: icons.Inventory
        }
    ]
};

export default SigninMode;
