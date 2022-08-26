import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../assets/appLogo.png';
import SearchBar from './SearchBar'
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      color:'#fff'
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45} style={{borderRadius:'50px'} } />
    </Link>

    <SearchBar/>
    
  </Stack>
);

export default Navbar;
