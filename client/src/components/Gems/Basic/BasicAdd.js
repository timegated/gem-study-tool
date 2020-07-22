import React, { useState } from 'react';
import axios from 'axios';
import styles from './BasicAdd.css';

const Basic = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    species: '',
    variety: '',
    crystal: '',
    habit: '',
    chemical: '',
  });

  const { name, species, variety, crystal, habit, chemical } = basicInfo;

  const onChange = (e) => {
    setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    axios.post('/api/basic', basicInfo);
    setBasicInfo({
      name: '',
      species: '',
      variety: '',
      crystal: '',
      habit: '',
      chemical: '',
    });
    e.preventDefault();
  };

  return (
    <div className={styles.addContent}>
      <h1>Basic Info</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="Name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="Species">Species</label>
          <input
            type="text"
            name="species"
            value={species}
            onChange={onChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="Variety">Variety</label>
          <input
            type="text"
            name="variety"
            value={variety}
            onChange={onChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="Crystal">Crystal</label>
          <input
            type="text"
            name="crystal"
            value={crystal}
            onChange={onChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="Habit">Habit</label>
          <input type="text" name="habit" value={habit} onChange={onChange} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="Chemical">Chemical</label>
          <input
            type="text"
            name="chemical"
            value={chemical}
            onChange={onChange}
          />
        </div>
        <button className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Basic;
