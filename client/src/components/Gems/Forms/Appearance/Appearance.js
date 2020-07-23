import React, { useState } from 'react';
import { createArr } from '../../../../utils/elementsArray';
import axios from 'axios';
import Input from '../../../Layout/Input/Input';
import style from './Appearance.css';

const Appearance = () => {
  const [appear, setAppear] = useState({
    name: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'gem name',
      },
      value: '',
    },
    colorAgent: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'coloring agent',
      },
      value: '',
    },
    caEffects: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'color agent effects',
      },
      value: '',
    },
    phen: {
      elType: 'textarea',
      elConfig: {
        type: 'text',
        placeholder: 'phenomena',
      },
      value: '',
    },
    color: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'color',
      },
      value: '',
    },
    fineCol: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'fine color',
      },
      value: '',
    },
    opacity: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'opacity',
      },
      value: '',
    },
    fineTone: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'fine tone',
      },
      value: '',
    },
    fineSat: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'fine saturation',
      },
      value: '',
    },
    clarity: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'clarity',
      },
      value: '',
    },
    clarityType: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'clarity type',
      },
      value: '',
    },
    cut: {
      elType: 'input',
      elConfig: {
        type: 'text',
        placeholder: 'cut',
      },
      value: '',
    },
  });
  const onChange = (e, elId) => {
    const updatedAppear = {
      ...appear,
    };
    const updatedFormEl = {
      ...updatedAppear[elId],
    };
    updatedFormEl.value = e.target.value;
    updatedAppear[elId] = updatedFormEl;
    setAppear(updatedAppear);
  };

  const onSubmit = (e) => {
    axios.post('/api/appearance', appear);
    e.preventDefault();
  };
  // from utils
  const elArr = createArr(appear);
  // console.log(appear);
  return (
    <div className={style.appearanceContent}>
      <h1>Appearance</h1>
      <form onSubmit={onSubmit}>
        {elArr.map((el) => {
          return (
            <Input
              key={el.id}
              elType={el.config.elType}
              elConfig={el.config.elConfig}
              value={el.config.value}
              changed={(e) => onChange(e, el.id)}
            />
          );
        })}
        <button className={style.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Appearance;
