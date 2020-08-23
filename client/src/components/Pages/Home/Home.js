/* eslint-disable no-unused-vars */
import React from 'react';
import About from '../../About/About';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.HomeContent}>
      <h1 className={styles.Title}>Gem Study Tool</h1>
      <div className={styles.InfoContainer}>
        <h2 className={styles.infoTitle}>What this is: </h2>
        <p className={styles.InfoBlock}>
          A lot of information you find out there about gemstones can be
          confusing, dense, and just simply hard to understand.Enter any
          information you find out there on gems into one of the forms in the
          'Add' section of this app. Organize what you're learning This resource
          was created to simplify that for you, take what you find and format it
          in a way that's easier for you to understand. Take control of how you
          want to read your info. It'll be here when you get back.
        </p>
      </div>
      <About />
    </div>
  );
};

export default Home;
