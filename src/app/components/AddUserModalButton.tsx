import {FC, useContext, ChangeEvent} from 'react';

import {ModalContext} from '@components/modal/ModalProvider';

import AddUser from 'src/common/svgs/AddUser';
import AddUserModal from '@app/components/AddUserModal';

export interface AddUserModalButtonProps {
    isEmailSent: boolean;
    selectedRole: string;
    handleRoleSelect: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AddUserModalButton: FC<AddUserModalButtonProps> = props => {
    const {openModal, closeModal} = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal(<AddUserModal {...props} closeModal={closeModal} />);
    };

    return (
        <div onClick={handleOpenModal}>
            <AddUser />
        </div>
    );
};

export default AddUserModalButton;
