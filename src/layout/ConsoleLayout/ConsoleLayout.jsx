import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
import styles from './consoleLayout.module.css';

function ConsoleLayout() {
  return (
    <div>
      <Navbar />
      <div className={styles['app-route-container']}>
        <h1>This console</h1>
      </div>
      <Footer />
    </div>
  );
}

export default ConsoleLayout;
