import {FC, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Footer from '@app/components/Footer';
import Header from '@app/components/Header';

import LocalizedText from '@components/localize/LocalizedText';

const links = [
    {
        label: 'Terms and Conditions',
        path: '/about',
        value: 'terms',
    },
    {
        label: 'Privacy Policy',
        path: '/about',
        value: 'privacy',
    },
    {
        label: 'Cookies Policy',
        path: '/about',
        value: 'cookies',
    },
    {
        label: 'General terms and conditions for delivery sharing',
        path: '/about',
        value: 'general',
    },
    {
        label: 'Charges and Payment',
        path: '/about',
        value: 'charges',
    },
];
const linksMobile = [
    {
        label: 'Terms and Conditions',
        path: '/about-mobile',
        value: 'terms',
    },
    {
        label: 'Privacy Policy',
        path: '/about-mobile',
        value: 'privacy',
    },
    {
        label: 'Cookies Policy',
        path: '/about-mobile',
        value: 'cookies',
    },
    {
        label: 'General terms and conditions for delivery sharing',
        path: '/about-mobile',
        value: 'general',
    },
    {
        label: 'Charges and Payment',
        path: '/about-mobile',
        value: 'charges',
    },
];

const MainLayout: FC = () => {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

    const [activeTab, setActiveTab] = useState('Terms and Conditions');

    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-[100vh] bg-paleGray overflow-y-auto">
            <Header />
            <div className="w-[90%] min-[950px]:w-[80%] mx-auto my-10">
                <h1 className={`${isMobile ? 'text-[36px]' : 'text-[48px]'} text-textColor font-boldQuick`}>
                    <LocalizedText label={{id: 'terms', defaultMessage: 'Terms and Conditions'}} />
                </h1>
                <p className="text-default font-mainSans text-textColor mt-4">
                    <LocalizedText label={{id: 'lastUpdated', defaultMessage: 'Last updated'}} />: 06.04.2023
                </p>
                <div className="flex mt-10 gap-4 justify-between">
                    {isMobile ? (
                        <ul className="w-[100%]">
                            {linksMobile.map(l => {
                                return (
                                    <li
                                        onClick={() => {
                                            navigate(l.path);
                                            setActiveTab(l.label);
                                        }}
                                        className={` ${
                                            l.label === activeTab
                                                ? 'font-mainSans border-l-[2px] border-l-[#15C370] text-md bg-lightGreen text-logoGreen'
                                                : 'font-mainSans text-[#242136] text-md border-b-[1px] border-[#EAEBEB]'
                                        }  p-4 py-3 cursor-pointer hover:bg-lightGreen duration-200 hover:text-logoGreen hover:border-l-[2px] hover:border-l-[#15C370]`}
                                    >
                                        <LocalizedText label={{id: l.value, defaultMessage: l.label}} />
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <ul className="w-[15%] min-w-[155px]">
                            {links.map(l => {
                                return (
                                    <li
                                        onClick={() => setActiveTab(l.label)}
                                        key={l.label}
                                        className={` ${
                                            l.label === activeTab
                                                ? 'font-mainSans border-l-[2px] border-l-[#15C370] text-md bg-lightGreen text-logoGreen'
                                                : 'font-mainSans text-[#242136] text-md border-b-[1px] border-[#EAEBEB]'
                                        }  p-4 py-3 cursor-pointer hover:bg-lightGreen duration-200 hover:text-logoGreen hover:border-l-[2px] hover:border-l-[#15C370]`}
                                    >
                                        <LocalizedText label={{id: l.value, defaultMessage: l.label}} />
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <div className={`${isMobile ? 'w-0 hidden' : 'w-[80%]'}`}>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
