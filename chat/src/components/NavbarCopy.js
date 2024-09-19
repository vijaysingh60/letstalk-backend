import Box from '@mui/material/Box';
import logo from "/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

function Navbar() {

    return (
        <>
            <Box component={"nav"}  sx={{
          width: 1,
          height: 115,
          display: 'flex', alignItems : 'center'
        }}
            id='nav'

        >
                <Box component={"img"} id='left' src={logo}  sx={{height: '1', }} >

                    
                </Box>
                
                <Box component={"div"} id='mid' sx={{display : 'flex', alignItems: 'center', justifyContent: 'center', width: '0.35', height: '1'}}>

                    <div className="search">
                        <MenuIcon id='mi'></MenuIcon>
                        <input type="text" className='searchbar' />
                        <SearchIcon id='si'></SearchIcon>
                    </div>

                </Box>
                
                <Box component={"div"} id='right' sx={{display : 'flex', alignItems: 'center', justifyContent: 'right', width: '0.5', height: '1'}}>

                    <div className='agrp'>
                        <a href="">Learning Centre</a><a href="">About us</a>
                       
                    </div>
                    <div className="bgrp">
                    <button className='reg'><AccountCircleIcon></AccountCircleIcon></button>
                    </div>

                </Box>
            </Box>
        </>
    );

}

export default Navbar;