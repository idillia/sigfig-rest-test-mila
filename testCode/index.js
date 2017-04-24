// /* eslint-disable import/default */
import React from 'react';
import 'babel-polyfill';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import {loadCompanies} from './actions/companyActions';
import configureStore from './store/configureStore.dev';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore(); 
store.dispatch(loadCompanies());


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
