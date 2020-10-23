import React from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './components/pages/Home.jsx';
import Plans from './components/pages/Plans.jsx';
import Services from './components/pages/Services.jsx';
import Footer from './components/pages/Footer.jsx';
import About from './components/pages/About.jsx';
import './App.css';
import Navbar from './components/Navbar.jsx';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from './components/sign_in/SignIn';
import SignUp from './components/sign_up/SignUp';
import { HOME, SIGN_IN, SIGN_UP } from './core/constants';
import { AuthProvider } from './core/services/Auth';
function App() {
  return (
    <>
      <AuthProvider>
    <Router>
     
    <Navbar/>
    <Switch>
    <Route exact path={SIGN_IN} component={SignIn} />
      <Route exact path={SIGN_UP} component={SignUp} />
      {/* <PrivateRoute exact path={HOME} component={Home} /> */}
      <Route exact path='/' component={Home}/>
      <Route exact path='/plans' component={Plans}/>
      <Route exact path='/services' component={Services}/>
      <Route  exact path='/footer' component={Footer}/>
      <Route exact path='/about' component={About}/>
      <Redirect to= '/' />

    </Switch>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
