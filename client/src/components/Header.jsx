import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Box component='footer' padding={3} sx={{ bgcolor: 'gray' }}>
      <Container maxWidth='lg'>
        <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
          <Typography
            component='h5'
            variant='h5'
            textTransform='capitalize'
            fontWeight={700}>
            Star Wars API
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
