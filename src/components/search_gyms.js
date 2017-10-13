import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchGym } from '../actions';

class SearchGyms extends Component {
    onSubmit(values){        
        this.props.searchGym(values, () => {
            this.props.history.push('/');
        });
    }

    renderField(field){
        const { meta } = field;
        const className = `form-group ${meta.touched && meta.error ? 'has-danger': ''}`;
        return (
            <div className={className}>                
                <label htmlFor={field.id} className="sr-only">{field.label}</label>
                <small className="form-text text-muted text-danger">
                {meta.touched ? meta.error: ''}
                </small>
                <input
                    type="text"
                    className="form-control" 
                    id={field.id}
                    placeholder={field.label}
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;

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
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field 
                                name="zipcode" 
                                component={this.renderField}
                                label="Zip Code"
                                id="zipCode"
                            />
                            <button type="submit" className="btn btn-primary btn-block">Search</button>
                        </form>
                    </div>
                </div>                
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    console.log(values);

    if(!values.zipcode) {
        errors.zipcode = "Enter a zipcode!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'SearchGymForm'
})(
    connect(null, { searchGym })(SearchGyms)
);