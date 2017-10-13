import React, { Component } from 'react';

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
                            <a className="nav-link" href="#">Customer Login</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Gym Owner Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;