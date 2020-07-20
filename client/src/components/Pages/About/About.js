import React from 'react';
import styles from './About.css';

const About = () => {
    return (
        <div className={styles.aboutContent}>
            <h1 className={styles.title}>About</h1>
            <p className={styles.blurb}>Designed to be used as a study guide for gemological studies</p>
        </div>
    );
};

export default About;
