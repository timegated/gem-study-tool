import React, { useState } from 'react';
import axios from 'axios';
import { createArr } from '../../../../utils/elementsArray';
import { changeHandler } from '../../../../utils/changeHandler';
import Input from '../../../Layout/Input/Input';
import style from './BasicAdd.css';

const Basic = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'gem name',
      },
      value: '',
    },
    species: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'species',
      },
      value: '',
    },
    variety: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'variety',
      },
      value: '',
    },
    crystal: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'crystal',
      },
      value: '',
    },
    habit: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'habit',
      },
      value: '',
    },
    chemical: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'chemical',
      },
      value: '',
    },
  });

  const onSubmit = (e) => {
    axios.post('/api/basic', basicInfo);
    e.preventDefault();
  };
  console.log(basicInfo);
  // from utils
  const elArr = createArr(basicInfo);

  return (
    <div className={style.addContent}>
      <h1>Basic Info</h1>
      <form onSubmit={onSubmit}>
        {elArr.map((el) => {
          return (
            <Input
              key={el.id}
              elType={el.config.elType}
              elConfig={el.config.elConfig}
              value={el.config.value}
              changed={(e) => changeHandler(e, el.id, basicInfo, setBasicInfo)}
            />
          );
        })}
        <button className={style.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Basic;
