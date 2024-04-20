import * as React from 'react';
import './Hero.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LogoCollection from '../logo-collection/LogoCollection';
import picture from '../assets/pic14.jpg';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        height: '100vh',
        width: 'auto',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'linear-gradient(180deg, #CEE5FD, #F0F4F8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        border:'none',
      }}
    >
      {/* Container 1: Contains Main hero section */}
      <Container
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          paddingTop: '20vh',
          paddingBottom: '2vh',
          flexGrow: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap:'4em'

        }}
      >
        {/* Stack containing the main title and subtitle. Inside is the stack containing the Call to Action Button */}
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%'} }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'left',
              textAlign: 'left',
              color: "#242424",
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Manage your&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: 'primary.main'
              }}
            >
              inventory
            </Typography>
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{ alignSelf: 'left', width: { sm: '100%', md: '100%' }, lineHeight: '25px', letterSpacing: '0.05em' }}
          >
            Effortlessly streamline your inventory management with our user-friendly app designed to help you track and organize your stock in real-time. Stockstream is the perfect solution for businesses looking to save time and reduce errors in their inventory management process.
          </Typography>

          {/* Stack containing the Get started button */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="left"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button variant="contained" endIcon={<ArrowRightAltIcon />}
              sx={{
                borderRadius:'10px',
                border: '1px solid black',
                paddingBlock: '10px',
                color: '#FOF4F8',
                backgroundColor:'#242424',
                boxShadow: '0.5px',
                transition:'all 0.15s ease-in',
                '&:hover': {
                  backgroundColor: '#242424',
                  color: '#F0F4F8',
                },
              }}>
              GET STARTED
            </Button>
          </Stack>
        </Stack>

        {/* This section contains the image */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: 'center',
            // height: '100%',
            width: '50%',
          }}>
          <div className='image_container'>
            <img className="hero_picture" src={picture} alt='hero_section_image' ></img>
          </div>
        </Box>
      </Container>

      {/* Container 2: This is the section containing logos */}
      <LogoCollection />
    </Box>
  );
}




