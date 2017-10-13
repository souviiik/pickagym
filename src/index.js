import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/common/header';
import Footer from './components/common/footer';
import SearchGyms from './components/search_gyms';
import CustomerLogin from './components/customer_login';
import GymOwnerLogin from './components/gym_owner_login';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>    
    <BrowserRouter>    
      <div>
      <Header/>
        <Switch>
          <Route path="/customer-login" component={CustomerLogin}/>
          <Route path="/gym-owner-login" component={GymOwnerLogin}/>
          <Route path="/" component={SearchGyms}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.holder'));
