/* eslint-disable no-unused-vars */
import React from 'react';
import About from '../../About/About';
import Title from '../../Layout/Titles/Titles';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.HomeContent}>
        <Title elType="h1" text="Gem Tools" />
        <div className={styles.TitleContainer}>
          <Title elType="h2" text="Organize your information" />
          <Title elType="h2" text="Save it for later" />
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
