import React, { useState, useEffect } from 'react';

import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import {
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    CalendarMonthOutlined,
    TrendingUpOutlined,
    Groups,
    CheckCircle
} from "@mui/icons-material";
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../assets/logo-png.png';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { PublicOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import { icon } from 'leaflet';

const navItems = [
    // {
    //     text: "Dashboard",
    //     icon: <HomeOutlined />
    // },
    {
        text: "Client Facing",
        icon: null
    },
    {
        text: "Clients",
        icon: <Groups2Outlined />
    },
    // {
    //     text: "Projects",
    //     icon: <AssignmentIcon />
    // },
    {
        text: "Transactions",
        icon: <ReceiptLongOutlined />
    },
    {
        text: "Geography",
        icon: <PublicOutlined />
    },
    {
        text: "Employee Data",
        icon: null
    },
    {
        text: "Employees",
        icon: <PersonIcon />
    },
    {
        text:"Department Data",
        icon:null
    },
    {
        text: "Departments",
        icon: <ApartmentIcon />
    },
    {
        
    }
    // {
    //     text: "Project Teams",
    //     icon: <Groups />
    // },
    // {
    //     text: "Attendance",
    //     icon: <CheckCircle />
    // },
    // {
    //     text: "Management",
    //     icon: null
    // },
    // {
    //     text: "Leave",
    //     icon: <TimeToLeaveIcon />
    // },
    // {
    //     text: "Performance",
    //     icon: <TrendingUpOutlined />
    // },
    // {
    //     text: "Calendar",
    //     icon: <CalendarMonthOutlined />
    // },
];
const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile
}) => {
    const theme=useTheme()
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            backgroundColor:theme.palette.background.alt, 
                            color: 'white',
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: "sticky",
                            top: 0,
                            zIndex: 1,
                            padding: "1.5rem 2rem 2rem 3rem",
                        }}
                    >
                        <FlexBetween color="#660033">
                            <Box display="flex" alignItems="center" gap="0.5rem">
                                <Box component="img" src={logo} alt="Logo" sx={{ width: 160,scale:"1.7" }} />
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft sx={{ color: '#B6EADA' }} />
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                    <Box width="100%">
                        <List>
                            {navItems.map(({ text, icon }) => {
                                const isDashboard = text === "Dashboard";
                                if (!icon) {
                                    return (
                                        <Typography key={text} sx={{ m: "1.5rem 2rem 2rem 3rem", color: theme.palette.neutral.main }}>
                                            {text}
                                        </Typography>
                                    );
                                }
                                const lcText = text.toLowerCase();
                                return (
                                    <ListItem key={text}
                                        disablePadding
                                        sx={isDashboard ? { position: "sticky", top: 60, zIndex: 1, backgroundColor: '#301E67' } : {}}
                                    >
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/app/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor: active === lcText ? '#5B8FB9' : "transparent", // Soft blue for active
                                                color: active === lcText ? '#03001C' : '#B6EADA', // Dark navy for active text
                                            }}>
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color: active === lcText ? '#03001C' : '#B6EADA',
                                                }}>
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: "auto", color: theme.palette.neutral.main }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                        <br /><br />
                    </Box>
                </Drawer>
            )}
        </Box>
    );
}
export default Sidebar;