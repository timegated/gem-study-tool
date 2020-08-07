import React, { useState } from 'react';
import { createArr } from '../../../../utils/elementsArray';
import { changeHandler } from '../../../../utils/changeHandler';
import Input from '../../../Layout/Input/Input';
import style from './Source.css';
import axios from 'axios';

const Source = () => {
  const [source, setSource] = useState({
    name: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'gem name',
      },
      value: '',
    },
    primary: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'primary source',
      },
      value: '',
    },
    mines: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'mining sources',
      },
      value: '',
    },
    mainConsume: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'main consumer',
      },
      value: '',
    },
    manu: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'manufacturing',
      },
    },
  });

  const onSubmit = (e) => {
    axios.post('/api/source', source);
    e.preventDefault();
  };
  const elArr = createArr(source);
  return (
    <div className={style.sourceContent}>
      <h1>Source Info</h1>
      <form onSubmit={onSubmit}>
        {elArr.map((el) => {
          return (
            <Input
              key={el.id}
              elType={el.config.elType}
              elConfig={el.config.elConfig}
              value={el.config.value}
              change={(e) => changeHandler(e, el.id, source, setSource)}
            />
          );
        })}
        <button className={style.submitButton}>Submit</button>

      </form>
    </div>
  );
};

export default Source;
