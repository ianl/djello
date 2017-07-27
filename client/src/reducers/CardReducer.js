import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  GET_CARDS
} from '../actions/types';

const initialState = [
  {
    id: -1,
    text: 'card sample',
    list: 1
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          list: action.list
        }
      ]
    case UPDATE_CARD:
      return state.map(card =>
        (card.id === action.id) ? {...card, text: action.text} : card
      )
    case DELETE_CARD:
      return state.filter(card => card.id !== action.id);
    case GET_CARDS:
      return [
        ...state,
      ].concat(action.cards);
    default:
      return state;
  }
}