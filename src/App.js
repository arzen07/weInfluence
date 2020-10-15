import React from 'react';
import './App.css';
import SignIn from './components/sign_in/SignIn';
import SignUp from './components/sign_up/SignUp';
import Nav from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HOME, SIGN_IN, SIGN_UP } from './core/constants';
import firebase from "./core/firebase"
import { AuthProvider } from './core/services/Auth';
import PrivateRoute from './core/services/Route';
const Home = () => {
  return (
    <div>
      <h1>We Influence!!!</h1>
      <button onClick={() => firebase.auth().signOut()}>Log out</button>
    </div>
  )
}
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path={SIGN_IN} component={SignIn} />
            <Route exact path={SIGN_UP} component={SignUp} />
            <PrivateRoute exact path={HOME} component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
