import React from 'react';
import ConsoleRoute from '../../routes/ConsoleRoute';
import SideBar from './components/SideBar/SideBar';
import styles from './consoleLayout.module.css';
import ConsoleAppBar from './components/ConsoleAppbar/ConsoleAppbar';

function ConsoleLayout() {
  return (
    <div className={styles['container']}>
      <ConsoleAppBar />
      <div className={styles['body-container']}>
        <div className={styles['sidebar-container']}>
          <SideBar />
        </div>
        <div className={styles['route-container']}>
          <ConsoleRoute />
        </div>
      </div>
    </div>
  );
}

export default ConsoleLayout;
