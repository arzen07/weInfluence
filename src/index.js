import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router , Route} from 'react-router-dom'
import Plans from './components/pages/Plans';
import Footer from './components/pages/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';




 ReactDOM.render(
 
  
   <div>
   
   <App/>
    {/* <Plans />
    <Footer/> */}
    </div>



  
  ,
  document.getElementById('root')
);
serviceWorker.unregister();

