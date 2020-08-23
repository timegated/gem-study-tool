/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createArr } from '../../../../utils/elementsArray';
import { changeHandler } from '../../../../utils/changeHandler';
import Input from '../../../Layout/Input/Input';
import Form from '../../../Layout/Form/Form';
import Button from '../../../Layout/Buttons/Buttons';
import style from './Source.css';
import axios from 'axios';

const Source = () => {
  const [source, setSource] = useState({
    name: {
      elType: 'input',
      label: 'Gem Name',
      elConfig: {
        type: 'text',
        placeholder: 'gem name',
      },
      value: '',
    },
    primary: {
      elType: 'textarea',
      label: 'Primary Source',
      elConfig: {
        type: 'text',
        placeholder: 'primary source',
      },
      value: '',
    },
    mines: {
      elType: 'textarea',
      label: 'Mining Sources',
      elConfig: {
        type: 'text',
        placeholder: 'mining sources',
      },
      value: '',
    },
    mainConsume: {
      elType: 'textarea',
      label: 'Main Consumer',
      elConfig: {
        type: 'text',
        placeholder: 'main consumer',
      },
      value: '',
    },
    manu: {
      elType: 'textarea',
      label: 'Manufacturing',
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
      <Form onSubmit={onSubmit}>
        {elArr.map((el) => {
          return (
            <Input
              key={el.id}
              elType={el.config.elType}
              label={el.config.label}
              elConfig={el.config.elConfig}
              value={el.config.value}
              change={(e) => changeHandler(e, el.id, source, setSource)}
            />
          );
        })}
        <Button type="Submit" />
      </Form>
    </div>
  );
};

export default Source;
