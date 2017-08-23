import {
  GET_BOARD,

  ADD_LIST,
  DELETE_LIST,

  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD
} from '../actions/types';
import { combineReducers } from 'redux';
import _ from 'lodash';

// boardsReducer
const boardsById = (state = {}, action) => {
  switch (action.type) {
    case GET_BOARD:
      return {
        ...action.response.entities.boards
      }
    default:
      return state;
  }
}

const allBoardsId = (state = [], action) => {
  switch (action.type) {
    case GET_BOARD:
      return [
        action.response.result
      ]
    default:
      return state;
  }
}

const boardsReducer = combineReducers({
  byId: boardsById,
  allIds: allBoardsId
});

// listsReducer
const listsById = (state = {}, action) => {
  let cards_order;
  switch (action.type) {
    case GET_BOARD:
      return {
        ...action.response.entities.lists
      }
    case ADD_LIST:
      return {
        ...state,
        [action.list.id]: { ...action.list }
      }
    case DELETE_LIST:
      return _.omit(state, action.list.id);
    case ADD_CARD:
      return {
        ...state,
        [action.card.list]: {
          ...state[action.card.list],
          cards_order: [
            ...state[action.card.list].cards_order,
            action.card.id
          ]
        }
      }
    case DELETE_CARD:
      cards_order = state[action.card.list].cards_order.filter(id => {
        return id !== action.card.id
      });
      return {
        ...state,
        [action.card.list]: {
          ...state[action.card.list],
          cards_order
        }
      }
    case MOVE_CARD:
      // Remove card from dragList
      let newState = {
        ...state,
        [action.dragList]: {
          ...state[action.dragList],
          cards_order: [
            ...state[action.dragList].cards_order.slice(0, action.dragIndex),
            ...state[action.dragList].cards_order.slice(action.dragIndex + 1)
          ]
        }
      }   
      // Insert card into hoverList
      if (action.hoverIndex === 0) {
        cards_order = [
          action.dragId,
          ...newState[action.hoverList].cards_order
        ];
      }
      else if (action.hoverIndex === newState[action.hoverList].cards_order.length - 1) {
        cards_order = [
          ...newState[action.hoverList].cards_order,
          action.dragId
        ];        
      }
      else {
        cards_order = [
          ...newState[action.hoverList].cards_order.slice(0, action.hoverIndex),
          action.dragId,
          ...newState[action.hoverList].cards_order.slice(action.hoverIndex + 1)
        ]       
      }
      return {
        ...newState,
        [action.hoverList]: {
          ...newState[action.hoverList],
          cards_order
        }
      }       
    default:
      return state;
  }
}

const allListsId = (state = [], action) => {
  switch (action.type) {
    case GET_BOARD:
      return [
        ...action.response.entities.boards[action.response.result].lists
      ]
    case ADD_LIST:
      return [
        ...state,
        action.list.id
      ]
    case DELETE_LIST:
      return state.filter(id => {
        return id !== action.list.id;
      });     
    default:
      return state;
  }
}

const listsReducer = combineReducers({
  byId: listsById,
  allIds: allListsId
});

// cardsReducer
const cardsById = (state = {}, action) => {
  switch (action.type) {
    case GET_BOARD:
      return {
        ...action.response.entities.cards
      }
    case ADD_CARD:
      return {
        ...state,
        [action.card.id]: { ...action.card }
      }
    case UPDATE_CARD:
      return {
        ...state,
        [action.card.id]: { ...action.card }
      }
    case DELETE_CARD:
      return _.omit(state, action.card.id);
    case MOVE_CARD:
      return {
        ...state,
        [action.dragId]: {
          ...state[action.dragId],
          list: action.hoverList
        }
      }            
    default:
      return state;
  }
}

const cardsReducer = combineReducers({
  byId: cardsById
});

// Selectors
export const selectBoard = state => {
  return { ...state.boards.byId[state.boards.allIds[0]] };
}

export const selectLists = state => {
  return state.lists.allIds.map(id => {
    return { ...state.lists.byId[id] };
  });
}

export const selectList = (state, listId) => {
  return { ...state.lists.byId[listId] };
}

export const selectCard = (state, cardId) => {
  return { ...state.cards.byId[cardId] };
}

export default combineReducers({
  boards: boardsReducer,
  lists: listsReducer,
  cards: cardsReducer
});