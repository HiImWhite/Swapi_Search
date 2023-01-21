import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

const AppFooter = () => {
  return (
    <Box component='footer' sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth='lg' sx={{ my: 2 }}>
        <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
            }}>
            <Typography
              component='h5'
              variant='h5'
              textTransform='capitalize'
              fontWeight={700}>
              Witam
            </Typography>
            <Typography
              color='#424245'
              variant='p'
              underline='none'
              textTransform='capitalize'></Typography>
            <Typography
              color='#424245'
              variant='p'
              underline='none'
              textTransform='capitalize'></Typography>
          </List>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default AppFooter;
