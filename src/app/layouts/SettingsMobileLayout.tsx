import {FC} from 'react';
import {CgArrowLongLeft} from 'react-icons/cg';
import {useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Header from '@app/components/Header';

const SettingsMobileLayout: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-[100%] h-[100vh] bg-paleGray">
            <Header />
            <div className="py-8 px-6">
                <div
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-logoGreen text-lg hover:opacity-85 w-fit p-2 cursor-pointer duration-200 font-boldSans"
                >
                    <CgArrowLongLeft />
                    Back
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default SettingsMobileLayout;
