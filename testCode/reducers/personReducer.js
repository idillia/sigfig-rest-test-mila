import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function personReducer(state = initialState.people, action) {
  switch(action.type) {
    case types.LOAD_PEOPLE_SUCCESS: 
      return action.people;
    case types.CREATE_PERSON_SUCCESS:
      // debugger;
      return [
        ...state,
        Object.assign({}, action.people)
      ];
    case types.UPDATE_PERSON_SUCCESS:
      // debugger;
      return  [
        ...state.filter(person => person.id !== action.people.id),
        Object.assign({}, action.people)
      ];   
      
    default:
      return state;
  }
}