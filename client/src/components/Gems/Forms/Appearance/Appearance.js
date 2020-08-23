/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createArr } from '../../../../utils/elementsArray';
import { changeHandler } from '../../../../utils/changeHandler';
import axios from 'axios';
import Input from '../../../Layout/Input/Input';
import Form from '../../../Layout/Form/Form';
import Button from '../../../Layout/Buttons/Buttons';
import style from './Appearance.module.css';

const Appearance = () => {
  const [appear, setAppear] = useState({
    name: {
      elType: 'input',
      label: 'Gem Name',
      elConfig: {
        type: 'text',
        placeholder: 'gem name',
      },
      value: '',
    },
    colorAgent: {
      elType: 'input',
      label: 'Coloring Agent',
      elConfig: {
        type: 'text',
        placeholder: 'coloring agent',
      },
      value: '',
    },
    caEffects: {
      elType: 'input',
      label: 'Color Agent Effects',
      elConfig: {
        type: 'text',
        placeholder: 'color agent effects',
      },
      value: '',
    },
    phen: {
      elType: 'textarea',
      label: 'Phenomena',
      elConfig: {
        type: 'text',
        placeholder: 'phenomena',
      },
      value: '',
    },
    color: {
      elType: 'input',
      label: 'Color',
      elConfig: {
        type: 'text',
        placeholder: 'color',
      },
      value: '',
    },
    fineCol: {
      elType: 'input',
      label: 'Fine Color',
      elConfig: {
        type: 'text',
        placeholder: 'fine color',
      },
      value: '',
    },
    opacity: {
      elType: 'input',
      label: 'Opacity',
      elConfig: {
        type: 'text',
        placeholder: 'opacity',
      },
      value: '',
    },
    fineTone: {
      elType: 'input',
      label: 'Fine Tone',
      elConfig: {
        type: 'text',
        placeholder: 'fine tone',
      },
      value: '',
    },
    fineSat: {
      elType: 'input',
      label: 'Fine Saturation',
      elConfig: {
        type: 'text',
        placeholder: 'fine saturation',
      },
      value: '',
    },
    clarity: {
      elType: 'input',
      label: 'Clarity',
      elConfig: {
        type: 'text',
        placeholder: 'clarity',
      },
      value: '',
    },
    clarityType: {
      elType: 'input',
      label: 'Clarity Type',
      elConfig: {
        type: 'text',
        placeholder: 'clarity type',
      },
      value: '',
    },
    cut: {
      elType: 'input',
      label: 'Cut',
      elConfig: {
        type: 'text',
        placeholder: 'cut',
      },
      value: '',
    },
  });

  const onSubmit = (e) => {
    axios.post('/api/appear', appear);
    e.preventDefault();
  };
  // from utils
  const elArr = createArr(appear);
  return (
    <div className={style.AppearanceContent}>
      <h1>Appearance</h1>
      <Form onSubmit={onSubmit}>
        {elArr.map((el) => {
          return (
            <Input
              key={el.id}
              label={el.config.label}
              elType={el.config.elType}
              elConfig={el.config.elConfig}
              value={el.config.value}
              changed={(e) => changeHandler(e, el.id, appear, setAppear)}
            />
          );
        })}
        <Button type="submit" />
      </Form>
    </div>
  );
};

export default Appearance;
