import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './nav-bar/nav';
import Register from './register/register';
import DashBorad from './dashboard'



function Main() {
    return (
        <div className="Main">
            <Router>
                    <Nav />
                    <Route path="/login" component={Register} />
                    <Route path="/dashboard" component={DashBorad}></Route>

            </Router>

        </div>
    );
}

export default Main;
