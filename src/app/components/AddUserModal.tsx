import React, {Dispatch, FC, SetStateAction, useContext, useState, ChangeEvent} from 'react';
import {Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';

import ApproveModal from './ApproveModal';

import ModalProps from 'src/common/interfaces/modal.interface';
import LocalizedText from '@components/localize/LocalizedText';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalLayout} from '@components/modal/ModalLayout';

import AddUser from 'src/common/svgs/AddUser';

interface AdduserModalProps extends ModalProps {
    isEmailSent: boolean;
    selectedRole: string;
    handleRoleSelect: (event: ChangeEvent<HTMLInputElement>) => void;
}

const roles = [
    {
        id: 1,
        title: 'Parcel receiver',
        value: 'parcelReceiver',
    },
    {
        id: 2,
        title: 'Parcel sender',
        value: 'parcelSender',
    },
];

const AddUserModal: FC<AdduserModalProps> = ({isEmailSent, selectedRole, handleRoleSelect}) => {
    const {openModal, closeModal} = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal(
            <ModalLayout title={''} key={selectedRole}>
                <div className="w-[100%] tablet:min-w-[514px] px-8 py-8 flex flex-col">
                    <div className="text-xl text-textColor font-boldQuick">
                        {isEmailSent ? (
                            <Typography variant="h2">
                                <LocalizedText
                                    label={{id: 'areYouSure', defaultMessage: 'Are you sure that you want to change the {name}?'}}
                                    labelParams={{name: 'customer2'}}
                                />
                            </Typography>
                        ) : (
                            <Typography variant="h2">
                                <LocalizedText
                                    label={{id: 'addCustomer', defaultMessage: 'Add a {name}'}}
                                    labelParams={{name: 'customer2'}}
                                />
                            </Typography>
                        )}
                    </div>
                    <div>
                        <Typography variant="subtitle1">
                            <LocalizedText label={{id: 'enterEmail', defaultMessage: 'Enter user email and we will send invite-message'}} />
                        </Typography>
                    </div>
                    <div className="text-md font-boldQuick text-textColor mt-4 mb-2">
                        <LocalizedText
                            label={{
                                id: 'customerRole',
                                defaultMessage: '{name} role',
                            }}
                            labelParams={{name: 'Customer2'}}
                        />
                    </div>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            onChange={handleRoleSelect}
                            sx={{
                                '& .Mui-checked': {
                                    color: '#15C370 !important',
                                },
                            }}
                            value={selectedRole}
                        >
                            {roles.map(r => {
                                return (
                                    <FormControlLabel
                                        control={<Radio />}
                                        checked={selectedRole === r.value}
                                        value={r.value}
                                        label={<LocalizedText label={{id: r.value, defaultMessage: r.title}} />}
                                        key={r.id}
                                        sx={{
                                            '& .MuiTypography-root': {
                                                color: r.value === selectedRole ? '#15C370' : '#838383',
                                            },
                                        }}
                                    />
                                );
                            })}
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        sx={{
                            width: '100%',
                            color: '#282D41',
                            fontFamily: 'OpenReg',
                            marginTop: '10px',
                            marginBottom: '32px',
                            '& .MuiInputBase-input': {
                                padding: '12px 18px',
                                fontFamily: 'OpenReg, sans-serif',
                            },
                            input: {
                                '::placeholder': {
                                    color: '#49454F',
                                    opacity: 0.8,
                                },
                            },
                        }}
                        placeholder="Email"
                    />
                    <div className="mt-3 flex justify-end gap-2">
                        <Button
                            disableElevation
                            disableRipple
                            sx={{
                                bgcolor: 'white',
                                color: '#A9A9A9',
                                border: '1px solid #A9A9A9',
                                borderRadius: '20px',
                                width: '88px',
                                textTransform: 'none',
                                fontFamily: 'OpenReg',
                                fontSize: '16px',
                                '&:hover': {
                                    bgcolor: 'white',
                                    opacity: 0.8,
                                },
                            }}
                            onClick={closeModal}
                        >
                            <LocalizedText label={{id: 'cancel', defaultMessage: 'Cancel'}} />
                        </Button>
                        <ApproveModal />
                    </div>
                </div>
            </ModalLayout>
        );
    };

    return (
        <div onClick={handleOpenModal}>
            <AddUser />
        </div>
    );
};

export default AddUserModal;
