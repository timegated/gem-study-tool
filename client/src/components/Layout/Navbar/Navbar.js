/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
        <Link to="/gems">Gems</Link>
      </nav>
    </header>
  );
};

export default Navbar;
