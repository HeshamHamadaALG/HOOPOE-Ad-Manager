import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export class Nav extends Component {
    state = {
        icon: faBars,
        classOver: 'overlay',
        classNav: ''
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
        return (
            <div className="">
                <header>
                    <div onClick={this.onClick} className="menu-toggle">
                        <FontAwesomeIcon icon={this.state.icon} />
                    </div>
                    <div className={this.state.classOver}></div>
                    <div className="container-nav">
                        <nav className={this.state.classNav}>
                            <h1 className="brand"><a href="index.html">HOOPOE</a></h1>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default Nav;