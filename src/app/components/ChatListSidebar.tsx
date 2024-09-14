import {FC, useEffect, useState} from 'react';
import {useIntl} from 'react-intl';
import {CgArrowLongLeft} from 'react-icons/cg';
import {IoMdOptions, IoMdSearch} from 'react-icons/io';
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';
import '../../mui.css';
import '../../scrollbar.css';
import '../../cursor.css';
import {
    FormControl,
    FormControlLabel,
    InputAdornment,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {defineMessages} from 'react-intl';

import {CustomTheme} from '@style';

import chats from 'src/common/pageData/chats';
import chatLogo from '../../common/assets/chatLogo.png';

import AdminChatTab from './AdminChatTab';
import ChatTab from './ChatTab';
import LocalizedText from '@components/localize/LocalizedText';
import {display, padding, width} from '@mui/system';

const filterOptions = [
    {
        id: 1,
        name: 'All',
        value: 'All',
    },
    {
        id: 2,
        name: 'Electronics_Kiev-Lviv',
        value: 'Electronics_Kiev-Lviv',
    },
    {
        id: 3,
        name: 'Barsik_ Minsk - Lviv',
        value: 'Barsik_ Minsk - Lviv',
    },
    {
        id: 4,
        name: 'Babana_Krakov',
        value: 'Babana_Krakov',
    },
    {
        id: 5,
        name: 'Metal money_ Odessa - Kiev',
        value: 'Metal money_ Odessa - Kiev',
    },
    {
        id: 6,
        name: 'Metal money_ Odesa - Kiev',
        value: 'Metal money_ Odesa - Kiev',
    },
];

const roles = [
    {
        id: 1,
        title: 'Traveler',
        value: 'traveler',
    },
    {
        id: 2,
        title: 'Customer',
        value: 'customer',
    },
    {
        id: 3,
        title: 'All',
        value: 'All',
    },
];

const travelers = [
    {
        id: 1,
        title: 'Optimal',
        value: 'optimal',
    },
    {
        id: 2,
        title: 'Small parcel',
        value: 'smallParcel',
    },
    {
        id: 3,
        title: 'Light parcel',
        value: 'lightParcel',
    },
    {
        id: 4,
        title: 'High price',
        value: 'highPrice',
    },
];

const customers = [
    {
        id: 1,
        title: 'Optimal',
        value: 'optimal',
    },
    {
        id: 2,
        title: 'Soon date',
        value: 'soonDate',
    },
    {
        id: 3,
        title: 'Low price',
        value: 'lowPrice',
    },
    {
        id: 4,
        title: 'Rating',
        value: 'rating',
    },
];

const useStyles = makeStyles((theme: CustomTheme) => ({
    sidebarContainer: {
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        padding: '16px 0',
        '@media (min-width: 850px)': {
            minWidth: '350px',
            width: '30%',
        },
    },
    innerContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
    },
    inputContainer: {
        borderWidth: '1px',
        borderColor: theme.custom.palette.newColors.sidebarInputBorder,
        borderRadius: '28px',
        width: '90%',
        padding: '8px 0 8px 24px',
        display: 'flex',
        alignItems: 'center',
        '@media (min-width: 850px)': {
            width: '95%',
        },
    },

    selectedOption: {
        width: '100%',
        textOverflow: 'ellipsis',
        textWrap: 'nowrap',
        overflow: 'hidden',
        fontFamily: 'Open Sans',
        fontWeight: '700',
    },
    divider: {
        height: '20px',
        width: '1px',
        backgroundColor: theme.palette.text.secondary,
        marginLeft: '32px',
        marginRight: '16px',
    },
    filterContainer: {
        color: theme.palette.text.primary,
        fontSize: '22px',
        position: 'relative',
        padding: '8px',
    },
    filterIcon: {
        transition: 'all 150ms',
        borderRadius: '6px',
        cursor: 'pointer',
        padding: '8px',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
    filterBody: {
        boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
        transition: 'opacity 312ms cubic-bezier(0.4, 0, 0.2, 1), transform 208ms cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'absolute',
        backgroundColor: theme.palette.primary.contrastText,
        right: '20%',
        top: '100%',
        padding: '24px',
        borderRadius: '12px',
        fontSize: '18px',
        fontFamily: 'Quicksand',
        fontWeight: '500',
        textWrap: 'nowrap',
    },
    filterText: {
        fontSize: '18px',
        color: theme.palette.text.primary,
        fontFamily: 'Quicksand',
        fontWeight: '700',
    },
    goBackFilter: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: theme.palette.primary.main,
        fontSize: '16px',
        width: 'fit-content',
        cursor: 'pointer',
        transition: 'all 200ms',
        fontFamily: 'Open Sans',
        fontWeight: '700',
        marginTop: '25px',
        '&:hover': {
            opacity: 0.85,
        },
    },
    scrollContainer: {
        overflowY: 'auto',
        maxHeight: '85vh',
        paddingBottom: '30px',
        cursor: 'pointer',
    },
    contentContainer: {
        minHeight: '85vh',
        padding: '0 16px',
    },
    chatItem: {
        width: '100%',
        borderBottomWidth: '1px',
        borderColor: theme.palette.primary.light,
        padding: '24px 8px',
        display: 'flex',
        gap: '8px',
        transition: 'background-color 0.2s',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.secondary.contrastText,
        },
    },
    chatItemActive: {
        backgroundColor: theme.palette.secondary.contrastText,
    },
    chatItemInactive: {
        backgroundColor: theme.palette.secondary.main,
    },
    chatItemLogo: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
    },
    chatItemDetails: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chatItemName: {
        fontFamily: 'QuicksandBold, sans-serif',
        fontSize: '20px',
        color: theme.palette.text.primary,
    },
    chatItemSubtext: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '14px',
        color: theme.palette.text.secondary,
    },
    chatItemDate: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '14px',
        color: theme.palette.text.secondary,
        textTransform: 'uppercase',
    },
    chatItemBadge: {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.contrastText,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    dateUnreadContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '16px',
    },
}));

