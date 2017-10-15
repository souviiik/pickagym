import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import Header from './components/common/header';
import Footer from './components/common/footer';
import TermsCondition from './components/common/tnc';
import PrivacyPolicy from './components/common/privacy-policy';
import FAQ from './components/common/faq';
import AboutUs from './components/common/about';

import SearchGyms from './components/search_gyms';
import CustomerLogin from './components/customer_login';
import GymOwnerLogin from './components/gym_owner_login';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>    
    <BrowserRouter>    
      <div>
      <Header/>
        <Switch>
          <Route path="/customer-login" component={CustomerLogin}/>
          <Route path="/gym-owner-login" component={GymOwnerLogin}/>
          <Route path="/terms-and-conditions" component={TermsCondition}/>
          <Route path="/privacy-policy" component={PrivacyPolicy}/>
          <Route path="/frequently-asked-questions" component={FAQ}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/" component={SearchGyms}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.holder'));
