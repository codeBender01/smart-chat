import {FC} from 'react';
import {CgArrowLongLeft} from 'react-icons/cg';
import {useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Footer from '@app/components/Footer';
import Header from '@app/components/Header';
import LocalizedText from '@components/localize/LocalizedText';

const MainLayoutMobile: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[90vh] bg-paleGray">
            <Header />
            <div className="py-8 px-6">
                <div
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-logoGreen text-lg hover:opacity-85 w-fit p-2 cursor-pointer duration-200 font-boldSans"
                >
                    <CgArrowLongLeft />
                    <LocalizedText label={{id: 'goBack', defaultMessage: 'Back'}} />
                </div>
                <h1 className="text-[36px] text-textColor font-boldQuick">
                    <LocalizedText label={{id: 'terms', defaultMessage: 'Terms and Conditions'}} />
                </h1>
                <p className="text-default font-mainSans text-textColor my-4">
                    <LocalizedText label={{id: 'lastUpdated', defaultMessage: 'Last updated'}} />: 06.04.2023
                </p>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default MainLayoutMobile;
