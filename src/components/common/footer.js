import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li><a href="#">Add A Gym</a></li>
                            <li><a href="#">Find A Gym</a></li>
                            <li><a href="#">List All Gyms</a></li>
                            <li><Link to="/frequently-asked-questions">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <a href="#">Fitness Professionals find Gyms hiring near you.</a>
                    </div>
                    <div className="col-md-3">
                        <a href="#">Site Designed and Developed by Souvik Banerjee</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;