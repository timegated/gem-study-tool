/* eslint-disable no-unused-vars */
import React from 'react';
import About from '../../About/About';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.HomeContent}>
        <h1 className={styles.Title}>Gem Study Tool</h1>
        <div className={styles.InfoContainer}>
          <h2 className={styles.InfoTitle}>Learn About Gems At Your Pace</h2>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
