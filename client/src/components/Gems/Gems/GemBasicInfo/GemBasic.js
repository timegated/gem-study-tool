import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './GemBasic.css';

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
    <div className={styles.gemBasicContent}>
      <h1>Gem Basic Info</h1>
    </div>
  );
};

export default GemBasic;
