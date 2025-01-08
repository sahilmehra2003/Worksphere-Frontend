import React, { useState } from 'react'
import {Box, useMediaQuery} from "@mui/material";
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
// import { useGetUserQuery } from '../../redux/Slices/Api';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Layout = () => {
  // this gives us a true or false boolean based on whether this min-width is achieved or not
  const isNonMobile=useMediaQuery("(min-width: 600px)") //for desktop screen this will be true
  const [isSidebarOpen,setIsSidebarOpen]=useState(true);
  // const userId=useSelector((state)=>state.theme.userId)
  // const {data}=useGetUserQuery(userId)
  // useEffect(() => {
  //   if (data) {
  //     console.log('User Data:', data);
  //   }
  // }, [data]);
  
  return (
    <Box  display={isNonMobile?"flex":"block"} width="100%" height="100%" >
    <Sidebar
    isNonMobile={isNonMobile}
    drawerWidth="250px"
    isSidebarOpen={isSidebarOpen}
    setIsSidebarOpen={setIsSidebarOpen}
    />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet/>
      </Box>
    </Box>

  )
}
export default Layout
