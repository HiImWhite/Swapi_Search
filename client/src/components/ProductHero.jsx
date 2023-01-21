import * as React from 'react';
import Typography from '@mui/material/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
        opacity: '0.9',
      }}>
      {/* Increase the network loading priority of the background image. */}
      <Typography
        color='inherit'
        align='center'
        variant='h2'
        marked='center'></Typography>
      <Typography
        color='inherit'
        align='center'
        variant='h5'
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}></Typography>
    </ProductHeroLayout>
  );
}
