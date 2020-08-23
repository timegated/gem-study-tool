/* eslint-disable no-unused-vars */
import React from 'react';
import style from './Form.module.css';

const Form = (props) => {
  return (
    <form className={style.Form} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
