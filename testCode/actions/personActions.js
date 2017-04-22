import * as types from './actionTypes';
import PersonApi from '../api/PersonApi';
import {beginAjaxCall} from './ajaxStatusActions';


export function loadPeopleSuccess(people) {
  return {type: types.LOAD_PEOPLE_SUCCESS, people};
}

export function loadPeople() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PersonApi.getAllPeople().then(people => {
      dispatch(loadPeopleSuccess(people));
    }).catch(error => {
      throw(error);
    });
  };
}