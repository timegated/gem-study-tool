/* eslint-disable no-unused-vars */
import React from 'react';
import style from './Buttons.module.css';

const Buttons = (props) => {
  return (
    <>
      <input type={props.type} className={style.Button} />
    </>
  );
};

export default Buttons;
