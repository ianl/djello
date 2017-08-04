import {
  ADD_LIST,
  DELETE_LIST,

  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD
} from '../actions/types';
import CardReducer from './CardReducer';

export default (state, action) => {
  switch (action.type) {
    // LIST
    case ADD_LIST:
      return [
        ...state,
        action.list
      ]
    case DELETE_LIST:
      return state.filter(list => list.id !== action.list.id);
    // CARD
    case ADD_CARD:
      return state.map(list =>
        (list.id === action.card.list) ? CardReducer(list, action) : list
      )
    case UPDATE_CARD:
      return state.map(list =>
        (list.id === action.card.list) ? CardReducer(list, action) : list
      )
    case DELETE_CARD:
      return state.map(list =>
        (list.id === action.card.list) ? CardReducer(list, action) : list
      )
    default:
      return state;
  }
}