import {
  GET_BOARDS,
  ADD_BOARD,
  DELETE_BOARD
} from '../actions/types';
import { combineReducers } from 'redux';
import _ from 'lodash';

const byId = (state = {}, action) => {
  switch (action.type) {
    case GET_BOARDS:
      return {
        ...state,
        ...action.response.entities.boards
      }
    case ADD_BOARD:
      return {
        ...state,
        [action.board.id]: { ...action.board }
      }
    case DELETE_BOARD:
      return _.omit(state, action.board.id);
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case GET_BOARDS:
      return [
        ...state,
        ...action.response.result
      ]
    case ADD_BOARD:
      return [
        ...state,
        action.board.id
      ]
    case DELETE_BOARD:
      return state.filter(id => {
        return id !== action.board.id;
      });
    default:
      return state;
  }
}

// Selectors
export const selectBoards = state => {
  return state.allIds.map(id => {
    return state.byId[id];
  });
}

export default combineReducers({
  byId,
  allIds
});