import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import logo from '../assets/logo.png'

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
  width: '35px',
  height: 'auto',
  cursor: 'pointer',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      Stock_stream&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Newsletter() {
  return (
    <Box
    id='Newsletter'

      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
        backgroundImage: 'linear-gradient(180deg, #F0F4F8, #CEE5FD)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          maxWidth: 'lg'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '0px' }}>
              <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img
                  src={logo}
                  style={logoStyle}
                  alt="logo"
                />

                <Typography sx={{ color: 'black', fontWeight: 'bold', margin: '20px' }}> STOCK_STREAM </Typography>
              </a>
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                sx={{
                     '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                          // borderColor: 'gray',
                          borderRadius:'0px',
                          border:'0.5px solid #242424',

                        },
                       '&.Mui-focused fieldset': {
                        // borderColor: '#242424',
                        border:'0.5px solid #242424',
                        borderRadius:'0px'
                        //  boxShadow: '0 0 0 1px blue',
                        },
                      },
                    }}
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autocomplete: 'off',
                  ariaLabel: 'Enter your email address',
                }}
              />
              <Button variant="contained" color="primary" sx={{ flexShrink: 0, borderRadius:'0px', color:'#F0F4F8', backgroundColor:'#242424', '&:hover':{backgroundColor: '#242424'}, transirtion:'all 0.15s ease-in'}}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link color="text.secondary" href="#">
            Features
          </Link>
          <Link color="text.secondary" href="#">
            Testimonials
          </Link>
          <Link color="text.secondary" href="#">
            Highlights
          </Link>
          <Link color="text.secondary" href="#">
            Pricing
          </Link>
          <Link color="text.secondary" href="#">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link color="text.secondary" href="#">
            About us
          </Link>
          <Link color="text.secondary" href="#">
            Careers
          </Link>
          <Link color="text.secondary" href="#">
            Press
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link color="text.secondary" href="#">
            Terms
          </Link>
          <Link color="text.secondary" href="#">
            Privacy
          </Link>
          <Link color="text.secondary" href="#">
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
          maxWidth: 'lg'
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="#"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="#"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="#"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}