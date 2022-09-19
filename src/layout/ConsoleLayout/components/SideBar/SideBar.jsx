import React from 'react';
import NavButton from '../NavButton/NavButton';
import styles from './sideBar.module.css';

function SideBar() {
  return (
    <div className={styles['container']}>
      <NavButton />
      <NavButton />
      <NavButton />
    </div>
  );
}

export default SideBar;
