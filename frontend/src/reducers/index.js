import { combineReducers } from 'redux';
import CardReducer from './CardReducer';
import BoardReducer from './BoardReducer';

export default combineReducers({
  cards: CardReducer,
  boards: BoardReducer
})