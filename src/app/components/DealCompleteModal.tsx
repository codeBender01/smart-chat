import {FC} from 'react';
import {Button, createTheme, FormControl, Modal, Rating, TextField, ThemeProvider} from '@mui/material';

import ModalProps from 'src/common/interfaces/modal.interface';

type DealCompletedModalProps = ModalProps;

const DealCompletedModal: FC<DealCompletedModalProps> = ({open, setOpen}) => {
    const ratingTheme = createTheme({
        components: {
            MuiRating: {
                styleOverrides: {
                    root: {
                        color: '#15C370',
                        marginTop: '18px',
                    },
                },
            },
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: '#0000003B',
                            },

                        '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0000003B',
                        },
                    },
                },
            },
            MuiButton: {
                defaultProps: {
                    variant: 'contained',
                    disableElevation: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        width: '88px',
                        textTransform: 'none',
                        fontFamily: 'OpenReg',
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        fontFamily: 'OpenReg',
                        color: '#303030',

                        '&.Mui-focused': {
                            color: '#303030',
                        },
                    },
                },
            },
        },
    });

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="bg-white rounded-[24px] top-[50%] left-[50%] relative translate-x-[-50%]  translate-y-[-50%] w-[95%] tablet:w-[514px] lg:w-[30%] py-8 px-6 flex flex-col items-center">
                <h2 className="text-textColor text-xl font-boldQuick w-[80%] text-center">The deal has been completed</h2>
                <div className="text-[#49454F] font-mainSans text-md mt-8">Rate a customer/traveller</div>
                <ThemeProvider theme={ratingTheme}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <div className="text-[#49454F] font-mainSans text-md mt-8">Leave a feedback</div>
                    <FormControl
                        sx={{
                            marginTop: 2,
                        }}
                        fullWidth
                    >
                        <TextField
                            label="Description"
                            multiline
                            placeholder="Type your comment here"
                            rows={3}
                            minRows={3}
                            sx={{
                                '& .MuiInputBase-root': {
                                    paddingBottom: 0,
                                    paddingRight: 0,
                                },
                                '& .MuiInputBase-input': {
                                    resize: 'both',
                                    overflow: 'auto',
                                },
                            }}
                        />
                    </FormControl>

                    <div className="mt-8 flex self-end gap-2">
                        <Button
                            sx={{
                                bgcolor: 'white',
                                color: '#A9A9A9',
                                border: '1px solid #A9A9A9',
                                '&:hover': {
                                    bgcolor: 'white',
                                    opacity: 0.8,
                                },
                            }}
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            sx={{
                                bgcolor: '#15C370',
                                color: '#fff',
                                '&:hover': {
                                    bgcolor: '#15C370',
                                    opacity: 0.8,
                                },
                            }}
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            Send
                        </Button>
                    </div>
                </ThemeProvider>
            </div>
        </Modal>
    );
};

export default DealCompletedModal;
