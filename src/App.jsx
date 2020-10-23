import React from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './components/pages/Home.jsx';
import Plans from './components/pages/Plans.jsx';
import Services from './components/pages/Services.jsx';
import Footer from './components/pages/Footer.jsx';
import About from './components/pages/About.jsx';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
     
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/plans' component={Plans}/>
      <Route exact path='/services' component={Services}/>
      <Route  exact path='/footer' component={Footer}/>
      <Route exact path='/about' component={About}/>
      <Redirect to= '/' />

    </Switch>
    </Router>
    </>
  );
}

export default App;
