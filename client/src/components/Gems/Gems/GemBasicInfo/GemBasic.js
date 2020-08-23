/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GemCard from './GemBasicCard';
import styles from './GemBasic.module.css';

const GemBasic = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getBasicData = async () => {
      const res = await axios.get('/api/basic');
      setData(res.data);
    };
    getBasicData();
  }, []);
  console.log(data);

  return (
    <div className={styles.basicContainer}>
      <h1>Basic Info</h1>
      <div className={styles.gemBasicContent}>
        <GemCard data={data} />
      </div>
    </div>
  );
};

export default GemBasic;
