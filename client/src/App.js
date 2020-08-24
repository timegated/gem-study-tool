/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Add from './components/Gems/Add/Add';
import Gems from './components/Gems/Gems/Gems';
import Navbar from './components/Layout/Navbar/Navbar';
import GemBasic from './components/Gems/Gems/GemBasicInfo/GemBasic';
// import Footer from './components/Layout/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/gems" component={Gems} />
          <Route exact path="/gembasic" component={GemBasic} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
