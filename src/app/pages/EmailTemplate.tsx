import {FC, useState} from 'react';
import {IoIosInformationCircleOutline} from 'react-icons/io';
import {IoCheckmarkCircleOutline} from 'react-icons/io5';
import {Button, createTheme, ThemeProvider} from '@mui/material';

import facebook from '../../common/assets/facebook.png';
import instagram from '../../common/assets/instagram.png';
import logo from '../../common/assets/logo.png';
import telegram from '../../common/assets/telegram.png';
import twitter from '../../common/assets/twitter.png';

const EmailTemplate: FC = () => {
    const [steps, setSteps] = useState({
        isInitial: true,
        isConfirmed: false,
        isGetStarted: false,
        isPending: false,
        isPaymentComplete: false,
    });

    const button = createTheme({
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'contained',
                    disableElevation: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontFamily: 'OpenReg',
                    },
                },
            },
        },
    });

    return (
        <div className="bg-emailBg h-[100vh] w-[100%]">
            <div className="max-w-[600px]  h-[100%] mx-auto">
                <header className="w-[100%] py-8 px-4">
                    <div className="w-[150px] h-[44px]">
                        <img src={logo} alt="logo" className="w-[100%] h-[100%] object-cover" />
                    </div>
                </header>
                <div className="font-boldQuick text-white text-lg2 flex items-center gap-[6px] py-[38px] px-8">
                    {!steps.isInitial && !steps.isPending ? (
                        <IoCheckmarkCircleOutline size={44} color="#15C370" />
                    ) : (
                        <IoIosInformationCircleOutline size={44} />
                    )}
                    {steps.isInitial && 'Confirm your email please'}
                    {steps.isConfirmed && 'Verification completed'}
                    {steps.isGetStarted && 'Customers write to you'}
                    {steps.isPending && 'Pending payment'}
                    {steps.isPaymentComplete && 'Payment completed'}
                </div>
                <div className="w-[90%] h-[1px] bg-[#CCCCCC] mx-auto"></div>
                <div className="px-8 py-12">
                    <div className="text-lg2 text-white font-boldQuick">
                        {steps.isInitial && 'Well done, you have registered on the site. Thank you for being with us'}
                        {steps.isConfirmed && 'Your profile status has been updated'}
                        {steps.isGetStarted && 'Your offer status has been updated'}
                        {steps.isPending && 'Your deal status has been updated'}
                        {steps.isPaymentComplete && 'Your deal status has been updated'}
                    </div>
                    <p className="text-default text-white font-main mt-2">
                        {steps.isInitial && 'Registration has been completed, now you need to confirm your email'}
                        {steps.isConfirmed && 'Verification has been completed, now you can transport and send parcels'}
                        {steps.isGetStarted && 'The first customer wants to make a deal with you, come in and have a look'}
                        {steps.isPending && 'You made the deal, please pay for parcel transportation'}
                        {steps.isPaymentComplete && 'Payment completed, you can take a receipt for payment'}
                    </p>
                    <ThemeProvider theme={button}>
                        <Button
                            onClick={() => {
                                if (steps.isConfirmed) {
                                    setSteps({
                                        ...steps,
                                        isGetStarted: true,
                                        isConfirmed: false,
                                    });
                                    return;
                                } else if (steps.isGetStarted) {
                                    setSteps({
                                        ...steps,
                                        isGetStarted: false,
                                        isConfirmed: false,
                                        isPending: true,
                                    });
                                    return;
                                } else if (steps.isPending) {
                                    setSteps({
                                        ...steps,
                                        isGetStarted: false,
                                        isConfirmed: false,
                                        isPending: false,
                                        isPaymentComplete: true,
                                    });
                                    return;
                                }
                                setSteps({
                                    ...steps,
                                    isInitial: false,
                                    isConfirmed: true,
                                });
                            }}
                            sx={{
                                bgcolor: '#15C370',
                                color: '#fff',
                                alignSelf: 'flex-end',
                                fontFamily: 'QuicksandBold',
                                marginTop: '20px',
                                '&:hover': {
                                    bgcolor: '#15C370',
                                    opacity: 0.8,
                                },
                            }}
                        >
                            {steps.isInitial && 'Confirm email'}
                            {steps.isConfirmed && 'Let’s get started'}
                            {steps.isGetStarted && 'Go to my offer'}
                            {steps.isPending && 'Pay now'}
                            {steps.isPaymentComplete && 'Take the receipt'}
                        </Button>
                    </ThemeProvider>
                </div>
                <p className="my-10 text-white px-8 font-mainQuick text-default">
                    Unite with us, order, travel and transport, <br />
                    The Eelow team
                </p>
                <div className="w-[90%] h-[1px] bg-[#CCCCCC] mx-auto my-4"></div>
                <ul className="flex items-center gap-2 justify-center py-4">
                    <li className="text-white underline text-[13px] font-boldQuick cursor-pointer hover:opacity-85 duration-100">
                        Profile
                    </li>
                    <li className="text-white underline text-[13px] font-boldQuick cursor-pointer hover:opacity-85 duration-100">
                        Download App
                    </li>
                    <li className="text-white underline text-[13px] font-boldQuick cursor-pointer hover:opacity-85 duration-100">
                        Support
                    </li>
                </ul>
                <div className="w-[90%] h-[1px] bg-[#CCCCCC] mx-auto my-4"></div>
                <footer className="w-[100%] px-4 py-[27.5px] flex justify-between items-end">
                    <div>
                        <div className="w-[120px] h-[35px]">
                            <img src={logo} alt="eelow" className="w-[100%] h-[100%] object-cover" />
                        </div>
                        <p className="font-mainSans text-white text-default mt-4">We need each other</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-[24px] h-[24px] cursor-pointer hover:scale-110 duration-150">
                            <img className="w-[100%] object-cover h-[100%]" src={facebook} alt="facebook" />
                        </div>
                        <div className="w-[24px] h-[24px] cursor-pointer hover:scale-110 duration-150">
                            <img className="w-[100%] object-cover h-[100%]" src={twitter} alt="twitter" />
                        </div>
                        <div className="w-[24px] h-[24px] cursor-pointer hover:scale-110 duration-150">
                            <img className="w-[100%] object-cover h-[100%]" src={instagram} alt="instagram" />
                        </div>
                        <div className="w-[24px] h-[24px] cursor-pointer hover:scale-110 duration-150">
                            <img className="w-[100%] object-cover h-[100%]" src={telegram} alt="telegram" />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default EmailTemplate;
