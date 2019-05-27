import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from './nav-bar/nav';
import Dashboard from './page';
import Home from '../views/Home/Home.jsx';
import Login from './Register/Login.jsx';
import Signup from './Register/Signup.jsx';
 

class Wrapper extends React.Component {
  render() {
    return (
      <div className="Page">
              <Nav />
               <Route path='/' exact component={Home} />
               <Route path='/login' exact component={Login} />
               <Route path='/signup' exact component={Signup} />
               {/* <Route path='/' exact component={Home} /> */}
      </div>
    );
  }
}

export default Wrapper;
