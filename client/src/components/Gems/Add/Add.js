import React, { useState } from 'react';
import BasicAdd from '../Forms/Basic/BasicAdd';
import Appearance from '../Forms/Appearance/Appearance';
import styles from './Add.css';

const Add = () => {
  const [select, setSelect] = useState({
    basic: 'Basic',
    appearance: 'Appearance',
    misc: 'Misc',
    source: 'Source',
  });
  const { basic, appearance, misc, source } = select;
  const onChange = (e) => {
    setSelect(e.target.value);
  };
  return (
    <div className={styles.addContent}>
      <h1>Select What Info You'd Like To Input</h1>
      <select value={select} onChange={onChange}>
        <option value=""></option>
        <option value={basic}>Basic</option>
        <option value={appearance}>Appearance</option>
        <option value={misc}>Misc</option>
        <option value={source}>Source</option>
      </select>
      {select === 'Basic' ? <BasicAdd /> : console.error('error')}
      {select === 'Appearance' ? <Appearance /> : console.error('error')}
    </div>
  );
};

export default Add;
