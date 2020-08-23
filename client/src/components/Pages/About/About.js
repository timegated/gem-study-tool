/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './About.css';

const About = () => {
  return (
    <div className={styles.aboutContent}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.blurb}>
        Designed to be used as a study guide for gemological studies.
        Information about gems has been separated into four categories of which
        users can utilize to enter whatever info they have on a gemstone
      </p>
    </div>
  );
};

export default About;
