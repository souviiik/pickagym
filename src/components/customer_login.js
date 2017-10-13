import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CustomerLogin extends Component {
  render() {
    return (
      <div>
        Customer Login<br/>
        <Link to="/">Back</Link>
      </div>
    )
  }
}
