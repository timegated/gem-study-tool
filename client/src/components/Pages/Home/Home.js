import React from 'react';
import MobileNav from '../../Layout/MobileNav/MobileNav';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.HomeContent}>
      <h1 className={styles.Title}>Gem Study Tool</h1>
      <div className={styles.InfoContainer}>
        <p className={styles.InfoBlock}>
          A lot of information you find out there about gemstones can be
          confusing, dense, and just simply hard to understand
        </p>
        <p className={styles.InfoBlock}>
          Enter any information you find out there on gems into one of the forms
          in the 'Add' section of this app
        </p>
        <p className={styles.InfoBlock}>Organize what you're learning</p>
        <p className={styles.InfoBlock}>
          This resource was created to simplify that for you, take what you find
          and format it in a way that's easier for you to understand
        </p>
        <p className={styles.InfoBlock}>
          Take control of how you want to read your info
        </p>
        <p className={styles.InfoBlock}>It'll be here when you get back</p>
          </div>
          <MobileNav />
    </div>
  );
};

export default Home;
