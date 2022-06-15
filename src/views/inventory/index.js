// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';
import MuiTab from '@mui/material/Tab';

// ** Icons Imports
import SvgIconStyle from '../../ui-component/SvgIconStyle';

import Komodos from './Komodos';
import ItemDetail from './ItemDetail';

// ** Third Party Styles Imports

const Tab = styled(MuiTab)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        minWidth: 100
    },
    [theme.breakpoints.down('sm')]: {
        minWidth: 67
    }
}));

function InventoryIcon() {
    return (
        <SvgIconStyle
            src={`${process.env.PUBLIC_URL}assets/icons/Inventory.svg`}
            sx={{
                width: '39px',
                height: '28px',
                color: '#039700'
            }}
        />
    );
}

const TabName = styled('span')(({ theme }) => ({
    lineHeight: 1.71,
    fontSize: '0.875rem',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Inventory = () => {
    // ** State
    const [marketplaceTabItemValue, setMarketplaceTabItemValue] = useState('1');

    const [inventoryDetail, setInventoryDetail] = useState(false);

    const handleChangeMarketplaceTabItemValue = (event, newValue) => {
        setMarketplaceTabItemValue(newValue);
    };

    const tabNames = ['Komodos', 'Items', 'Gacha Heroes', 'Land'];

    return (
        <Box
            sx={{
                pt: '35px',
                mb: '50px'
            }}
        >
            <Box
                sx={{
                    ml: '24px'
                }}
            >
                <Box
                    sx={{
                        lineHeight: '26px',
                        verticalAlign: 'middle',
                        display: 'inline-block',
                        marginRight: '11px'
                    }}
                >
                    <InventoryIcon />
                </Box>

                <Box
                    sx={{
                        display: 'inline-block'
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontStyle: 'normal',
                            fontWeight: 800,
                            fontSize: '24px',
                            lineHeight: '29px',
                            color: '#FFFFFF'
                        }}
                    >
                        Inventory
                    </Typography>
                </Box>
            </Box>
            <TabContext value={marketplaceTabItemValue}>
                <TabList
                    onChange={handleChangeMarketplaceTabItemValue}
                    aria-label="account-settings tabs"
                    sx={{
                        borderBottom: (theme) => `1px solid #CBCBCB`,
                        mt: '16px',
                        ' > .MuiTabs-fixed': {
                            ml: '24px'
                        },
                        'span.MuiTabs-indicator': {
                            height: '5px',
                            bgcolor: '#039700'
                        }
                    }}
                >
                    {tabNames.map((name, i) => {
                        return (
                            <Tab
                                value={(i + 1).toString()}
                                key={i}
                                sx={{
                                    py: '14px',
                                    px: '19px'
                                }}
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src={'/assets/images/marketplace-tab-icon.png'}
                                            alt="marketplace-tab-icon"
                                            width={24}
                                            height={24}
                                        />
                                        <TabName
                                            sx={{
                                                marginLeft: '7px',
                                                textTransform: 'initial',
                                                color: marketplaceTabItemValue == i + 1 ? '#fff' : '#777777'
                                            }}
                                        >
                                            {name}
                                        </TabName>
                                    </Box>
                                }
                            />
                        );
                    })}
                </TabList>

                <TabPanel sx={{ p: 0 }} value="1">
                    {!inventoryDetail ? (
                        <Komodos
                            setInventoryDetail={() => {
                                setInventoryDetail(true);
                            }}
                        ></Komodos>
                    ) : (
                        <ItemDetail
                            setInventoryDetail={() => {
                                setInventoryDetail(false);
                            }}
                        />
                    )}
                </TabPanel>
                <TabPanel sx={{ p: 0 }} value="2"></TabPanel>
                <TabPanel sx={{ p: 0 }} value="3"></TabPanel>
                <TabPanel sx={{ p: 0 }} value="4"></TabPanel>
            </TabContext>
        </Box>
    );
};

export default Inventory;
