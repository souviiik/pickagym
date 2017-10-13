import React, { Component } from 'react';

import Header from './common/header';
import Footer from './common/footer';
import Search_Gyms from './search_gyms';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Search_Gyms/>
        <hr/>
        <Footer/>
      </div>
    );
  }
}
