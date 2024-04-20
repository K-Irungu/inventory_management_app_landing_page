import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png'


function Navbar() {

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuItems = ["Features", "Testimonials", "Newsletter"].map((element) => {
        return( 
        <MenuItem onClick={() => scrollToSection(`${element}`)} sx={{ py: '6px', px: '12px' }}>
             <Typography variant="body2" color="black"> {element} </Typography>
        </MenuItem>)
    })

    return (
        <div >
            <AppBar position='fixed' sx={{ boxShadow: 0, bgcolor: 'transparent', mt: 2, backgroundImage: 'none' }} >
                <Container maxWidth="lg" >
                    <Toolbar variant="regular"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderRadius: '20px',
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                        }}>

                        <Box
                            sx={{
                                zIndex: -1,
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',

                            }}
                        >
                            <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                                <img
                                    src={logo}
                                    style={{    
                                        width: '35px',
                                        height:'auto',
                                        cursor:'pointer'
                                    }}
                                    alt="logo"
                                />
                                <Typography sx={{ color: 'black', fontWeight: 'bold', margin: '20px' }}> STOCK_STREAM </Typography>
                            </a>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '4em', marginInline: 'auto' }}>
                                {menuItems}
                            </Box>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            <Button sx={{ 
                                paddingInline: '15px', 
                                color: 'white', 
                                background:'#242424', 
                                borderRadius:'10px',
                                '&:hover':{
                                    background:'#242424'
                                }
                                }}
                            > Sign In </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}



export default Navbar;