import React from 'react';

import {Modal} from '@components/modal/Modal';

type ModalContextProps = {
    open: boolean;
    modalContent: JSX.Element;
    openModal: (content: JSX.Element, disableBackdropClick?: boolean) => void;
    closeModal: (event?: Object, reason?: string) => void;
};

export const ModalContext = React.createContext<ModalContextProps>({} as ModalContextProps);

type ModalProviderProps = {
    children: JSX.Element | React.ReactNode;
};

export function ModalProvider({children}: ModalProviderProps) {
    const [open, setOpen] = React.useState(false);
    const [disableBackdropClick, setDisableBackdropClick] = React.useState(false);
    const [modalContent, setModalContent] = React.useState((<div></div>) as JSX.Element);

    function openModal(content: JSX.Element, disableBackdropClick?: boolean) {
        setModalContent(content);
        setOpen(true);
        if (disableBackdropClick) {
            setDisableBackdropClick(disableBackdropClick);
        }
    }

    function closeModal(event?: Object, reason?: string) {
        if (reason === 'backdropClick' && disableBackdropClick) {
            /* empty */
        } else {
            setModalContent(<div></div>);
            setOpen(false);
            setDisableBackdropClick(false);
        }
    }

    return (
        <ModalContext.Provider value={{open, modalContent, openModal, closeModal}}>
            {children}
            <Modal />
        </ModalContext.Provider>
    );
}
