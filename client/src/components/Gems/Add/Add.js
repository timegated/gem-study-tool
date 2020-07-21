import React, { useState } from 'react';
import styles from './Add.css';

const Add = () => {
    const [element, setElement] = useState({
        name: '',
        color: '',
        opacity: ''
    });

    const { name, color, opacity } = element;

    const addGem = (e) => {
        console.log(e);
        e.preventDefault();
    };

    const onChange = (e) => {
        setElement({ ...element, [e.target.name]: e.target.value });
    };

    console.log(typeof form);
    return (
        <div className={styles.addContent}>
            <h1>Add a Gem</h1>
            <form onSubmit={addGem}>
                <div className={styles.inputGroup}>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="Color">Color</label>
                    <input type="text" name="color" value={color} onChange={onChange} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="Opacity">Opacity</label>
                    <input type="text" name="opacity" value={opacity} onChange={onChange} />
                </div>
                <button className={styles.submitButton}>Submit</button>
            </form>
        </div>

    );
};

export default Add;
