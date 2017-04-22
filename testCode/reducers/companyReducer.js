import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function companyReducer(state = initialState.companies, action) {
  switch(action.type) {
    case types.LOAD_COMPANIES_SUCCESS: 
      return action.companies;
    case types.CREATE_COMPANY_SUCCESS:
      // debugger;
      return [
        ...state,
        Object.assign({}, action.companies)
      ];
    case types.UPDATE_COMPANY_SUCCESS:
      // debugger;
      return  [
        ...state.filter(company => company.id !== action.companies.id),
        Object.assign({}, action.companies)
      ];   
      
    default:
      return state;
  }
}