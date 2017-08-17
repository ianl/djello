import { combineReducers } from 'redux';
import BoardReducer from './BoardReducer';
import Boards from './Boards';

export default combineReducers(
  {
    BoardReducer,
    Boards
  }
)