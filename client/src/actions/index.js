import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD
} from './types';

let nextCardId = 0;
export const addCard = text => ({
  type: ADD_CARD,
  id: nextCardId++,
  text
})

export const updateCard = (id, text) => ({
  type: UPDATE_CARD,
  id,
  text
})

export const deleteCard = id => ({
  type: DELETE_CARD,
  id
})