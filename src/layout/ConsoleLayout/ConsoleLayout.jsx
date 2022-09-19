import React from 'react';
import ConsoleRoute from '../../routes/ConsoleRoute';
import Footer from '../components/Footer/Footer';
import SideBar from './components/SideBar/SideBar';
import styles from './consoleLayout.module.css';
import ConsoleAppBar from './components/ConsoleAppbar/ConsoleAppbar';

function ConsoleLayout() {
  return (
    <div className={styles['container']}>
      <ConsoleAppBar />
      <div className={styles['body-container']}>
        <SideBar />
        <div className={styles['route-container']}>
          <ConsoleRoute />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConsoleLayout;
