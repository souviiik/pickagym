import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li><a href="#">Add A Gym</a></li>
                            <li><a href="#">Find A Gym</a></li>
                            <li><a href="#">List All Gyms</a></li>
                            <li><a href="#">FAQs</a></li>
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