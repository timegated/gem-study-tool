import React from 'react';
import styles from './Input.css';

const Input = (props) => {
    let inputEl = null;


    switch (props.elementType) {
        case ('input'):
            inputEl = (<input
                className={styles.inputText}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />);
            break;
        default:
            console.log('error');
    }
    return (
        <div className={styles.input}>
            <label className={styles.label}>{props.label}</label>
            {inputEl}
        </div>
    );
};

export default Input;
