import React, { Component } from 'react';

class Search_Gyms extends Component {
    handleSubmit(e){
        e.preventDefault();
    }

    render() {
        return (
            <div className="container search-gyms">
                <h1>PICK A GYM</h1>
                <h2>Find your Fit</h2>
                <h3>Select from Over 4,000 Gyms and Health Clubs</h3>
                
                <h4>FREE PASS for a Gym or Health Club Near you</h4>
                <ol>
                    <li>pick a Gym</li>
                    <li>get a FREE pass</li>
                    <li>share your FREE pass</li>
                </ol>
                <div className="row">
                    <div className="col-md-5">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="zipcode" className="sr-only">ZIP Code</label>
                                <input type="text" className="form-control" id="zipcode" aria-describedby="emailHelp" placeholder="Enter ZIP Code"/>
                                <small id="emailHelp" className="form-text text-muted">Enter ZIP code of the area around which you wish to find gyms.</small>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input"/>
                                By clicking you agree to our <a href="#">terms & conditions.</a>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Search</button>
                        </form>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Search_Gyms;