import {FC, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Box, Button, Tab, Tabs} from '@mui/material';
import {Typography} from '@mui/material';

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

    return (
        <div className="w-[100%]">
            <div className="mt-8 md:hidden block">
                <Typography variant="h2">
                    <LocalizedText label={{id: 'payments', defaultMessage: 'Payments'}} />
                </Typography>
            </div>
            <p className="text-lineGray mb-8 max-w-[360px]">
                <Typography variant="body1">
                    <LocalizedText label={{id: 'manage', defaultMessage: 'You can manage your payments and payouts'}} />
                </Typography>
            </p>
            <Box
                sx={{
                    marginTop: 2,
                }}
            >
                <Tabs
                    sx={{
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
                    }}
                    value={tabIndex}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab
                        sx={{
                            color: '#838383',
                            paddingInline: '48px',
                            textTransform: 'none',
                            fontFamily: 'OpenReg',
                            width: isMobile ? '50%' : 'initial',
                            fontSize: '14px',

                            '&.Mui-selected': {
                                color: '#242136',
                            },
                        }}
                        disableRipple
                        label={<LocalizedText label={{id: 'payments', defaultMessage: 'Payments'}} />}
                        {...a11yProps(0)}
                    />
                    <Tab
                        disableRipple
                        sx={{
                            color: '#838383',
                            paddingInline: '48px',
                            textTransform: 'none',
                            fontFamily: 'OpenReg',
                            width: isMobile ? '50%' : 'initial',
                            fontSize: '14px',
                            '&.Mui-selected': {
                                color: '#242136',
                            },
                        }}
                        label={<LocalizedText label={{id: 'payouts', defaultMessage: 'Payouts'}} />}
                        {...a11yProps(1)}
                    />
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
                        disableElevation
                        disableRipple
                        variant="contained"
                        sx={{
                            bgcolor: '#15C370',
                            color: '#fff',
                            alignSelf: 'flex-end',
                            marginTop: 3,
                            borderRadius: '20px',
                            padding: '10px, 16px',
                            textTransform: 'none',
                            fontFamily: 'OpenReg',
                            '&:hover': {
                                bgcolor: '#15C370',
                                opacity: 0.8,
                            },
                        }}
                    >
                        <Typography variant="button">
                            <LocalizedText label={{id: 'managePayments', defaultMessage: 'Manage payments'}} />
                        </Typography>
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
                        disableElevation
                        disableRipple
                        variant="contained"
                        sx={{
                            bgcolor: '#15C370',
                            color: '#fff',
                            alignSelf: 'flex-end',
                            marginTop: 3,
                            borderRadius: '20px',
                            padding: '10px, 16px',
                            textTransform: 'none',
                            fontFamily: 'OpenReg',
                            '&:hover': {
                                bgcolor: '#15C370',
                                opacity: 0.8,
                            },
                        }}
                    >
                        <Typography variant="button">
                            <LocalizedText label={{id: 'addPaymentBtn', defaultMessage: 'Add payment method'}} />
                        </Typography>
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
                        disableElevation
                        disableRipple
                        variant="contained"
                        sx={{
                            bgcolor: '#15C370',
                            color: '#fff',
                            alignSelf: 'flex-end',
                            marginTop: 3,
                            borderRadius: '20px',
                            padding: '10px, 16px',
                            textTransform: 'none',
                            fontFamily: 'OpenReg',
                            '&:hover': {
                                bgcolor: '#15C370',
                                opacity: 0.8,
                            },
                        }}
                    >
                        <Typography variant="button">
                            <LocalizedText label={{id: 'addPayoutBtn', defaultMessage: 'Add payout method'}} />
                        </Typography>
                    </Button>
                </div>
            </CustomTabPanel>
        </div>
    );
};

export default Payments;
