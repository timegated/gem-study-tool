import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.css';

const Navbar = () => {
    return (
        <header className={style.header}>
            <h1>
          GemTools
            </h1>
            <nav>
                <Link to="/">Search Gems</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};

export default Navbar;
