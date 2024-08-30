import React, {FC} from 'react';
import {IoIosInformationCircleOutline} from 'react-icons/io';
import {IoMoon} from 'react-icons/io5';
import {MdOutlineMenu} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import {Avatar, Badge} from '@mui/material';

import Typography from '@mui/material/Typography';

import LocalizedText from '@components/localize/LocalizedText';

import logo from '../../common/assets/logo.png';
import profileImage from '../../common/assets/profileImage.jpeg';

const Header: FC = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-white w-[100%] border-b-[1px] border-borderGray border-solid py-6">
            <div className="flex items-center w-[90%] mx-auto justify-between min-[768px]:w-[80%]">
                <div className="flex items-center gap-[85px]">
                    <div onClick={() => navigate('/chat-view')} className="w-[120px] cursor-pointer mb-3">
                        <img className="w-[100%] " src={logo} alt="Eelow" />
                    </div>

                    <ul className="hidden items-center  gap-12 cursor-pointer max-[1024px]:text-sm min-[768px]:flex">
                        <li className="hover:opacity-80 duration-150" onClick={() => navigate('/settings/password')}>
                            <Typography variant="body2">
                                <LocalizedText label={{id: 'headerSettings', defaultMessage: 'Settings'}} />
                            </Typography>
                        </li>
                        <li className="hover:opacity-80 duration-150" onClick={() => navigate('/about')}>
                            <Typography variant="body2">
                                <LocalizedText label={{id: 'headerHowItWorks', defaultMessage: 'How it works'}} />
                            </Typography>
                        </li>
                    </ul>
                </div>

                <div className="min-[768px]:flex hidden items-center">
                    <div className="hidden text-alertRed  items-center gap-2 min-[950px]:flex mr-[32px]">
                        <IoIosInformationCircleOutline size={22} />
                        <Typography variant="h5" color={'#E2542C'}>
                            <LocalizedText label={{id: 'dealHasBeenUpdated', defaultMessage: 'Your deal status has been updated'}} />
                        </Typography>
                    </div>
                    <div className="border-[1px] mr-[12px] w-[44px] h-[44px] rounded-round border-blackMain flex items-center justify-center hover:bg-blackMain hover:text-white duration-200 cursor-pointer">
                        <IoMoon size={24} />
                    </div>

                    <Badge
                        overlap="circular"
                        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                        badgeContent={
                            <div className="bg-alertRed text-white text-[10px] rounded-round w-[12px] h-[12px] flex items-center justify-center  border-[1px] border-white">
                                1
                            </div>
                        }
                    >
                        <Avatar sx={{width: 44, height: 44}} alt="Travis Howard" src={profileImage} />
                    </Badge>
                </div>

                <div className="cursor-pointer relative hidden max-[768px]:flex">
                    <MdOutlineMenu size={28} />
                    <div className="bg-alertRed w-[8px] h-[8px] border-[1px] border-white rounded-round absolute bottom-[10%] right-[5%]"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
