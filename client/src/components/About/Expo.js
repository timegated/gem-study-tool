/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Expo.module.css';

const Expo = (props) => {
  return (
    <div className={styles.ExpoContainer}>
      <div className={props.reverse ? styles.Expo : styles.Reverse}>
        <img src={props.image} alt={props.altText} />
        {props.children}
      </div>
    </div>
  );
};

export default Expo;
