import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "../../App.css";

export class Nav extends Component {
    constructor() {
        super();
    this.state = {
        icon: faBars,
        classOver: 'overlay',
        classNav: '',
        display: true,
        
    }
}

    onClick = (e) => {
        if (this.state.icon === faBars) {
            this.setState({
                icon: faTimes,
                classOver: 'overlay menu-open',
                classNav: 'menu-open'
            })
        } else {
            this.setState({
                icon: faBars,
                classOver: 'overlay',
                classNav: ''
            })
        }
    }

    render() {
        let loc = window.location.pathname;
        let test = function(){
            if (loc.includes('/dashboard/') || loc.includes('/signup')){
                return 'none';
            } else {
                return '';
            }
        }
       
        return (
            <div className="Nav" style={{display: test()}}>
                <header>
                    <div onClick={this.onClick} className="menu-toggle">
                        <FontAwesomeIcon icon={this.state.icon} />
                    </div>
                    <div className={this.state.classOver}></div>
                    <div className="container-nav">
                        <nav className={this.state.classNav}>
                            <h1 className="brand"><Link style={{textDecoration: 'none', color: '#999'}} className="hoopoefont" to="/">HOOPOE</Link></h1>
                            <ul>
                                <li><Link style={{textDecoration: 'none', color: '#999'}} to="/">Home</Link></li>
                                <li><Link style={{textDecoration: 'none', color: '#999'}} to="/about">About</Link></li>
                                <li><Link style={{textDecoration: 'none', color: '#999'}} to="/contact">Contact</Link></li>
                                <li><Link style={{textDecoration: 'none', color: '#999'}} dis={this.state.display} to="/login">Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default Nav;