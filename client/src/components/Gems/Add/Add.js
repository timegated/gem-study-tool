import React, { useState } from 'react';
import BasicAdd from '../Basic/BasicAdd';
import styles from './Add.css';

const Add = () => {
  return (
    <div className={styles.addContent}>
      <BasicAdd />
    </div>
  );
};

export default Add;
