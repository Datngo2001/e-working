import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import LandingPageRoute from '../../routes/LandingPageRoute';
import styles from './landingPageLayout.module.css';

function LandingPageLayout() {
  return (
    <div>
      <Navbar />
      <div className={styles['app-route-container']}>
        <LandingPageRoute />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
