import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CompaniesPage from './components/company/CompaniesPage';
import PeoplePage from './components/person/PeoplePage';
import ManageCompanyPage from './components/company/ManageCompanyPage'; //eslint-disable-line import/no-named-as-default
import ManagePersonPage from './components/person/ManagePersonPage'; //eslint-disable-line import/no-named-as-default
import CompanyPage from './components/company/CompanyPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="companies/:id/people" component={PeoplePage} />
    <Route path="companies" component={CompaniesPage} />
    <Route path="edit/company" component={ManageCompanyPage} />
    <Route path="edit/company/:id" component={ManageCompanyPage} />
    <Route path="edit/person/:id" component={ManagePersonPage} />

    <Route path="company/:id" component={CompanyPage} />
  </Route>  
);

    // <Route path="edit/person" component={ManagePersonPage} />
