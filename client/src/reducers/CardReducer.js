import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD
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
          text: action.text,
          completed: false
        }
      ]
    case UPDATE_CARD:
      return state.map(card =>
        (card.id === action.id) ? {...card, text: action.text} : card
      )
    case DELETE_CARD:
      return state.filter(card => card.id !== action.id);
    default:
      return state;
  }
}