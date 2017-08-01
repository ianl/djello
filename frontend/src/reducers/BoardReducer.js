import {
  GET_BOARDS,
  GET_BOARD
} from '../actions/types';

const initialState = [
]

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARDS:
      return [
        ...state,
      ].concat(action.boards);
    case GET_BOARD:
      return [
        ...state,
      ].concat(action.board);
    default:
      return state;
  }
}