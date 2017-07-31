import {
  GET_BOARDS
} from '../actions/types';

const initialState = [
]

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARDS:
      return [
        ...state,
      ].concat(action.boards);
    default:
      return state;
  }
}