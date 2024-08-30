import {FC, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Box, Button, createTheme, Tab, Tabs, ThemeProvider} from '@mui/material';
import LocalizedText from '@components/localize/LocalizedText';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <Box sx={{paddingY: 2}}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Payments: FC = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    const tabsTheme = createTheme({
        components: {
            MuiTabs: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#fff',
                        marginTop: 2,
                        gap: '10px',
                        '& .MuiTabs-indicator.css-1aquho2-MuiTabs-indicator': {
                            backgroundColor: '#242136',
                            borderRadius: '10px',
                        },

                        '& .MuiTabs-indicator': {
                            borderRadius: '10px',
                            height: '2px',
                        },
                    },
                },
                defaultProps: {},
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        color: '#838383',
                        paddingInline: '48px',
                        textTransform: 'none',
                        fontFamily: 'OpenReg',
                        width: isMobile ? '50%' : 'initial',
                        '&.Mui-selected': {
                            color: '#242136',
                        },
                    },
                },
            },

            MuiButton: {
                defaultProps: {
                    variant: 'contained',
                    disableElevation: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        padding: '10px, 16px',
                        textTransform: 'none',
                        fontFamily: 'OpenReg',
                    },
                },
            },
        },
    });

    return (
        <div className="w-[100%]">
            <div className="mt-8 md:hidden block text-xl text-textColor font-boldQuick">
                <LocalizedText label={{id: 'payments', defaultMessage: 'Payments'}} />
            </div>
            <p className="text-lineGray font-mainSans mb-8 text-default max-w-[360px]">
                <LocalizedText label={{id: 'manage', defaultMessage: 'You can manage your payments and payouts'}} />
            </p>
            <ThemeProvider theme={tabsTheme}>
                <Box
                    sx={{
                        marginTop: 2,
                    }}
                >
                    <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs example">
                        <Tab
                            disableRipple
                            label={<LocalizedText label={{id: 'payments', defaultMessage: 'Payments'}} />}
                            {...a11yProps(0)}
                        />
                        <Tab disableRipple label={<LocalizedText label={{id: 'payouts', defaultMessage: 'Payouts'}} />} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={tabIndex} index={0}>
                    <div className="flex flex-col gap-4 w-[100%] md:w-[30%] min-w-[360px]">
                        <div className="text-md font-boldQuick text-[#242136]">
                            <LocalizedText label={{id: 'yourPayments', defaultMessage: 'Your payments'}} />
                        </div>
                        <p className="font-mainSans text-default text-lineGray">
                            <LocalizedText label={{id: 'seeAllPayments', defaultMessage: 'See all your payments and refunds'}} />
                        </p>
                        <Button
                            sx={{
                                bgcolor: '#15C370',
                                color: '#fff',
                                alignSelf: 'flex-end',
                                marginTop: 3,
                                '&:hover': {
                                    bgcolor: '#15C370',
                                    opacity: 0.8,
                                },
                            }}
                        >
                            <LocalizedText label={{id: 'managePayments', defaultMessage: 'Manage payments'}} />
                        </Button>
                    </div>

                    <div className="flex flex-col gap-4 w-[100%] md:w-[30%] min-w-[360px] mt-6">
                        <div className="text-md font-boldQuick text-[#242136]">
                            <LocalizedText label={{id: 'paymentsMethod', defaultMessage: 'Payments methods'}} />
                        </div>
                        <p className="font-mainSans text-default text-lineGray">
                            <LocalizedText label={{id: 'addPayment', defaultMessage: ' Add and manage your payment methods'}} />
                        </p>
                        <Button
                            sx={{
                                bgcolor: '#15C370',
                                color: '#fff',
                                alignSelf: 'flex-end',
                                marginTop: 3,
                                '&:hover': {
                                    bgcolor: '#15C370',
                                    opacity: 0.8,
                                },
                            }}
                        >
                            <LocalizedText label={{id: 'addPaymentBtn', defaultMessage: 'Add payment method'}} />
                        </Button>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={tabIndex} index={1}>
                    <div className="flex flex-col gap-4 w-[100%] md:w-[40%] mt-6">
                        <div className="text-md font-boldQuick text-[#242136]">
                            <LocalizedText label={{id: 'howReceivePayments', defaultMessage: 'How can you receive your payouts'}} />
                        </div>
                        <p className="font-mainSans text-default text-lineGray">
                            <LocalizedText
                                label={{id: 'addPayoutMethod', defaultMessage: 'Add payout method so we know where to send your money'}}
                            />
                        </p>
                        <Button
                            sx={{
                                bgcolor: '#15C370',
                                color: '#fff',
                                alignSelf: 'flex-end',
                                marginTop: 3,
                                '&:hover': {
                                    bgcolor: '#15C370',
                                    opacity: 0.8,
                                },
                            }}
                        >
                            <LocalizedText label={{id: 'addPayoutBtn', defaultMessage: 'Add payout method'}} />
                        </Button>
                    </div>
                </CustomTabPanel>
            </ThemeProvider>
        </div>
    );
};

export default Payments;
