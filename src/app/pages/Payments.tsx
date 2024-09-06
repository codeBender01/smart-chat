import {FC, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Box, Button, Tab, Tabs} from '@mui/material';
import {Typography} from '@mui/material';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';
import CustomButton from '@components/Button';

import LocalizedText from '@components/localize/LocalizedText';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        width: '100%',
    },
    headerText: {
        marginTop: theme.spacing(2),
        display: 'block',
        [theme.breakpoints.up(620)]: {
            display: 'none',
        },
    },
    descriptionText: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(2),
        maxWidth: '360px',
    },
    tabPanelContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up(620)]: {
            width: '30%',
        },
        minWidth: '360px',
    },
    tabPanelContainerWide: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up(620)]: {
            width: '40%',
        },
        minWidth: '360px',
        marginTop: theme.spacing(3),
    },
    sectionTitle: {
        fontSize: '1rem',
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: 700,
        color: theme.custom.palette.newColors.sectionTitle,
    },
    sectionDescription: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '1rem',
        color: theme.palette.text.secondary,
    },
    button: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: `${theme.palette.primary.contrastText} !important`,
        alignSelf: 'flex-end',
        marginTop: theme.spacing(3),
        borderRadius: '20px',
        padding: theme.spacing(1, 2),
        textTransform: 'none',
        fontFamily: 'Open Sans, sans-serif',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.8,
        },
    },
}));

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

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.headerText}>
                <Typography variant="h2">
                    <LocalizedText label={{id: 'payments'}} />
                </Typography>
            </div>
            <p className={classes.descriptionText}>
                <Typography variant="body1">
                    <LocalizedText label={{id: 'manage'}} />
                </Typography>
            </p>
            <Box sx={{marginTop: 2}}>
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
                            fontFamily: 'Open Sans, sans-serif',
                            width: isMobile ? '50%' : 'initial',
                            fontSize: '14px',
                            '&.Mui-selected': {
                                color: '#242136',
                            },
                        }}
                        disableRipple
                        label={<LocalizedText label={{id: 'payments'}} />}
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{
                            color: '#838383',
                            paddingInline: '48px',
                            textTransform: 'none',
                            fontFamily: 'Open Sans, sans-serif',
                            width: isMobile ? '50%' : 'initial',
                            fontSize: '14px',
                            '&.Mui-selected': {
                                color: '#242136',
                            },
                        }}
                        disableRipple
                        label={<LocalizedText label={{id: 'payouts'}} />}
                        {...a11yProps(1)}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={tabIndex} index={0}>
                <div className={classes.tabPanelContainer}>
                    <div className={classes.sectionTitle}>
                        <LocalizedText label={{id: 'yourPayments'}} />
                    </div>
                    <p className={classes.sectionDescription}>
                        <LocalizedText label={{id: 'seeAllPayments'}} />
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
                            <LocalizedText label={{id: 'managePayments'}} />
                        </Typography>
                    </Button>
                </div>
                <div className={`${classes.tabPanelContainer} mt-6`}>
                    <div className={classes.sectionTitle}>
                        <LocalizedText label={{id: 'paymentsMethod'}} />
                    </div>
                    <p className={classes.sectionDescription}>
                        <LocalizedText label={{id: 'addPayment'}} />
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
                            <LocalizedText label={{id: 'addPaymentBtn'}} />
                        </Typography>
                    </Button>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={tabIndex} index={1}>
                <div className={classes.tabPanelContainerWide}>
                    <div className={classes.sectionTitle}>
                        <LocalizedText label={{id: 'howReceivePayments'}} />
                    </div>
                    <p className={classes.sectionDescription}>
                        <LocalizedText label={{id: 'addPayoutMethod'}} />
                    </p>

                    <div className="self-end">
                        <CustomButton closeModal={() => {}} width="auto" bgcolor="#15C370" color="#fff" borderColor="transparent">
                            <LocalizedText label={{id: 'save'}} />
                        </CustomButton>
                    </div>
                </div>
            </CustomTabPanel>
        </div>
    );
};

export default Payments;
