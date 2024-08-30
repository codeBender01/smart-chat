import {FC} from 'react';
import LocalizedText from '@components/localize/LocalizedText';

const TermsAndConditions: FC = () => {
    return (
        <div
            className="w-[100%] tablet:w-[100%] flex flex-col gap-12 bg-white rounded-[24px] px-10 py-8 flex-1"
            style={{
                boxShadow: '0px 2px 6px 2px #00000026',
            }}
        >
            <div>
                <h3 className="text-lg text-textColor font-boldQuick mb-4">
                    <LocalizedText label={{id: 'welcome', defaultMessage: 'Welcome to Eelow'}} />
                </h3>
                <p className="text-md text-textColor font-mainSans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nisi ac nibh tristique tempus. Fusce vitae
                    tincidunt ipsum, a ultricies massa. Phasellus commodo, quam dignissim gravida porttitor, metus neque pulvinar mi,
                    suscipit lacinia ex quam nec arcu. Phasellus dignissim lacinia accumsan. Aenean et enim quis orci bibendum sollicitudin
                    at vel leo. Donec quis dui nibh. Quisque id velit non nunc feugiat tempus sit amet at ex. Integer quam augue, laoreet
                    sit amet pulvinar vitae, tincidunt eget felis. Ut mattis erat rhoncus augue facilisis, ac congue est blandit. Curabitur
                    et maximus purus, nec tristique tortor. Vestibulum nec risus vitae mauris scelerisque imperdiet. Cras ac enim nulla.
                    Vivamus vitae volutpat nisi. Aliquam volutpat vehicula scelerisque. Fusce non ipsum diam. Praesent purus neque,
                    ultricies ac turpis ultrices, sodales finibus nibh. Suspendisse potenti. Aenean vel maximus lorem. Pellentesque vitae
                    posuere purus, nec laoreet mauris. Pellentesque non lectus nec odio elementum ullamcorper. Morbi porta mi sed lacus
                    sollicitudin semper. Curabitur sed pretium ex.
                </p>
            </div>
            <div>
                <h3 className="text-lg text-textColor font-boldQuick mb-4">
                    <LocalizedText label={{id: 'termsOfUse', defaultMessage: 'Terms of Use'}} />
                </h3>
                <p className="text-md text-textColor font-mainSans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nisi ac nibh tristique tempus. Fusce vitae
                    tincidunt ipsum, a ultricies massa. Phasellus commodo, quam dignissim gravida porttitor, metus neque pulvinar mi,
                    suscipit lacinia ex quam nec arcu. Phasellus dignissim lacinia accumsan. Aenean et enim quis orci bibendum sollicitudin
                    at vel leo. Donec quis dui nibh. Quisque id velit non nunc feugiat tempus sit amet at ex. Integer quam augue, laoreet
                    sit amet pulvinar vitae, tincidunt eget felis. Ut mattis erat rhoncus augue facilisis, ac congue est blandit. Curabitur
                    et maximus purus, nec tristique tortor. Vestibulum nec risus vitae mauris scelerisque imperdiet. Cras ac enim nulla.
                    Vivamus vitae volutpat nisi. Aliquam volutpat vehicula scelerisque. Fusce non ipsum diam. Praesent purus neque,
                    ultricies ac turpis ultrices, sodales finibus nibh. Suspendisse potenti. Aenean vel maximus lorem. Pellentesque vitae
                    posuere purus, nec laoreet mauris. Pellentesque non lectus nec odio elementum ullamcorper. Morbi porta mi sed lacus
                    sollicitudin semper. Curabitur sed pretium ex.
                </p>
            </div>
            <div>
                <h3 className="text-lg text-textColor font-boldQuick mb-4">
                    <LocalizedText label={{id: 'verification', defaultMessage: 'Verification'}} />
                </h3>
                <p className="text-md text-textColor font-mainSans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nisi ac nibh tristique tempus. Fusce vitae
                    tincidunt ipsum, a ultricies massa. Phasellus commodo, quam dignissim gravida porttitor, metus neque pulvinar mi,
                    suscipit lacinia ex quam nec arcu. Phasellus dignissim lacinia accumsan. Aenean et enim quis orci bibendum sollicitudin
                    at vel leo. Donec quis dui nibh. Quisque id velit non nunc feugiat tempus sit amet at ex. Integer quam augue, laoreet
                    sit amet pulvinar vitae, tincidunt eget felis. Ut mattis erat rhoncus augue facilisis, ac congue est blandit. Curabitur
                    et maximus purus, nec tristique tortor. Vestibulum nec risus vitae mauris scelerisque imperdiet. Cras ac enim nulla.
                    Vivamus vitae volutpat nisi. Aliquam volutpat vehicula scelerisque. Fusce non ipsum diam. Praesent purus neque,
                    ultricies ac turpis ultrices, sodales finibus nibh. Suspendisse potenti. Aenean vel maximus lorem. Pellentesque vitae
                    posuere purus, nec laoreet mauris. Pellentesque non lectus nec odio elementum ullamcorper. Morbi porta mi sed lacus
                    sollicitudin semper. Curabitur sed pretium ex.
                </p>
            </div>
            <div>
                <h3 className="text-lg text-textColor font-boldQuick mb-4">
                    <LocalizedText label={{id: 'payment', defaultMessage: 'Payment'}} />
                </h3>
                <p className="text-md text-textColor font-mainSans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nisi ac nibh tristique tempus. Fusce vitae
                    tincidunt ipsum, a ultricies massa. Phasellus commodo, quam dignissim gravida porttitor, metus neque pulvinar mi,
                    suscipit lacinia ex quam nec arcu. Phasellus dignissim lacinia accumsan. Aenean et enim quis orci bibendum sollicitudin
                    at vel leo. Donec quis dui nibh. Quisque id velit non nunc feugiat tempus sit amet at ex. Integer quam augue, laoreet
                    sit amet pulvinar vitae, tincidunt eget felis. Ut mattis erat rhoncus augue facilisis, ac congue est blandit. Curabitur
                    et maximus purus, nec tristique tortor. Vestibulum nec risus vitae mauris scelerisque imperdiet. Cras ac enim nulla.
                    Vivamus vitae volutpat nisi. Aliquam volutpat vehicula scelerisque. Fusce non ipsum diam. Praesent purus neque,
                    ultricies ac turpis ultrices, sodales finibus nibh. Suspendisse potenti. Aenean vel maximus lorem. Pellentesque vitae
                    posuere purus, nec laoreet mauris. Pellentesque non lectus nec odio elementum ullamcorper. Morbi porta mi sed lacus
                    sollicitudin semper. Curabitur sed pretium ex.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