interface ChatListSidebarProps {
    isAdmin: boolean;
}

const localized = defineMessages({
    All: {
        id: 'ChatListSidebar_All',
        defaultMessage: 'All',
    },
    searchInputSidebar: {
        id: 'ChatListSidebar_searchInputSidebar',
        defaultMessage: 'Search by keywords',
    },
    filterByRole: {
        id: 'ChatListSidebar_filterByRole',
        defaultMessage: 'Filter by role',
    },
    traveler: {
        id: 'ChatListSidebar_traveler',
        defaultMessage: 'Traveler',
    },
    customer: {
        id: 'ChatListSidebar_customer',
        defaultMessage: 'Customer',
    },
    sortBy: {
        id: 'ChatListSidebar_sortBy',
        defaultMessage: 'Sort by',
    },
    optimal: {
        id: 'ChatListSidebar_optimal',
        defaultMessage: 'Optimal',
    },
    lightParcel: {
        id: 'ChatListSidebar_lightParcel',
        defaultMessage: 'Light Parcel',
    },
    smallParcel: {
        id: 'ChatListSidebar_smallParcel',
        defaultMessage: 'Small Parcel',
    },
    highPrice: {
        id: 'ChatListSidebar_highPrice',
        defaultMessage: 'High Price',
    },
    resetRole: {
        id: 'ChatListSidebar_resetRole',
        defaultMessage: 'Reset role',
    },
    soonDate: {
        id: 'ChatListSidebar_soonDate',
        defaultMessage: 'Soon date',
    },
    lowPrice: {
        id: 'ChatListSidebar_lowPrice',
        defaultMessage: 'Low price',
    },
    rating: {
        id: 'ChatListSidebar_rating',
        defaultMessage: 'Rating',
    },
    helpSupport: {
        id: 'ChatListSidebar_helpSupport',
        defaultMessage: 'help and support',
    },
});

