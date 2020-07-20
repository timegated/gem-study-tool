import React from 'react';
import axios from 'axios';
import styles from './Home.css';

const Home = () => {
    const getRequest = async () => {
        const res = await axios.get('/api/test');
        console.log(res);
    };
    return (
        <div className={styles.homeContent}>
            <h1 className={styles.title}>Gem Study Tool</h1>
            <button className={styles.button} onClick={getRequest}>Get Request</button>
        </div>
    );
};

export default Home;
