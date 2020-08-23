/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MobileNav from '../../Layout/MobileNav/MobileNav';
import styles from './Gems.module.css';

const Gems = () => {
  return (
    <div className={styles.gemContent}>
      <Link to="/gembasic" className={styles.gemLinks} href="#!">
        Basic Info
      </Link>
      <Link to="" className={styles.gemLinks} href="#!">
        Color Info
      </Link>
      <Link to="" className={styles.gemLinks} href="#!">
        Misc Info
      </Link>
      <Link to="" className={styles.gemLinks} href="#!">
        Source Info
      </Link>
      <MobileNav />
    </div>
  );
};

export default Gems;
