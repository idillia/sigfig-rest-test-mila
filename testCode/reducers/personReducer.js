import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function personReducer(state = initialState.people, action) {
  switch(action.type) {
    case types.LOAD_PEOPLE_SUCCESS: 
      return action.people;
      
    default:
      return state;
  }
}