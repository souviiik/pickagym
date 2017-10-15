import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchGym } from '../actions';

class GymIndex extends Component {
    renderPosts(){
        return _.map(this.props.gyms, gym => {
            return (
                <div className="col-md-3" key={gym.id}>
                    <div className="card">
                        <div className="card-header">Rating: {gym.rating || "N/A"}</div>
                        <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC8zE1LD6MoL6GtKngOnvtrwSnzR0OdEUY&q=${gym.vicinity}`} frameBorder="0"/>
                        <div className="card-block">
                        <strong className="card-title text-uppercase">{gym.name}</strong>
                        <p className="card-text">Address: {gym.vicinity}</p>
                        
                        </div>
                        <div className="card-footer">
                        <Link className="btn btn-primary" to={`/gym-details/${gym.id}`}>more...</Link>
                        </div>
                    </div>                    
                </div>
	        );
        });
    }

    render() {
        return (
            <div className="container">
                <Link to="/">Home</Link>
                <h1>List of Gyms</h1>
                <div className="row">
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { gyms: state.gyms };
}

export default connect(mapStateToProps, {searchGym})(GymIndex);

/*
<div className="card">
                    <div className="card-block">
                    <Link className="text-uppercase" to={`/gym-details/${gym.id}`}>
                    {gym.name}
                    </Link>
                    </div>
                    </div>
                    */