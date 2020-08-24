/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../../Layout/Navbar/Navbar';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.HomeContent}>
      <Navbar />
      <h1 className={styles.Title}>Gem Study Tool</h1>
      <div className={styles.InfoContainer}>
        <h2 className={styles.InfoTitle}>Learn About Gems Faster.</h2>
      </div>
    </div>
  );
};

export default Home;
