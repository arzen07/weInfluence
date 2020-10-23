import React from 'react';
import './App.css';
import SignIn from './components/sign_in/SignIn';
import SignUp from './components/sign_up/SignUp';


import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import { HOME, SIGN_IN, SIGN_UP } from './core/constants';
import firebase from "./core/firebase"
import { AuthProvider } from './core/services/Auth';
import PrivateRoute from './core/services/Route';
import Home from './components/pages/Home.jsx';
import Plans from './components/pages/Plans.jsx';
import Services from './components/pages/Services.jsx';
import Footer from './components/pages/Footer.jsx';
import About from './components/pages/About.jsx';
import Navbar from './components/Navbar.jsx';
// const Home = () => {
//   return (
//     <div>
//       <h1>We Influence!!!</h1>
//       <button onClick={() => firebase.auth().signOut()}>Log out</button>
//     </div>
//   )
// }
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
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
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
