/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './About.module.css';
import Expo from './Expo';
import gemImageOne from '../../images/gem_study_logo.png';
import gemImageTwo from '../../images/ruby-gemstone-logo.png';

const About = () => {
  return (
    <>
      <div className={styles.AboutContent}>
        <h1 className={styles.Title}>How To:</h1>
      </div>
      <Expo reverse={true} image={gemImageOne} altText="Hexagon and pearl">
        <p className={styles.Paragraph}>
          Let's say your studying gemology or working in the field of fine
          gemstones.
        </p>
      </Expo>
      <Expo image={gemImageTwo} altText="Sideways diamond">
        <p className={styles.Paragraph}>
          You ultimately need a quick and easy to keep track of and access what
          your studying in order to serve your clients or improve your overall
          knowledge.
        </p>
      </Expo>
      <Expo reverse={true} image={gemImageOne} altText="Hexagon and pearl">
        <p className={styles.Paragraph}>
          And that's what this app is for. Keeping what you know organized and
          easily accessible. Click 'Add' to get started.
        </p>
      </Expo>
    </>
  );
};

export default About;
