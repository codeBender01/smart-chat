import {FC} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {useMediaQuery} from 'react-responsive';

import Header from '@app/components/Header';

import {Outlet} from 'react-router-dom';

const links = [
    {
        label: 'Password',
        path: '/settings/password',
    },
    {
        label: 'Currency',
        path: '/settings/currency',
    },
    {
        label: 'Language',
        path: '/settings/language',
    },
    {
        label: 'Payments',
        path: '/settings/payments',
    },
    {
        label: 'Account',
        path: '/settings/account',
    },
];

const linksMobile = [
    {
        label: 'Password',
        path: '/settings-mob/password',
    },
    {
        label: 'Currency',
        path: '/settings-mob/currency',
    },
    {
        label: 'Language',
        path: '/settings-mob/language',
    },
    {
        label: 'Payments',
        path: '/settings-mob/payments',
    },
    {
        label: 'Account',
        path: '/settings-mob/account',
    },
];

const SettingsLayout: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isMobile = useMediaQuery({query: '(max-width: 620px)'});

    return (
        <div className="flex flex-col">
            <Header />
            <div className="bg-paleGray min-h-[90vh]">
                <div className="w-[95%] mx-auto mt-20 min-[620px]:w-[55%] breakpoint:w-[60%]  min-[1024px]:w-[63%]">
                    <h1 className="text-[48px] text-textColor font-boldQuick mb-4">Settings</h1>
                </div>
                <div className="flex gap-6 w-[95%] mx-auto">
                    {isMobile ? (
                        <ul className="w-[100%]">
                            {linksMobile.map(l => {
                                return (
                                    <li
                                        onClick={() => {
                                            navigate(l.path);
                                        }}
                                        key={l.label}
                                        className={` ${
                                            location.pathname.includes(l.path)
                                                ? 'font-mainSans border-l-[2px] border-l-[#15C370] text-md bg-lightGreen text-logoGreen'
                                                : 'font-mainSans text-[#242136] text-md border-b-[1px] border-[#EAEBEB]'
                                        }  px-4 py-3 cursor-pointer hover:bg-lightGreen duration-200 hover:text-logoGreen hover:border-l-[2px] hover:border-l-[#15C370]`}
                                    >
                                        {l.label}
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <ul className="w-[15%] min-w-[155px]">
                            {links.map(l => {
                                return (
                                    <li
                                        onClick={() => {
                                            navigate(l.path);
                                        }}
                                        key={l.label}
                                        className={` ${
                                            location.pathname.includes(l.path)
                                                ? 'font-mainSans border-l-[2px] border-l-[#15C370] text-md bg-lightGreen text-logoGreen'
                                                : 'font-mainSans text-[#242136] text-md border-b-[1px] border-[#EAEBEB]'
                                        }  px-4 py-3 cursor-pointer hover:bg-lightGreen duration-200 hover:text-logoGreen hover:border-l-[2px] hover:border-l-[#15C370]`}
                                    >
                                        {l.label}
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
        </div>
    );
};

export default SettingsLayout;
