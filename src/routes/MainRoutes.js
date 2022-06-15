import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// home routing
const HomeDefault = Loadable(lazy(() => import('views/home')));

// market place routing
const Account = Loadable(lazy(() => import('views/account')));

// market place routing
const Inventory = Loadable(lazy(() => import('views/inventory')));

// market place routing
const MarketPlace = Loadable(lazy(() => import('views/market-place')));

// komodo express routing
const KomodoExpress = Loadable(lazy(() => import('views/komodo-express')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomeDefault />
        },
        {
            path: '/home',
            element: <HomeDefault />
        },
        {
            path: '/market-place',
            element: <MarketPlace />
        },
        {
            path: '/komodo-express',
            element: <KomodoExpress />
        },
        {
            path: '/account',
            element: <Account />
        },
        {
            path: '/inventory',
            element: <Inventory />
        }
    ]
};

export default MainRoutes;
