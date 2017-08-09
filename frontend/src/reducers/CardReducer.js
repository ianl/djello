import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD
} from '../actions/types';

export default (state, action) => {
  let cards;
  switch (action.type) {
    // CARD
    case ADD_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          action.card
        ]
      }
    case UPDATE_CARD:
      cards = state.cards.map(card =>
        (card.id === action.card.id) ? action.card : card
      );
      return {
        ...state,
        cards: cards
      }
    case DELETE_CARD:
      cards = state.cards.filter(card => card.id !== action.card.id);
      return {
        ...state,
        cards: cards
      }
    case MOVE_CARD:
      let dragCard = state.cards[action.dragIndex];

      cards = [
        ...state.cards.slice(0, action.dragIndex),
        ...state.cards.slice(action.dragIndex + 1)
      ]
      if (action.hoverIndex === 0) {
        cards = [
          dragCard,
          ...cards
        ]
      }
      else {
        cards = [
          ...cards.slice(0, action.hoverIndex),
          dragCard,
          ...cards.slice(action.hoverIndex + 1)
        ]        
      }
      
      return {
        ...state,
        cards: cards
      }
    default:
      return state;
  }
}