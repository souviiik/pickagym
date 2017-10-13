import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                Toll Free: <a className="nav-link" href="#">1.800.378.5841</a>
                            </li>
                            <li className="nav-item">
                                Email: <a className="nav-link" href="#">support@pickagym.com</a>
                            </li>
                        </ul>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Link className="nav-link" to="/customer-login">Customer Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gym-owner-login">Gym Owner Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;