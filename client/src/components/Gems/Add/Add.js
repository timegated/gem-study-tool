import React, { useState } from 'react';
import BasicAdd from '../Forms/Basic/BasicAdd';
import Appearance from '../Forms/Appearance/Appearance';
import Misc from '../Forms/Misc/Misc';
import Source from '../Forms/Source/Source';
import MobileNav from '../../Layout/MobileNav/MobileNav';
import styles from './Add.module.css';

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
    <div className={styles.AddContent}>
      <h1>Select What Info You'd Like To Input</h1>
      <select value={select} onChange={onChange}>
        <option value=""></option>
        <option value={basic}>Basic</option>
        <option value={appearance}>Appearance</option>
        <option value={misc}>Misc</option>
        <option value={source}>Source</option>
      </select>
      {select === 'Basic' ? <BasicAdd /> : console.log('nothing here yet')}
      {select === 'Appearance' ? (
        <Appearance />
      ) : (
        console.log('nothing here yet')
      )}
      {select === 'Misc' ? <Misc /> : console.log('nothing here yet')}
      {select === 'Source' ? <Source /> : console.log('nothing here yet')}
      <MobileNav />
    </div>
  );
};

export default Add;
