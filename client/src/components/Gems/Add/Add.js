import React, { useState } from 'react';
import Input from '../../Layout/Input/Input';
import styles from './Add.css';

const Add = () => {
    const [element, setElement] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Gem Name'
            },
            value: ''
        },
        color: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Color'
            },
            value: ''
        }
    });
    const addGem = (e) => {
        console.log(e);
        e.preventDefault();
    };
    const inputChangedHandler = (e, inputId) => {
        const updateGemForm = {
            ...element
        };
        const updatedFormElement = {
            ...element[inputId]
        };
        updatedFormElement.value = e.target.value;
        updateGemForm[inputId] = updatedFormElement;

        setElement({ element: updateGemForm });
    };
    const formElements = [];
    for (let key in element) {
        console.log(key);
        formElements.push({
            id: key,
            config: element[key]
        });
    }
    console.log(formElements);
    let form = (
        <form onSubmit={addGem} className={styles.addForm}>
            {formElements.map(formElement => (
                <Input
                    className={styles.input}
                    label={formElement.config.elementConfig.placeholder}
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => inputChangedHandler(event, formElement.id)}
                />
            ))}
        </form>
    );
    console.log(typeof form);
    return (
        <div className={styles.addContent}>
            <h1>Add a Gem</h1>
            {form}
        </div>

    );
};

export default Add;
