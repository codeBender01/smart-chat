import {FC, useContext, ChangeEvent, useState, useEffect, memo} from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup, TextField} from '@mui/material';
import Typography from '@mui/material/Typography';

import {defineMessages} from 'react-intl';

import ApproveModal from './ApproveModal';

import LocalizedText from '@components/localize/LocalizedText';
import CustomButton from '@components/Button';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalLayout} from '@components/modal/ModalLayout';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

import AddUser from 'src/common/svgs/AddUser';

interface AdduserModalProps {
    isEmailSent: boolean;
    selectedRole: string;
    handleRoleSelect: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        width: '100%',
        '@media (min-width: 768px)': {
            minWidth: '514px',
        },
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
    },
    headerText: {
        fontSize: '1.25rem',
        color: theme.palette.text.primary,
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
    },
    roleText: {
        fontSize: '18px',
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
        color: theme.palette.text.primary,
        marginTop: '16px',
        marginBottom: '8px',
    },
    buttonContainer: {
        marginTop: '12px',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '8px',
    },
}));

const AddUserModalContent: FC<AdduserModalProps> = ({isEmailSent, selectedRole, handleRoleSelect}) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const {openModal, closeModal} = useContext(ModalContext);

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.headerText}>
                {isEmailSent ? (
                    <Typography variant="h2">
                        <LocalizedText label={localized.areYouSure} labelParams={{name: 'customer2'}} />
                    </Typography>
                ) : (
                    <Typography variant="h2">
                        <LocalizedText label={localized.addCustomer} labelParams={{name: 'customer2'}} />
                    </Typography>
                )}
            </div>
            <div>
                <Typography variant="subtitle1">
                    <LocalizedText label={localized.enterEmail} />
                </Typography>
            </div>
            <div className={classes.roleText}>
                <LocalizedText label={localized.customerRole} labelParams={{name: 'Customer2'}} />
            </div>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={handleRoleSelect}
                    sx={theme => ({
                        '& .Mui-checked': {
                            color: theme.palette.primary.main,
                        },
                    })}
                    value={selectedRole}
                >
                    {roles.map(r => {
                        return (
                            <FormControlLabel
                                control={<Radio />}
                                checked={selectedRole === r.value}
                                value={r.value}
                                label={<LocalizedText label={localized[r.value as keyof typeof localized]} />}
                                key={r.id}
                                sx={theme => ({
                                    '& .MuiTypography-root': {
                                        color: r.value === selectedRole ? theme.palette.primary.main : theme.palette.text.secondary,
                                    },
                                })}
                            />
                        );
                    })}
                </RadioGroup>
            </FormControl>
            <TextField
                sx={theme => ({
                    width: '100%',
                    color: theme.palette.text.primary,
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
                })}
                placeholder="Email"
                onChange={e => {
                    if (e.target.value === '') {
                        setIsButtonDisabled(true);
                        return;
                    }
                    setIsButtonDisabled(false);
                }}
            />
            <div className={classes.buttonContainer}>
                <CustomButton closeModal={closeModal} width="88px" bgcolor="white" color="#A9A9A9" borderColor="#A9A9A9">
                    <LocalizedText label={localized.cancel} />
                </CustomButton>

                <ApproveModal disabled={isButtonDisabled} />
            </div>
        </div>
    );
};

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

const localized = defineMessages({
    areYouSure: {
        id: 'AddUserModal_areYouSure',
        defaultMessage: 'Are you sure that you want to change the {name}?',
    },
    addCustomer: {
        id: 'AddUserModal_addCustomer',
        defaultMessage: 'Add a {name}',
    },
    enterEmail: {
        id: 'AddUserModal_enterEmail',
        defaultMessage: 'Enter user email and we will send invite-message',
    },
    cancel: {
        id: 'AddUserModal_cancel',
        defaultMessage: 'Cancel',
    },
    parcelReceiver: {
        id: 'AddUserModal_parcelReceiver',
        defaultMessage: 'Parcel receiver',
    },
    parcelSender: {
        id: 'AddUserModal_parcelSender',
        defaultMessage: 'Parcel sender',
    },
    customerRole: {
        id: 'AddUserModal_customerRole',
        defaultMessage: '{name} role',
    },
});

const AddUserModal: FC<AdduserModalProps> = ({isEmailSent, selectedRole, handleRoleSelect}) => {
    const {openModal, closeModal} = useContext(ModalContext);

    useEffect(() => {
        
    }, [selectedRole]);

    const handleOpenModal = () => {
        openModal(
            <ModalLayout title={''}>
                <AddUserModalContent isEmailSent={isEmailSent} selectedRole={selectedRole} handleRoleSelect={handleRoleSelect} />
            </ModalLayout>,
            false
        );
    };

    return (
        <div onClick={handleOpenModal}>
            <AddUser />
        </div>
    );
};

export default AddUserModal;
