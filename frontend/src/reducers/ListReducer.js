import {
  ADD_LIST,
  DELETE_LIST,

  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD
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
    case MOVE_CARD:
      let dragCard;
      let newState = state.map(list => {
        if (list.id === action.dragList) {
          dragCard = list.cards[action.dragIndex];
          return {
            ...list,
            cards: [
              ...list.cards.slice(0, action.dragIndex),
              ...list.cards.slice(action.dragIndex + 1)
            ]
          }
        }
        else {
          return list;
        }
      })

      dragCard.list = action.hoverList;
      return newState.map(list => {
        if (list.id === action.hoverList) {
          if (action.hoverIndex === 0) {
            return {
              ...list,
              cards: [
                dragCard,
                ...list.cards
              ]
            }
          }
          else if (action.hoverIndex === list.cards.length - 1) {
            return {
              ...list,
              cards: [
                ...list.cards,
                dragCard
              ]
            }
          }
          else {
            return {
              ...list,
              cards: [
                ...list.cards.slice(0, action.hoverIndex),
                dragCard,
                ...list.cards.slice(action.hoverIndex + 1)
              ]
            }
          }
        }
        else {
          return list;
        }
      })
    default:
      return state;
  }
}