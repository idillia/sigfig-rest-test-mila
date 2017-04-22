import * as types from './actionTypes';
import companyApi from '../api/CompanyApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCompaniesSuccess(companies) {
  return {type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function createCompanySuccess(companies) {
  return {type: types.CREATE_COMPANY_SUCCESS, companies};
}

export function updateCompanySuccess(companies) {
  return {type: types.UPDATE_COMPANY_SUCCESS, companies};
}

export function loadCompanies() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return companyApi.getAllCompanies().then(companies => {
      dispatch(loadCompaniesSuccess(companies));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCompany(company) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return companyApi.saveCompany(company).then(company => {
      company.id ? dispatch(updateCompanySuccess(company)) :
        dispatch(createCompanySuccess(company));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}