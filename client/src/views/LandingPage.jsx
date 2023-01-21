import * as React from 'react';
import AppFooter from '../components/AppFooter';
import ProductHero from '../components/ProductHero';
import AppBar from '../components/AppBar';

function LandingPage() {
  return (
    <React.Fragment>
      <AppBar />
      <ProductHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default LandingPage;
