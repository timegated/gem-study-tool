/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createArr } from '../../../../utils/elementsArray';
import { changeHandler } from '../../../../utils/changeHandler';
import axios from 'axios';
import Input from '../../../Layout/Input/Input';
import Form from '../../../Layout/Form/Form';
import Button from '../../../Layout/Buttons/Buttons';
import style from './Misc.css';

const Misc = () => {
  const [misc, setMisc] = useState({
    name: {
      elType: 'input',
      label: 'Gem Name',
      elConfig: {
        type: 'text',
        placeholder: 'gem name',
      },
      value: '',
    },
    rockType: {
      elType: 'input',
      label: 'Rock-Type',
      elConfig: {
        type: 'text',
        placeholder: 'rock type',
      },
      value: '',
    },
    deposit: {
      elType: 'textarea',
      label: 'Deposit',
      elConfig: {
        type: 'text',
        placeholder: 'deposit',
      },
      value: '',
    },
    formation: {
      elType: 'input',
      label: 'Formation',
      elConfig: {
        type: 'text',
        placeholder: 'formation',
      },
      value: '',
    },
    treat: {
      elType: 'input',
      label: 'Treatment',
      elConfig: {
        type: 'text',
        placeholder: 'treatment',
      },
      value: '',
    },
    treatRes: {
      elType: 'textarea',
      label: 'Treatment Result',
      elConfig: {
        type: 'text',
        placeholder: 'treatment result',
      },
      value: '',
    },
    imit: {
      elType: 'textarea',
      label: 'Imitations',
      elConfig: {
        type: 'text',
        placeholder: 'imitations',
      },
      value: '',
    },
    synth: {
      elType: 'textarea',
      label: 'Synthetics',
      elConfig: {
        type: 'text',
        placeholder: 'synthetics',
      },
      value: '',
    },
    mohs: {
      elType: 'input',
      label: 'Mohs Number',
      elConfig: {
        type: 'text',
        placeholder: 'mohs number',
      },
      value: '',
    },
    avgSize: {
      elType: 'input',
      label: 'Average Size',
      elConfig: {
        type: 'text',
        placeholder: 'average size',
      },
      value: '',
    },
    trade: {
      elType: 'textarea',
      label: 'Trade Terms',
      elConfig: {
        type: 'text',
        placeholder: 'trade terms',
      },
      value: '',
    },
    funFacts: {
      elType: 'textarea',
      label: 'Fun Facts',
      elConfig: {
        type: 'text',
        placeholder: 'fun facts',
      },
      value: '',
    },
  });

  const onSubmit = (e) => {
    axios.post('/api/misc', misc);
    e.preventDefault();
  };
  const elArr = createArr(misc);
  return (
    <div className={style.miscContent}>
      <h1>Miscellaneous Info</h1>
      <Form onSubmit={onSubmit}>
        {elArr.map((el) => {
          return (
            <Input
              key={el.id}
              elType={el.config.elType}
              label={el.config.label}
              elConfig={el.config.elConfig}
              value={el.config.value}
              change={(e) => changeHandler(e, el.id, misc, setMisc)}
            />
          );
        })}
        <Button type="Submit" />
      </Form>
    </div>
  );
};

export default Misc;
