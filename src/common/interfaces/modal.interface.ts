import {Dispatch, SetStateAction} from 'react';

interface ModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export default ModalProps;
