import React from 'react';
import style from './Input.css';

const Input = (props) => {
  let inputEl = null;
  switch (props.elType) {
    case 'input':
      inputEl = (
        <input
          name={props.name}
          {...props.elConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputEl = (
        <textarea
          name={props.name}
          {...props.elConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputEl = <select></select>;
      break;
    default:
      inputEl = (
        <input
          name={props.name}
          {...props.elConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className={style.inputGroup}>
      <label className={style.label}>{props.label}</label>
      {inputEl}
    </div>
  );
};

export default Input;
