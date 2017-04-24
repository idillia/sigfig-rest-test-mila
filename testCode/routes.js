import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import CompaniesPage from './components/company/CompaniesPage';
import PeoplePage from './components/person/PeoplePage';
import PersonPage from './components/person/PersonPage'; //eslint-disable-line import/no-named-as-default
import ManageCompanyPage from './components/company/ManageCompanyPage'; //eslint-disable-line import/no-named-as-default
import ManagePersonPage from './components/person/ManagePersonPage'; //eslint-disable-line import/no-named-as-default
import CompanyPage from './components/company/CompanyPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <Route path="companies/:id/people" component={PeoplePage} />
    <IndexRoute component={CompaniesPage} />
    <Route path="edit/company" component={ManageCompanyPage} />
    <Route path="edit/person" component={ManagePersonPage} />

    <Route path="edit/company/:id" component={ManageCompanyPage} />
    <Route path="edit/person/:id" component={ManagePersonPage} />
    <Route path="person/:id" component={PersonPage} />

    <Route path="company/:id" component={CompanyPage} />
  </Route>  
);

