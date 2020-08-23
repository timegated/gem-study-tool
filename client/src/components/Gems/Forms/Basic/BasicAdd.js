/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { createArr } from '../../../../utils/elementsArray';
import { changeHandler } from '../../../../utils/changeHandler';
import Input from '../../../Layout/Input/Input';
import Form from '../../../Layout/Form/Form';
import Button from '../../../Layout/Buttons/Buttons';
import style from './BasicAdd.module.css';

const Basic = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: {
      elType: 'input',
      label: 'Gem Name',
      elConfig: {
        type: 'text',
        placeholder: 'gem name',
      },
      value: '',
    },
    species: {
      elType: 'input',
      label: 'Species',
      elConfig: {
        type: 'text',
        placeholder: 'species',
      },
      value: '',
    },
    variety: {
      elType: 'input',
      label: 'Variety',
      elConfig: {
        type: 'text',
        placeholder: 'variety',
      },
      value: '',
    },
    crystal: {
      elType: 'input',
      label: 'Crystal',
      elConfig: {
        type: 'text',
        placeholder: 'crystal',
      },
      value: '',
    },
    habit: {
      elType: 'input',
      label: 'Habit',
      elConfig: {
        type: 'text',
        placeholder: 'habit',
      },
      value: '',
    },
    chemical: {
      elType: 'input',
      label: 'Chemical',
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

  // from utils
  const elArr = createArr(basicInfo);

  return (
    <div className={style.AddContent}>
      <h1>Basic Info</h1>
      <Form onSubmit={onSubmit} className={style.Form}>
        {elArr.map((el) => {
          return (
            <Input
              key={el.id}
              label={el.config.label}
              elType={el.config.elType}
              elConfig={el.config.elConfig}
              value={el.config.value}
              changed={(e) => changeHandler(e, el.id, basicInfo, setBasicInfo)}
            />
          );
        })}
        <Button type="submit" />
      </Form>
    </div>
  );
};

export default Basic;
