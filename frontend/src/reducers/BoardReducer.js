import {
  GET_BOARDS,
  GET_BOARD,
  ADD_BOARD,
  DELETE_BOARD,

  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD
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
    case GET_BOARDS:
      return {
        ...state,
        boards: action.boards
      }
    case GET_BOARD:
      return {
        ...state,
        board: action.board
      }
    case ADD_BOARD:
      return {
        ...state,
        boards: [
          ...state.boards,
          action.board
        ]
      }
    case DELETE_BOARD:
      let boards = state.boards.filter(board => board.id !== action.board.id);
      return {
        ...state,
        boards: boards
      }
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
    default:
      return state;
  }
}