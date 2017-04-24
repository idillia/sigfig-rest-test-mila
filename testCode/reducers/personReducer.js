import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function personReducer(state = initialState.people, action) {
  switch(action.type) {
    case types.LOAD_PEOPLE_SUCCESS: 
      return action.people;
    case types.CREATE_PERSON_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.people)
      ];
    case types.UPDATE_PERSON_SUCCESS:
      return  [
        ...state.filter(person => person._id !== action.people._id),
        Object.assign({}, action.people)
      ];   
    case types.DELETE_PERSON_SUCCESS:       
    const newState = Object.assign([], state);
    const indexOfPersonToDelete = state.findIndex(person => {return person._id == action.person});
    newState.splice(indexOfPersonToDelete, 1);
    return newState;
    default:
      return state;
  }
}