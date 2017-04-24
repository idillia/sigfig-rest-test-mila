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

export function deletePersonSuccess(person) {
  return {type: types.DELETE_PERSON_SUCCESS, person};
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
  return (dispatch) => {
    return personApi.savePerson(person).then(person => {
      person._id ? dispatch(updatePersonSuccess(person)) :
        dispatch(createPersonSuccess(person));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deletePerson(person) {
  return (dispatch) => {
    return personApi.deletePerson(person).then(() => {
      console.log(`Deleted ${person._id}`)
      dispatch(deletePersonSuccess(person));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}