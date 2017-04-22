import {combineReducers} from 'redux';
import companies from './companyReducer';
import people from './personReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  companies,
  people,
  numAjaxCallsInProgress
});

export default rootReducer;