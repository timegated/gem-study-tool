/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Mobile.Nav.module.css';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  return (
    <div className={styles.MobileNavContainer}>
      <Link className={styles.MobileLinks} to="/">
        Home
      </Link>
      <Link className={styles.MobileLinks} to="/add">
        Add
      </Link>
      <Link className={styles.MobileLinks} to="/gems">
        Gems
      </Link>
    </div>
  );
};

export default MobileNav;
