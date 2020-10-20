/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Titles.module.css';

const HeaderOne = ({ elType, text }) => {
  let titleEl = null;

  switch (elType) {
    case (elType = 'h1'):
      titleEl = <h1 className={styles.TitleOne}> {text} </h1>;
      break;
    case (elType = 'h2'):
      titleEl = <h2 className={styles.TitleTwo}> {text} </h2>;
      break;
    case (elType = 'h3'):
      titleEl = <h3 className={styles.TitleThree}> {text} </h3>;
      break;
    case (elType = 'h4'):
      titleEl = <h4 className={styles.TitleFour}> {text} </h4>;
      break;
    case (elType = 'h5'):
      titleEl = <h5 className={styles.TitleFive}> {text} </h5>;
      break;
    case (elType = 'h6'):
      titleEl = <h6 className={styles.TitleSix}> {text} </h6>;
      break;
    default:
      console.log('Fallthrough to default statement');
  }

  return <>{titleEl}</>;
};

export default HeaderOne;
