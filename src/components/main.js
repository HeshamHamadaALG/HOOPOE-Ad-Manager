import React from 'react';
import Nav from './nav-bar/nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './register/register';



function Main() {
    return (
        <div className="Main">
            <Router>
                <Nav />
                <Route path="/"/>
                <Route path="/login" component={Register} />
            </Router>
        </div>
    );
}

export default Main;
