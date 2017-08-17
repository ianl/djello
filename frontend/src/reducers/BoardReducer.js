import {
  GET_BOARD,

  ADD_LIST,
  DELETE_LIST,

  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD
} from '../actions/types';
import ListReducer from './ListReducer';

const initialState = {
  boards: [],
  board: {
    lists: [
      {
        cards: []
      }
    ]
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    // BOARD
    case GET_BOARD:
      return {
        ...state,
        board: action.board
      }
    // LIST
    case ADD_LIST:
      return {
        ...state,
        board: {
          ...state.board,
          lists: ListReducer(state.board.lists, action)
        }
      }
    case DELETE_LIST:
      return {
        ...state,
        board: {
          ...state.board,
          lists: ListReducer(state.board.lists, action)
        }
      }
    // CARD
    case ADD_CARD:
      return {
        ...state,
        board: {
          ...state.board,
          lists: ListReducer(state.board.lists, action)
        }
      }
    case UPDATE_CARD:
      return {
        ...state,
        board: {
          ...state.board,
          lists: ListReducer(state.board.lists, action)
        }
      }
    case DELETE_CARD:
      return {
        ...state,
        board: {
          ...state.board,
          lists: ListReducer(state.board.lists, action)
        }
      }
    case MOVE_CARD:
      return {
        ...state,
        board: {
          ...state.board,
          lists: ListReducer(state.board.lists, action)
        }
      }
    default:
      return state;
  }
}