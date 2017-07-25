import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  FETCH_CARDS_SUCCESS
} from '../actions/types';

const initialState = [
  {
    id: -1,
    text: 'card sample'
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case UPDATE_CARD:
      return state.map(card =>
        (card.id === action.id) ? {...card, text: action.text} : card
      )
    case DELETE_CARD:
      return state.filter(card => card.id !== action.id);
    case FETCH_CARDS_SUCCESS:
      return [
        ...state,
      ].concat(action.cards);
    default:
      return state;
  }
}