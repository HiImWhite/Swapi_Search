import * as React from 'react';
import Footer from '../components/Footer';
import ProductHero from '../components/ProductHero';
import Header from '../components/Header';

function LandingPage() {
  return (
    <React.Fragment>
      <Header />
      <ProductHero />
      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;
