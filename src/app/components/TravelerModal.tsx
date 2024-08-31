import {FC, useContext} from 'react';
import {IoIosSubway} from 'react-icons/io';
import {IoClose} from 'react-icons/io5';
import LocalizedText from '@components/localize/LocalizedText';

import {IoIosInformationCircleOutline} from 'react-icons/io';

import money from '../../common/assets/money.jpeg';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';

const TravelerModal: FC = () => {
    const {openModal, closeModal} = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <div className="bg-white rounded-[24px] w-[100%] tablet:w-[840px] py-8 px-8 flex flex-col">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="font-boldQuick text-xl text-textColor">Toys money Krakow-Minsk</h2>
                            <p className="text-lineGray font-mainSans">Small box with toys</p>
                        </div>
                        <div onClick={closeModal} className="text-md2 text-lineGray mt-3 hover:text-[24px] duration-200">
                            <IoClose />
                        </div>
                    </div>

                    <div className="breakpoint:h-[280px] breakpoint:w-[380px] self-center">
                        <img src={money} alt="" className="h-[100%] w-[100%] max-w-[100%] object-cover" />
                    </div>

                    <div className="flex items-center justify-between w-[80%] breakpoint:w-[65%] mt-2">
                        <div className="flex flex-col items-center">
                            <div className="text-textColor font-boldSans text-default">Krakov</div>
                            <div className="text-lineGray text-sm font-mainSans">18.07.2023 </div>
                        </div>
                        <div className="text-textColor text-[22px]">
                            <IoIosSubway />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-textColor font-boldSans text-default">Minsk</div>
                            <div className="text-lineGray text-sm font-mainSans">18.07.2023 </div>
                        </div>
                    </div>
                    <div className="flex ml-auto breakpoint:ml-0 mt-2 px-4 w-[95%] items-center gap-[2px]">
                        <div className="w-[8px] h-[8px] bg-logoGreen rounded-round"></div>
                        <div className="w-[72%] breakpoint:w-[65%] bg-logoGreen h-[2px]"></div>
                        <div className="w-[8px] h-[8px] bg-logoGreen rounded-round"></div>
                        <div className="w-[30%] breakpoint:w-[35%] bg-lineGray h-[2px]"></div>
                        <div className="w-[8px] h-[8px] bg-lineGray rounded-round"></div>
                    </div>

                    <div className="flex justify-between items-center border-b-[1px] border-solid border-[#EAEBEB] mt-6 py-2">
                        <div className="text-textColor font-mainSans text-default">
                            <LocalizedText label={{id: 'packageType', defaultMessage: 'Package Type'}} />
                            Package type
                        </div>
                        <div className="text-lineGray text-default font-mainSans">Military</div>
                    </div>
                    <div className="flex justify-between items-center border-b-[1px] border-solid border-[#EAEBEB]  py-2">
                        <div className="text-textColor font-mainSans text-default">
                            <LocalizedText label={{id: 'overallDimensions', defaultMessage: 'Overall dimensions (cm)'}} />
                        </div>
                        <div className="text-lineGray text-default font-mainSans">120 x 80 x 60</div>
                    </div>
                    <div className="flex justify-between items-center  py-2">
                        <div className="text-textColor font-mainSans text-default">
                            <LocalizedText label={{id: 'weight', defaultMessage: 'Weight (kg)'}} />
                        </div>
                        <div className="text-lineGray text-default font-mainSans">40</div>
                    </div>
                </div>
            </ModalContent>,
            true
        );
    };

    return (
        <div onClick={handleOpenModal} className="text-md2 text-textColor hover:text-lineGray duration-200 cursor-pointer">
            <IoIosInformationCircleOutline />
        </div>
    );
};

export default TravelerModal;
