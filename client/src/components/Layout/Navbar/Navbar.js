import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import gemStudyLogo from '../../../images/ruby-gemstone-logo.png';

const Navbar = () => {
  return (
    <header className={style.header}>
      <div className={style.Logo}>
        <Link to="/" rel="noopener noreferrer" aria-label="logo">
          <img
            className={style.Img}
            src={gemStudyLogo}
            alt="gem study tools logo"
          />
        </Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/add">Add</Link>
        <Link to="/gems">Gems</Link>
      </nav>
    </header>
  );
};

export default Navbar;
