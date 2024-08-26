import {FC} from 'react';
import {IoIosSubway} from 'react-icons/io';
import {IoClose} from 'react-icons/io5';
import {Modal} from '@mui/material';

import ModalProps from 'src/common/interfaces/modal.interface';
import money from '../../common/assets/money.jpeg';

type TravelerModalProps = ModalProps;

const TravelerModal: FC<TravelerModalProps> = ({open, setOpen}) => {
    return (
        <Modal
            open={open}
            onClose={() => {
                setOpen(false);
            }}
        >
            <div className="bg-white rounded-[24px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] tablet:w-[55%] py-8 px-8 flex flex-col">
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-boldQuick text-xl text-textColor">Toys money Krakow-Minsk</h2>
                        <p className="text-lineGray font-mainSans">Small box with toys</p>
                    </div>
                    <div onClick={() => setOpen(false)} className="text-md2 text-lineGray mt-3 hover:text-[24px] duration-200">
                        <IoClose />
                    </div>
                </div>

                <div className="h-[280px] w-[380px] self-center">
                    <img src={money} alt="" className="h-[100%] w-[100%] object-cover" />
                </div>

                <div className="flex items-center justify-between w-[65%] mt-2">
                    <div>
                        <div className="text-textColor font-boldSans text-default">Krakov</div>
                        <div className="text-lineGray text-sm font-mainSans">18.07.2023 </div>
                    </div>
                    <div className="text-textColor text-[22px]">
                        <IoIosSubway />
                    </div>
                    <div>
                        <div className="text-textColor font-boldSans text-default">Minsk</div>
                        <div className="text-lineGray text-sm font-mainSans">18.07.2023 </div>
                    </div>
                </div>
                <div className="flex mt-2 px-4 items-center gap-[2px]">
                    <div className="w-[8px] h-[8px] bg-logoGreen rounded-round"></div>
                    <div className="w-[58%] bg-logoGreen h-[2px]"></div>
                    <div className="w-[8px] h-[8px] bg-logoGreen rounded-round"></div>
                    <div className="w-[35%] bg-lineGray h-[2px]"></div>
                    <div className="w-[8px] h-[8px] bg-lineGray rounded-round"></div>
                </div>

                <div className="flex justify-between items-center border-b-[1px] border-solid border-[#EAEBEB] mt-6 py-2">
                    <div className="text-textColor font-mainSans text-default">Package type</div>
                    <div className="text-lineGray text-default font-mainSans">Military</div>
                </div>
                <div className="flex justify-between items-center border-b-[1px] border-solid border-[#EAEBEB]  py-2">
                    <div className="text-textColor font-mainSans text-default">Overall dimensions (cm)</div>
                    <div className="text-lineGray text-default font-mainSans">120 x 80 x 60</div>
                </div>
                <div className="flex justify-between items-center  py-2">
                    <div className="text-textColor font-mainSans text-default">Weight (kg)</div>
                    <div className="text-lineGray text-default font-mainSans">40</div>
                </div>
            </div>
        </Modal>
    );
};

export default TravelerModal;