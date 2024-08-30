import {FC} from 'react';
import {PiGlobe} from 'react-icons/pi';

import LocalizedText from '@components/localize/LocalizedText';

import facebook from '../../common/assets/facebook.png';
import instagram from '../../common/assets/instagram.png';
import logo from '../../common/assets/logo.png';
import telegram from '../../common/assets/telegram.png';
import twitter from '../../common/assets/twitter.png';

const Footer: FC = () => {
    return (
        <footer className="w-[100%] mt-auto py-[56px]">
            <div className=" w-[90%] tablet:w-[80%] mx-auto">
                <div className="flex flex-col justify-between gap-4 tablet:flex-row">
                    <div className="flex flex-col">
                        <div className="w-[120px] h-[35px]">
                            <img className="w-[100%] " src={logo} alt="Eelow" />
                        </div>
                        <p className="text-default font-mainSans text-textColor mt-4 mb-6">
                            <LocalizedText label={{id: 'weNeed', defaultMessage: 'We need each other'}} />
                        </p>

                        <div className="flex mb-6 items-center gap-2 text-textColor font-normal text-default font-mainSans">
                            <PiGlobe size={24} />
                            English
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
                    </div>

                    <div className="flex flex-col tablet:flex-row gap-4 justify-between w-[70%] tablet:w-[50%] ">
                        <div className="flex flex-col gap-2 w-[100%] tablet:w-[50%]">
                            <div className="font-boldQuick font-bold text-lg">
                                <LocalizedText label={{id: 'company', defaultMessage: 'Company'}} />
                            </div>
                            <ul>
                                <li className="font-mainQuick text-textColor text-md cursor-pointer hover:opacity-80 duration-200">
                                    <LocalizedText label={{id: 'terms', defaultMessage: 'Terms and Conditions'}} />
                                </li>
                                <li className="font-mainQuick mt-2 text-textColor text-md cursor-pointer hover:opacity-80 duration-200">
                                    <LocalizedText label={{id: 'ourBlog', defaultMessage: 'Our blog'}} />
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-[100%] tablet:w-[45%]">
                            <div className="font-boldQuick font-bold text-lg">
                                <LocalizedText label={{id: 'alwaysInTouch', defaultMessage: 'We are always in touch!'}} />
                            </div>
                            <ul>
                                <li className="font-mainQuick text-lineGray text-md ">
                                    <LocalizedText
                                        label={{id: 'youCanWrite', defaultMessage: 'You can write us a letter or call the numbers'}}
                                    />
                                </li>
                                <li className="font-mainQuick mt-2 text-textColor text-md ">(123) 456 789</li>
                                <li className="font-mainQuick mt-2 mb-6 text-textColor text-md">example@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] h-[1px] bg-textColor my-8"></div>
                <div className="text-md font-mainSans text-textColor">All rights reserved © 2008-2023</div>
            </div>
        </footer>
    );
};

export default Footer;
