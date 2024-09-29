import {FC, useContext, Dispatch, SetStateAction} from 'react';

import {RiCloseCircleLine} from 'react-icons/ri';

import LocalizedText from '@components/localize/LocalizedText';
import {defineMessages} from 'react-intl';

import {ModalContext} from '@components/modal/ModalProvider';

import TerminationModal from './TerminationModal';

import {makeStyles} from '@mui/styles';

import {CustomTheme} from '@style';

const useStyles = makeStyles((theme: CustomTheme) => ({
    alertBox: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.error.main,
        fontSize: '1rem',
        padding: '16px 24px',
        fontFamily: 'Open Sans, sans-serif',
        gap: '10px',
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        fontWeight: '400',
        '&:hover': {
            opacity: 0.8,
        },
    },
}));

const localized = defineMessages({
    terminateDeal: {
        id: 'TerminationModal_editTheOffer',
        defaultMessage: 'Terminate the deal',
    },
});

export interface TerminationModalButtonProps {
    isTerminated: boolean;
    setIsTerminated: Dispatch<SetStateAction<boolean>>;
}

const TerminationModalButton: FC<TerminationModalButtonProps> = props => {
    const classes = useStyles();
    const {openModal, closeModal} = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal(<TerminationModal closeModal={closeModal} {...props} />);
    };

    return (
        <div onClick={handleOpenModal} className={classes.alertBox}>
            <RiCloseCircleLine size={22} />
            <LocalizedText label={localized.terminateDeal} />
        </div>
    );
};

export default TerminationModalButton;
