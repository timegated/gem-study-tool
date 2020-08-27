/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.Header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gems">Gems</Link>
        <Link className={styles.Cta} to="/add">
          Add
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
