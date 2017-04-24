import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function companyReducer(state = initialState.companies, action) {
  switch(action.type) {
    case types.LOAD_COMPANIES_SUCCESS: 
      return action.companies;
    case types.CREATE_COMPANY_SUCCESS:
      console.log("createing company")
      return [
        ...state,
        Object.assign({}, action.companies)
      ];
    case types.UPDATE_COMPANY_SUCCESS:
      console.log("updating company")
      return  [
        ...state.filter(company => company._id !== action.companies._id),
        Object.assign({}, action.companies)
      ];   
    case types.LOAD_ONE_COMPANY_SUCCESS: 
      return action.companies;  

    default:
      return state;
  }
}