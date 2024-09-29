import {FC, useContext} from 'react';
import {FaCarAlt} from 'react-icons/fa';
import {IoClose} from 'react-icons/io5';
import LocalizedText from '@components/localize/LocalizedText';

import {IoIosInformationCircleOutline} from 'react-icons/io';

import money from '../../common/assets/money.jpeg';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';
import {defineMessages} from 'react-intl';

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        backgroundColor: 'white',
        borderRadius: '24px',
        width: '100%',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 768px)': {
            width: '840px',
        },
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Quicksand, sans-serif',
        fontSize: '2rem',
        color: theme.palette.text.primary,
        fontWeight: '600',
    },
    subTitle: {
        fontFamily: 'Open Sans, sans-serif',
        color: theme.palette.text.secondary,
        fontWeight: '600',
        fontSize: '16px',
    },
    closeIcon: {
        fontSize: '18px',
        color: '#999999',
        marginTop: '12px',
        cursor: 'pointer',
        '&:hover': {
            fontSize: '24px',
            transition: 'font-size 0.2s',
        },
    },
    imageWrapper: {
        height: '280px',
        width: '380px',
        alignSelf: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        maxWidth: '100%',
        objectFit: 'cover',
    },
    routeWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: '8px',
        '@media (min-width: 1024px)': {
            width: '65%',
        },
    },
    cityInfo: {
        textAlign: 'center',
        '& .cityName': {
            color: theme.palette.text.primary,
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '1rem',
            fontWeight: '600',
        },
        '& .date': {
            color: theme.palette.text.secondary,
            fontSize: '0.875rem',
            fontFamily: 'MainSans, sans-serif',
        },
    },

    vehicleInfo: {
        color: theme.palette.text.secondary,
        fontSize: '0.875rem',
        fontFamily: 'MainSans, sans-serif',
    },
    routeIcon: {
        color: '#333333',
        fontSize: '22px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    progressWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '8px',
        width: '95%',
        paddingLeft: '16px',
        '@media (min-width: 1024px)': {
            marginLeft: '0',
        },
    },
    greenDot: {
        width: '8px',
        height: '8px',
        backgroundColor: theme.palette.primary.main, // Replace with logoGreen
        borderRadius: '50%',
    },
    greenLine: {
        width: '75%',
        height: '2px',
        backgroundColor: theme.palette.primary.main, // Replace with logoGreen
        '@media (min-width: 1024px)': {
            width: '65%',
        },
        '@media (min-width: 768px)': {
            width: '64%',
        },
    },
    grayLine: {
        width: '25%',
        height: '2px',
        backgroundColor: theme.custom.palette.newColors.grayDot,
        '@media (min-width: 1024px)': {
            width: '35%',
        },
        '@media (min-width: 768px)': {
            width: '36%',
        },
    },
    grayDot: {
        width: '8px',
        height: '8px',
        backgroundColor: theme.custom.palette.newColors.grayDot,
        borderRadius: '50%',
    },
    infoRowContainer: {
        marginTop: '2rem',
    },
    infoRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: '1px',
        borderColor: theme.palette.secondary.light,
        paddingTop: '8px',
        paddingBottom: '8px',
    },
    lastInfoRow: {
        borderBottom: 'none',
    },
    labelText: {
        color: theme.palette.text.primary,
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '1rem',
        fontWeight: '400',
    },
    valueText: {
        color: theme.custom.palette.newColors.travelerModalGray,
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '1rem',
        fontWeight: '400',
    },
}));

const localized = defineMessages({
    packageType: {
        id: 'TravelerModal_packageType',
        defaultMessage: 'Package type',
    },
    overallDimensions: {
        id: 'TravelerModal_overallDimensions',
        defaultMessage: 'Overall dimensions (cm)',
    },
    weight: {
        id: 'TravelerModal_weight',
        defaultMessage: 'Weight (kg)',
    },
});

const TravelerModal: FC = () => {
    const {openModal, closeModal} = useContext(ModalContext);

    const classes = useStyles();

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <div>
                            <h2 className={classes.title}>Toys money Krakow-Minsk</h2>
                            <p className={classes.subTitle}>Small box with toys</p>
                        </div>
                        <div onClick={closeModal} className={classes.closeIcon}>
                            <IoClose />
                        </div>
                    </div>

                    <div className={classes.imageWrapper}>
                        <img src={money} alt="" className={classes.image} />
                    </div>

                    <div className={classes.routeWrapper}>
                        <div className={classes.cityInfo}>
                            <div className="cityName">Krakov</div>
                            <div className="date">18.07.2023</div>
                        </div>
                        <div className={classes.routeIcon}>
                            <FaCarAlt />
                            <div className={classes.vehicleInfo}>BA2981</div>
                        </div>
                        <div className={classes.cityInfo}>
                            <div className="cityName">Minsk</div>
                            <div className="date">18.07.2023</div>
                        </div>
                    </div>

                    <div className={classes.progressWrapper}>
                        <div className={classes.greenDot}></div>
                        <div className={classes.greenLine}></div>
                        <div className={classes.greenDot}></div>
                        <div className={classes.grayLine}></div>
                        <div className={classes.grayDot}></div>
                    </div>

                    <div className={classes.infoRowContainer}>
                        <div className={classes.infoRow}>
                            <div className={classes.labelText}>
                                <LocalizedText label={localized.packageType} />
                            </div>
                            <div className={classes.valueText}>Military</div>
                        </div>
                        <div className={classes.infoRow}>
                            <div className={classes.labelText}>
                                <LocalizedText label={localized.overallDimensions} />
                            </div>
                            <div className={classes.valueText}>120 x 80 x 60</div>
                        </div>
                        <div className={`${classes.infoRow} ${classes.lastInfoRow}`}>
                            <div className={classes.labelText}>
                                <LocalizedText label={localized.weight} />
                            </div>
                            <div className={classes.valueText}>40</div>
                        </div>
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
