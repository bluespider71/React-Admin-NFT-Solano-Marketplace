import { useState } from 'react';
import { Grid, Typography, Box, Button, Slider } from '@mui/material';

import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

import SvgIconStyle from '../../ui-component/SvgIconStyle';

const marks = [
    {
        value: 0,
        label: 'Any'
    },
    {
        value: 1,
        label: '0'
    },
    {
        value: 2,
        label: '1'
    },
    {
        value: 3,
        label: '2'
    },
    {
        value: 4,
        label: '3'
    }
];

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex'
});

const Komodos = (props) => {
    const classButtons = ['Lizard', 'Chameleon', 'Komodo', 'Dragon'];
    const elementsButtons = ['Fire', 'Water', 'Earth', 'Wind', 'Dark', 'Light'];
    const [startday, setStartDay] = useState(0);
    const [endday, setEndDay] = useState(30);

    const { items } = usePagination({
        count: 4
    });

    return (
        <Grid container direction={'row'} flexWrap="nowrap">
            <Grid
                item
                sx={{
                    width: '20%',
                    borderRight: '1px solid #CBCBCB',
                    p: '12px'
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '22px',
                        color: '#FFFFFF',
                        ml: '4px',
                        mt: '4px'
                    }}
                >
                    Filter
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        mt: '12px',
                        ml: '4px',
                        color: '#FFFFFF'
                    }}
                >
                    Class
                </Typography>

                <Box
                    sx={{
                        pt: '4px',
                        pl: '4px',
                        pr: '4px'
                    }}
                >
                    <Grid container spacing={'6px'}>
                        {classButtons.map((item, i) => (
                            <Grid item md={6} key={i}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: '12px',
                                        lineHeight: '15px',
                                        textAlign: 'center',
                                        color: '#FFFFFF',
                                        py: '5px',
                                        width: '100%',
                                        borderRadius: '10px',
                                        textTransform: 'initial',
                                        bgcolor: '#757575',
                                        '&:hover': {
                                            background: 'linear-gradient(180deg, #00E309 0%, #007E05 100%)'
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Typography
                    variant="body1"
                    sx={{
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        mt: '12px',
                        ml: '4px',
                        color: '#FFFFFF'
                    }}
                >
                    Element
                </Typography>

                <Box
                    sx={{
                        pt: '4px',
                        pl: '16px',
                        pr: '4px'
                    }}
                >
                    <Grid container spacing={1.5}>
                        {elementsButtons.map((item, i) => (
                            <Grid item md={6} key={i}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        fontSize: '12px',
                                        lineHeight: '15px',
                                        textAlign: 'center',
                                        color: '#FFFFFF',
                                        py: '5px',
                                        width: '100%',
                                        borderRadius: '10px',
                                        textTransform: 'initial',
                                        bgcolor: '#757575',
                                        '&:hover': {
                                            background: 'linear-gradient(180deg, #00E309 0%, #007E05 100%)'
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Typography
                    variant="body1"
                    sx={{
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        mt: '24px',
                        ml: '8px',
                        color: '#FFFFFF'
                    }}
                >
                    Breed Count
                </Typography>

                <Box sx={{ pl: '8px', pr: '20px' }}>
                    <Box sx={{ width: '100%', ml: '8px' }}>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={0}
                            marks={marks}
                            min={0}
                            step={1}
                            max={4}
                            sx={{
                                height: '4px',
                                '& .MuiSlider-track': {
                                    border: 'none',
                                    bgcolor: '#00E309',
                                    color: '#00E309'
                                },
                                '& .MuiSlider-thumb': {
                                    height: 15,
                                    width: 15,
                                    bgcolor: '#00E309',
                                    color: '#00E309'
                                },
                                '& .MuiSlider-rail': {
                                    backgroundColor: '#757575',
                                    opacity: 1
                                },
                                '& .MuiSlider-mark': {
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: '#757575'
                                },
                                '& .MuiSlider-markActive': {
                                    backgroundColor: '#00E309'
                                },
                                '& .MuiSlider-markLabel': {
                                    color: '#FFFFFF'
                                }
                            }}
                        />
                    </Box>
                </Box>

                <Typography
                    variant="body1"
                    sx={{
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        mt: '19px',
                        ml: '8px',
                        color: '#FFFFFF'
                    }}
                >
                    Cooldown Timer
                </Typography>
                <Box>
                    <input
                        type="text"
                        value={startday}
                        onChange={(e) => {
                            setStartDay(e.target.value);
                        }}
                        style={{
                            marginTop: '10px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '17px',
                            color: '#000000',
                            width: '41px',
                            height: '22px',
                            background: '#D9D9D9',
                            textAlign: 'right',
                            marginLeft: '8px',
                            outline: 'none',
                            borderWidth: 1,
                            marginRight: '6px'
                        }}
                    ></input>
                    <span style={{ color: '#AAAAAA' }}>days</span>
                    <span style={{ color: '#fff', marginLeft: '14px', marginRight: '17px' }}>-</span>
                    <input
                        type="text"
                        value={endday}
                        onChange={(e) => {
                            setEndDay(e.target.value);
                        }}
                        style={{
                            mt: '10px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '17px',
                            color: '#000000',
                            width: '41px',
                            height: '22px',
                            background: '#D9D9D9',
                            textAlign: 'right',
                            outline: 'none',
                            borderWidth: 1,
                            marginRight: '6px'
                        }}
                    ></input>
                    <span style={{ color: '#AAAAAA' }}>days</span>
                </Box>

                <Button
                    sx={{
                        width: '100%',
                        mt: '23px',
                        fontStyle: 'normal',
                        fontSize: '14px',
                        lineHeight: '16px',
                        borderRadius: '26px',
                        background: ' linear-gradient(180deg, #007E05 0%, rgba(64, 193, 69, 0) 100%)',
                        fontWeight: 700,
                        color: '#fff',
                        mb: '4px'
                    }}
                >
                    Apply Filter
                </Button>

                <Button
                    sx={{
                        width: '100%',
                        fontStyle: 'normal',
                        fontSize: '14px',
                        lineHeight: '16px',
                        borderRadius: '26px',
                        background: ' transparent',
                        fontWeight: 700,
                        color: '#11D000',
                        border: '3px solid #11D000'
                    }}
                >
                    Reset Filter
                </Button>
            </Grid>
            <Grid
                item
                sx={{
                    width: '80%',
                    ml: '33px',
                    mt: '20px',
                    mr: '35px'
                }}
            >
                <Grid container justifyContent={'space-between'}>
                    <Grid>
                        <Typography
                            variant="body1"
                            sx={{
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '24px',
                                lineHeight: '29px',
                                color: '#FFFFFF'
                            }}
                        >
                            2,438 NFTs
                        </Typography>
                    </Grid>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 3
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '17px',
                                color: '#FFFFFF',
                                mr: 2
                            }}
                        >
                            Sort by
                        </Typography>

                        <Button
                            endIcon={
                                <SvgIconStyle
                                    src={'/icons/sort.svg'}
                                    sx={{
                                        width: '16px',
                                        height: '16px'
                                    }}
                                />
                            }
                            sx={{
                                width: '100%',
                                fontStyle: 'normal',
                                fontSize: '14px',
                                lineHeight: '17px',
                                background: ' transparent',
                                fontWeight: 400,
                                color: '#fff',
                                border: '3px solid #fff',
                                width: '246px',
                                height: '33px',
                                textTransform: 'initial',
                                textAlign: 'left',
                                pl: '15px',
                                pr: 3,
                                justifyContent: 'space-between'
                            }}
                        >
                            Price: High to Low
                        </Button>
                    </Box>

                    <Grid container columnSpacing={'24px'} rowSpacing={'16px'}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, i) => (
                            <Grid item xs={3} key={i}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        px: '12px',
                                        py: '14px',
                                        bgcolor: '#414141',
                                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                                        cursor: 'pointer'
                                    }}
                                    onClick={props.setKomodoDetail}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            fontSize: '14px',
                                            lineHeight: '17px',
                                            color: '#FFFFFF',
                                            mb: '10px'
                                        }}
                                    >
                                        Komoverse #9950
                                    </Typography>
                                    <img
                                        src={'/assets/images/items/9950 1.png'}
                                        alt={'9950 1'}
                                        style={{
                                            width: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            fontSize: '12px',
                                            lineHeight: '15px',
                                            color: '#FFFFFF',
                                            mt: '9.05px',
                                            mb: '4px'
                                        }}
                                    >
                                        Breed Count: 0
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <img
                                                src={'/assets/images/solana-logo-free.png'}
                                                alt="solana-logo-free"
                                                width="17px"
                                                height="17px"
                                            />
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: 700,
                                                    fontSize: '12px',
                                                    ml: '6.5px',
                                                    display: 'flex',
                                                    lineHeight: '15px',
                                                    color: '#FFFFFF'
                                                }}
                                            >
                                                4.54822 SOL
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontStyle: 'normal',
                                                    fontWeight: 700,
                                                    fontSize: '12px',
                                                    lineHeight: '15px',
                                                    color: '#AAAAAA'
                                                }}
                                            >
                                                $179.06
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Box
                        sx={{
                            mt: '16px',
                            mb: '24px',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <nav>
                            <List>
                                {items.map(({ page, type, selected, ...item }, index) => {
                                    let children = null;

                                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                                        children = '…';
                                    } else if (type === 'page') {
                                        children = (
                                            <button
                                                type="button"
                                                style={{
                                                    fontWeight: selected ? 900 : 700,
                                                    fontSize: '14px',
                                                    lineHeight: '17px',
                                                    color: '#FFFFFF',
                                                    border: '1px solid #FFFFFF',
                                                    backgroundColor: 'transparent',
                                                    width: '41px',
                                                    height: '41px'
                                                }}
                                                {...item}
                                            >
                                                {page}
                                            </button>
                                        );
                                    } else {
                                        children = (
                                            <button
                                                type="button"
                                                style={{
                                                    fontWeight: selected ? 900 : 700,
                                                    fontSize: '14px',
                                                    lineHeight: '17px',
                                                    color: '#FFFFFF',
                                                    border: '1px solid #FFFFFF',
                                                    backgroundColor: 'transparent',
                                                    width: '110px',
                                                    height: '41px'
                                                }}
                                                {...item}
                                            >
                                                {type}
                                            </button>
                                        );
                                    }

                                    return <li key={index}>{children}</li>;
                                })}
                            </List>
                        </nav>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Komodos;
