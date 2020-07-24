import React, { useState } from 'react';
import { createArr } from '../../../../utils/elementsArray';
import axios from 'axios';
import Input from '../../../Layout/Input/Input';
import style from './Misc.css';

const Misc = () => {
  const [misc, setMisc] = useState({
    name: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'gem name',
      },
      value: '',
    },
    rockType: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'rock type',
      },
      value: '',
    },
    deposit: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'deposit',
      },
      value: '',
    },
    formation: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'formation',
      },
      value: '',
    },
    treat: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'treatment',
      },
      value: '',
    },
    treatRes: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'treatment result',
      },
      value: '',
    },
    imit: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'imitations',
      },
      value: '',
    },
    synth: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'synthetics',
      },
      value: '',
    },
    mohs: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'mohs number',
      },
      value: '',
    },
    avgSize: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'average size',
      },
      value: '',
    },
    trade: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'trade terms',
      },
      value: '',
    },
    funFacts: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'fun facts',
      },
      value: '',
    },
  });
  const onChange = (e, elId) => {
    const updatedState = {
      ...misc,
    };
    const updatedFormEl = {
      ...updatedState[elId],
    };
    updatedFormEl.value = e.target.value;
    updatedState[elId] = updatedFormEl;
    setMisc(updatedState);
  };
  const onSubmit = (e) => {
    axios.post('/api/source', misc);
    e.preventDefault();
  };
  const elArr = createArr(misc);
  return (
    <div className={style.miscContent}>
      <h1>Miscellaneous Info</h1>
      <form onSubmit={onSubmit}>
        {elArr.map((el) => {
          return (
            <Input
              key={el.id}
              elType={el.config.elType}
              elConfig={el.config.elConfig}
              value={el.config.value}
              change={(e) => onChange(e, el.id)}
            />
          );
        })}
        <button className={style.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Misc;