const ChatListSidebar: FC<ChatListSidebarProps> = ({isAdmin}) => {
    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedRole, setSelectedRole] = useState('All');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isTraveler, setIsTraveler] = useState(false);
    const [isCustomer, setIsCustomer] = useState(false);

    const intl = useIntl();

    const navigate = useNavigate();
    const isMobile = useMediaQuery({query: '(max-width: 850px)'});

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedOption(event.target.value);
    };

    const handleRoleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        setSelectedRole((event.target as HTMLInputElement).value);
        if (event.target.value === 'traveler') {
            setIsTraveler(true);
        } else if (event.target.value === 'customer') {
            setIsCustomer(true);
        }
    };

    const classes = useStyles();

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setIsFilterOpen(false);
        });
    }, []);

    return (
        <div className={classes.sidebarContainer} id="sidebar">
            <div className={classes.innerContainer}>
                <div className={classes.inputContainer}>
                    <FormControl
                        sx={{
                            width: '5%',
                            minWidth: '18px',
                        }}
                    >
                        <Select
                            disabled={isAdmin}
                            id="search-filter"
                            MenuProps={{
                                MenuListProps: {
                                    sx: {
                                        maxHeight: '330px',
                                        overflowY: 'auto',
                                        paddingBottom: '16px',
                                        borderRadius: '18px',
                                        '&::-webkit-scrollbar': {
                                            width: '6px',
                                        },
                                        '&::-webkit-scrollbar-track': {
                                            backgroundColor: '#F1F3F4',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: '#70757A',
                                            borderRadius: '0',
                                            '&:hover': {
                                                backgroundColor: '#555',
                                            },
                                        },
                                    },
                                },
                                slotProps: {
                                    paper: {
                                        sx: {
                                            padding: '12px 8px',
                                            overflow: 'hidden',
                                            borderRadius: '18px',
                                            height: '330px',
                                        },
                                    },
                                },
                            }}
                            sx={{
                                border: 'none',
                                width: '100%',
                                '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '& .css-6hp17o-MuiList-root-MuiMenu-list': {
                                    borderRadius: '18px !important',
                                    minWidth: '350px',
                                },
                                '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
                                    {
                                        paddingRight: 0,
                                    },
                                '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                                    padding: 0,
                                    fontFamily: 'OpenReg',
                                    fontSize: 12,
                                    color: '#282D41',
                                },
                                '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiSelect-icon.MuiSelect-iconOutlined.css-hfutr2-MuiSvgIcon-root-MuiSelect-icon, .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiSelect-icon.MuiSelect-iconOutlined.MuiSelect-iconOpen.css-bpeome-MuiSvgIcon-root-MuiSelect-icon':
                                    {
                                        left: '100%',
                                    },
                            }}
                            value={selectedOption}
                            onChange={handleChange}
                            renderValue={selected => {
                                return (
                                    <div className={classes.selectedOption}>
                                        <LocalizedText label={{id: selected}} />
                                    </div>
                                );
                            }}
                        >
                            {filterOptions.map(opt => {
                                return (
                                    <MenuItem
                                        sx={theme => ({
                                            padding: '7px 16px',
                                            '& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
                                                color: theme.palette.primary.main,
                                            },
                                            '& .MuiRadio-root.Mui-checked': {color: theme.palette.primary.main},
                                            '&.Mui-selected': {
                                                backgroundColor: theme.palette.secondary.main,
                                                color: '#1C1B1F',
                                                fontSize: '16px',

                                                '&:hover': {
                                                    backgroundColor: theme.palette.secondary.main,
                                                },
                                            },
                                        })}
                                        key={opt.id}
                                        value={opt.value}
                                    >
                                        <FormControlLabel
                                            value={opt.value}
                                            control={<Radio checked={opt.value === selectedOption} />}
                                            label={<LocalizedText label={{id: opt.name, defaultMessage: opt.name}} />}
                                            sx={{
                                                '& .MuiTypography-root': {
                                                    color: opt.value === selectedOption ? '#15C370' : '#1C1B1F',
                                                },
                                            }}
                                        />
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <div className={classes.divider}></div>
                    <TextField
                        disabled={isAdmin}
                        sx={theme => ({
                            width: '90%',
                            fontFamily: 'OpenReg',
                            '& .MuiInputBase-input:focus': {
                                boxShadow: 'none',
                            },
                            '& .MuiInputBase-input::placeholder': {
                                fontFamily: 'OpenReg, sans-serif',
                                fontSize: '16px',
                                letterSpacing: '0.5px',
                                outline: 'none',
                            },
                            '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
                                fontSize: '12px',
                                color: theme.palette.text.secondary,
                                fontFamily: 'OpenReg',
                            },
                            '& input': {
                                padding: 0,
                                fontSize: '16px',
                            },

                            input: {
                                '&::placeholder': {
                                    fontFamily: 'OpenReg, sans-serif',
                                },
                            },
                            '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                        })}
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        placeholder={intl.formatMessage(localized.searchInputSidebar)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IoMdSearch size={22} color="#15C370" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className={classes.filterContainer}>
                    <div
                        onClick={e => {
                            if (isAdmin) {
                                return;
                            }
                            e.stopPropagation();
                            setIsFilterOpen(!isFilterOpen);
                        }}
                        className={classes.filterIcon}
                    >
                        <IoMdOptions />
                    </div>
                    <div
                        style={{
                            opacity: isFilterOpen ? '1' : '0',
                            zIndex: isFilterOpen ? 1 : -1,
                        }}
                        className={classes.filterBody}
                    >
                        <div
                            style={{
                                display: isTraveler || isCustomer ? 'none' : 'initial',
                            }}
                        >
                            <div className={classes.filterText}>
                                <LocalizedText label={localized.filterByRole} />
                            </div>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="All"
                                    name="radio-buttons-group"
                                    onChange={handleRoleSelect}
                                    value={selectedRole}
                                    sx={theme => ({
                                        '& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
                                            color: theme.palette.primary.main,
                                        },

                                        '& .MuiFormControlLabel-root': {
                                            height: '24px',
                                        },
                                        gap: '12px',
                                        marginTop: '16px',
                                    })}
                                >
                                    {roles.map(r => {
                                        return (
                                            <FormControlLabel
                                                value={r.value}
                                                control={<Radio />}
                                                label={<LocalizedText label={localized[r.value as keyof typeof localized]} />}
                                                key={r.id}
                                                sx={theme => ({
                                                    '& .MuiTypography-root': {
                                                        color:
                                                            r.value === selectedRole
                                                                ? theme.palette.primary.main
                                                                : theme.palette.text.secondary, // Change colors as needed
                                                    },
                                                })}
                                            />
                                        );
                                    })}
                                </RadioGroup>
                            </FormControl>
                        </div>

                        {isTraveler ? (
                            <div
                                style={{
                                    display: isTraveler ? 'initial' : 'none',
                                }}
                            >
                                <div className={classes.filterText}>
                                    <LocalizedText label={localized.sortBy} />
                                </div>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                        sx={theme => ({
                                            '& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
                                                color: theme.palette.primary.main,
                                            },

                                            '& .MuiFormControlLabel-root': {
                                                height: '24px',
                                            },
                                            gap: '12px',
                                            marginTop: '16px',
                                        })}
                                    >
                                        {travelers.map(r => {
                                            return (
                                                <FormControlLabel
                                                    value={r.value}
                                                    control={<Radio />}
                                                    label={<LocalizedText label={localized[r.value as keyof typeof localized]} />}
                                                    key={r.id}
                                                    sx={theme => ({
                                                        '& .MuiTypography-root': {
                                                            color:
                                                                r.value === selectedRole
                                                                    ? theme.palette.primary.main
                                                                    : theme.palette.text.secondary, // Change colors as needed
                                                        },
                                                    })}
                                                />
                                            );
                                        })}
                                    </RadioGroup>
                                </FormControl>
                                <div
                                    onClick={e => {
                                        e.stopPropagation();
                                        setIsTraveler(false);
                                        setSelectedRole('All');
                                    }}
                                    className={classes.goBackFilter}
                                >
                                    <CgArrowLongLeft />
                                    <LocalizedText label={localized.resetRole} />
                                </div>
                            </div>
                        ) : null}
                        {isCustomer ? (
                            <div
                                style={{
                                    display: isTraveler ? 'none' : 'initial',
                                }}
                            >
                                <div className={classes.filterText}>
                                    <LocalizedText label={{id: 'sortBy', defaultMessage: 'Sort by'}} />
                                </div>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                        sx={theme => ({
                                            '& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
                                                color: theme.palette.primary.main,
                                            },

                                            '& .MuiFormControlLabel-root': {
                                                height: '24px',
                                            },
                                            gap: '12px',
                                            marginTop: '16px',
                                        })}
                                    >
                                        {customers.map(r => {
                                            return (
                                                <FormControlLabel
                                                    value={r.value}
                                                    control={<Radio />}
                                                    label={<LocalizedText label={localized[r.value as keyof typeof localized]} />}
                                                    key={r.id}
                                                    sx={theme => ({
                                                        '& .MuiTypography-root': {
                                                            color:
                                                                r.value === selectedRole
                                                                    ? theme.palette.primary.main
                                                                    : theme.palette.text.secondary,
                                                        },
                                                    })}
                                                />
                                            );
                                        })}
                                    </RadioGroup>
                                </FormControl>
                                <div
                                    onClick={e => {
                                        e.stopPropagation();
                                        setIsCustomer(false);
                                        setSelectedRole('All');
                                    }}
                                    className={classes.goBackFilter}
                                >
                                    <CgArrowLongLeft />
                                    <LocalizedText label={localized.resetRole} />
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

            {/* ///////////// chat support //////// */}

            {/* ///////////// chat support //////// */}

            <div
                onScroll={e => {
                    if (e.currentTarget.classList.contains('chatlist') === false) {
                        e.currentTarget.classList.add('chatlist');
                    }
                }}
                className={classes.scrollContainer}
            >
                <div className={classes.contentContainer}>
                    {isAdmin ? null : (
                        <div
                            onClick={() => {
                                if (isMobile) {
                                    navigate('/chat-view-mobile/support');
                                    return;
                                }
                                navigate('/chat-view/support');
                            }}
                            className={`${classes.chatItem} ${
                                location.pathname.includes('/chat-view/support') ? classes.chatItemActive : classes.chatItemInactive
                            }`}
                        >
                            <div
                                className={classes.chatItemLogo}
                                style={{
                                    backgroundImage: `url(${chatLogo})`,
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <div className={classes.chatItemDetails}>
                                <div className={classes.textContainer}>
                                    <div className={classes.chatItemName}>Eelow</div>
                                    <p className={classes.chatItemSubtext}>
                                        <LocalizedText label={localized.helpSupport} />
                                    </p>
                                </div>
                            </div>
                            <div className={classes.dateUnreadContainer}>
                                <div className={classes.chatItemDate}>31 sep</div>
                                <div className={classes.chatItemBadge}>1</div>
                            </div>
                        </div>
                    )}

                    {chats.map(ch => {
                        if (isAdmin) {
                            return (
                                <AdminChatTab
                                    key={ch.id}
                                    name={ch.name}
                                    isPackage={ch.isPackage}
                                    rating={ch.rating}
                                    chatId={ch.id}
                                    requestText={ch.requestText}
                                    requestType={ch.requestType}
                                />
                            );
                        }
                        return (
                            <ChatTab
                                key={ch.id}
                                bgColor={ch.bgColor}
                                name={ch.name}
                                packageName={ch.packageName}
                                isPackage={ch.isPackage}
                                rating={ch.rating}
                                chatId={ch.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ChatListSidebar;
