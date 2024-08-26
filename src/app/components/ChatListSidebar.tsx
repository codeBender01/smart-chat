import {FC, RefObject, useEffect, useRef, useState} from 'react';
import {FaPenAlt} from 'react-icons/fa';
import {IoMdOptions, IoMdSearch} from 'react-icons/io';
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';
import '../../mui.css';
import '../../scrollbar.css';
import '../../cursor.css';
import {
    createTheme,
    FormControl,
    FormControlLabel,
    InputAdornment,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
    TextField,
    ThemeProvider,
} from '@mui/material';

import chats from 'src/common/pageData/chats';
import chatLogo from '../../common/assets/chatLogo.png';

import AdminChatTab from './AdminChatTab';
import ChatTab from './ChatTab';

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
        value: 'all',
    },
];

interface ChatListSidebarProps {
    isAdmin: boolean;
}

interface CursorProps {
    cursor: RefObject<HTMLDivElement>;
}

function moveCursor(e: MouseEvent, cursor: CursorProps['cursor']) {
    const x = e.clientX;
    const y = e.clientY;

    if (cursor.current) {
        cursor.current.style.left = `${x}px`;
        cursor.current.style.top = `${y}px`;
    }
}

const ChatListSidebar: FC<ChatListSidebarProps> = ({isAdmin}) => {
    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedRole, setSelectedRole] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const navigate = useNavigate();
    const isMobile = useMediaQuery({query: '(max-width: 850px)'});

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedOption(event.target.value);
    };

    const handleRoleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        setSelectedRole((event.target as HTMLInputElement).value);
    };

    const cursor = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => moveCursor(e, cursor);

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('click', () => {
            setIsFilterOpen(false);
        });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const selectTheme = createTheme({
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: '18px',
                        height: '330px',
                    },
                },
            },

            MuiMenuList: {
                styleOverrides: {
                    root: {
                        borderRadius: '18px',
                    },
                },
            },

            MuiMenuItem: {
                styleOverrides: {
                    root: {},
                },
            },

            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiInputBase-input::placeholder': {
                            fontFamily: 'OpenReg, sans-serif',
                            fontSize: '16px',
                            letterSpacing: '0.5px',
                            outline: 'none',
                        },
                    },
                },
            },
        },
    });

    return (
        <div className="w-[100%] bg-paleGray min-[850px]:min-w-[380px] min-[850px]:w-[35%]  py-4 px-4 lg:min-w-[450px]" id="sidebar">
            <div className="flex items-center gap-6">
                <ThemeProvider theme={selectTheme}>
                    <div className="border-inputBorderGray border-[1px] rounded-pill w-[90%] min-[850px]:w-[95%] py-[8px] pl-[24px] flex items-center">
                        <FormControl
                            sx={{
                                width: '5%',
                                minWidth: '18px',
                            }}
                        >
                            <Select
                                id="search-filter"
                                MenuProps={{
                                    MenuListProps: {
                                        sx: {
                                            maxHeight: '330px',
                                            overflowY: 'auto',
                                            paddingBottom: '16px',

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
                                        <div className="w-[100%] font-boldSans text-ellipsis text-nowrap overflow-hidden">{selected}</div>
                                    );
                                }}
                            >
                                {filterOptions.map(opt => {
                                    return (
                                        <MenuItem
                                            sx={{
                                                padding: '7px 16px',
                                                '& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
                                                    color: '#15C370',
                                                },
                                                '& .MuiRadio-root.Mui-checked': {color: '#15C370'},
                                                '&.Mui-selected': {
                                                    backgroundColor: '#f7f7f7 !important',
                                                    color: '#1C1B1F',
                                                    fontSize: '16px',

                                                    '&:hover': {
                                                        backgroundColor: '#f7f7f7',
                                                    },
                                                },
                                            }}
                                            key={opt.id}
                                            value={opt.value}
                                        >
                                            <FormControlLabel
                                                value={opt.value}
                                                control={<Radio checked={opt.value === selectedOption} />}
                                                label={opt.name}
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
                        <div className="h-[20px] w-[1px] bg-lineGray ml-8 mr-4"></div>
                        <TextField
                            sx={{
                                width: '90%',
                                fontFamily: 'OpenReg',
                                '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
                                    fontSize: '12px',
                                    color: '#838383',
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
                            }}
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            placeholder="Search by keywords"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IoMdSearch size={22} color="#15C370" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                </ThemeProvider>
                <div className="text-textColor text-[22px] relative p-2">
                    <div
                        onClick={e => {
                            e.stopPropagation();
                            setIsFilterOpen(!isFilterOpen);
                        }}
                        className="hover:bg-borderGray duration-150 rounded-[6px] cursor-pointer p-2"
                    >
                        <IoMdOptions />
                    </div>
                    <div
                        className="absolute bg-white right-[20%] top-[100%] p-6 rounded-[12px] text-md font-mainQuick font-semibold text-nowrap"
                        style={{
                            boxShadow:
                                '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
                            transition: 'opacity 312ms cubic-bezier(0.4, 0, 0.2, 1), transform 208ms cubic-bezier(0.4, 0, 0.2, 1)',
                            opacity: isFilterOpen ? '1' : '0',
                            zIndex: isFilterOpen ? 1 : -1,
                        }}
                    >
                        <div className="text-md font-boldQuick text-textColor">Filter by role</div>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="all"
                                name="radio-buttons-group"
                                onChange={handleRoleSelect}
                                sx={{
                                    '& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
                                        color: '#15C370',
                                    },

                                    '& .MuiFormControlLabel-root': {
                                        height: '24px',
                                    },
                                    gap: '12px',
                                    marginTop: '16px',
                                }}
                            >
                                {roles.map(r => {
                                    return (
                                        <FormControlLabel
                                            value={r.value}
                                            control={<Radio />}
                                            label={r.title}
                                            key={r.id}
                                            sx={{
                                                '& .MuiTypography-root': {
                                                    color: r.value === selectedRole ? '#15C370' : '#838383', // Change colors as needed
                                                },
                                            }}
                                        />
                                    );
                                })}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>

            {/* ///////////// chat support //////// */}

            {/* ///////////// chat support //////// */}

            <div ref={cursor} id="cursor" className="cursor-invisible">
                <FaPenAlt />
            </div>

            <div
                onScroll={e => {
                    if (e.currentTarget.classList.contains('chatlist') === false) {
                        e.currentTarget.classList.add('chatlist');
                    }
                }}
                className="overflow-y-auto max-h-[85vh] pb-12 cursor-none"
                onMouseEnter={() => {
                    cursor.current?.classList.remove('cursor-invisible');
                    cursor.current?.classList.add('cursor');
                }}
                onMouseLeave={() => {
                    cursor.current?.classList.add('cursor-invisible');
                    cursor.current?.classList.remove('cursor');
                }}
            >
                <div className="min-h-[100vh]">
                    {isAdmin ? null : (
                        <div
                            onClick={() => {
                                if (isMobile) {
                                    navigate('/chat-view-mobile/support');
                                    return;
                                }
                                navigate('/chat-view/support');
                            }}
                            className={` ${
                                location.pathname.includes('/chat-view/support') ? 'bg-activeChatGray' : 'bg-paleGray'
                            } w-[100%] border-b-[1px] border-borderGray py-6 px-2 flex gap-2 hover:bg-activeChatGray duration-200`}
                        >
                            <div
                                className="w-[70px] h-[70px] rounded-round flex self-center"
                                style={{
                                    backgroundImage: `url(${chatLogo})`,
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                }}
                            ></div>
                            <div className="flex items-center justify-between flex-1">
                                <div className="flex flex-col gap-2">
                                    <div className="text-textColor font-boldQuick text-md2 ">Eelow</div>
                                    <p className="font-mainSans text-sm text-lineGray">help and support</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-4">
                                <div className="text-lineGray text-sm font-mainSans uppercase">31 sep</div>
                                <div className="w-[20px] h-[20px] text-white bg-textColor flex items-center justify-center rounded-round">
                                    1
                                </div>
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
