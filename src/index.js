import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Plans from './components/pages/Plans';
import Footer from './components/pages/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';



 ReactDOM.render(
  
  <Router>
   <Navbar/>
   <Home/>
    <Plans/>
  </Router>
  
  ,
  document.getElementById('root')
);


