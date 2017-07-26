import axios from 'axios';
import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  POST_CARD_SUCCESS,
  POST_CARD_FAILURE
} from './types';
axios.defaults.xsrfHeaderName = "HTTP_X_CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

let nextCardId = 3;
export const addCard = text => {
  axios({
    method: 'post',
    url: 'http://localhost:8000/api/cards/',
    data: {
      "text": text,
      "list": 1
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  return {
    type: ADD_CARD,
    id: nextCardId++,
    text
  }
}

export const updateCard = (id, text) => ({
  type: UPDATE_CARD,
  id,
  text
})

export const deleteCard = id => ({
  type: DELETE_CARD,
  id
})

export const fetchCards = () => {
  return dispatch => {
    return axios({
      method: 'get',
      url: 'http://localhost:8000/api/cards/',
      headers: []
    })
    .then(response => {
      console.log(response.data);
      dispatch(fetchCardsSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
    });
  }
}

export const fetchCardsSuccess = cards => ({
  type: FETCH_CARDS_SUCCESS,
  cards: cards
})

export const fetchCardsFailure = error => ({
  type: FETCH_CARDS_FAILURE,
  cards: error
})

export const postCardSuccess = card => ({
  type: POST_CARD_SUCCESS,
  card: card
})

export const postCardFailure = error => ({
  type: POST_CARD_FAILURE,
  card: error
})