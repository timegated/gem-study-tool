import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Add from './components/Gems/Add/Add';
import Gems from './components/Gems/Gems/Gems';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import './App.css';

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/add" component={Add} />
                    <Route exact path="/gems" component={Gems} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
