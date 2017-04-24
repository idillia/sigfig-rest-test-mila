import * as types from './actionTypes';
import personApi from '../api/personApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPeopleSuccess(people) {
  return {type: types.LOAD_PEOPLE_SUCCESS, people};
}

export function createPersonSuccess(people) {
  return {type: types.CREATE_PERSON_SUCCESS, people};
}

export function updatePersonSuccess(people) {
  return {type: types.UPDATE_PERSON_SUCCESS, people};
}

export function deletePersonSuccess(people) {
  return {type: types.DELETE_PERSON_SUCCESS, people};
}

export function loadPeople(companyId) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return personApi.getAllPeople(companyId).then(people => {
      dispatch(loadPeopleSuccess(people));
    }).catch(error => {
      throw(error);
    });
  };
}

export function savePerson(person) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return personApi.savePerson(person).then(person => {
      person._id ? dispatch(updatePersonSuccess(person)) :
        dispatch(createPersonSuccess(person));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deletePerson(personId) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return personApi.deletePerson(personId).then(personId => {
      dispatch(deletePersonSuccess(personId));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}