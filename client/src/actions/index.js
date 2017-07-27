import axios from 'axios';
import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  GET_CARDS,

  POST_CARD_FAILURE,
  PUT_CARD_FAILURE,
  DELETE_CARD_FAILURE,
  GET_CARDS_FAILURE
} from './types';
axios.defaults.xsrfHeaderName = "HTTP_X_CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

/* Card */
// POST
export const addCard = text => {
  return dispatch => {
    return axios({
      method: 'POST',
      url: 'http://localhost:8000/api/cards/',
      data: {
        "text": text,
        "list": 1
      }
    })
    .then(response => {
      console.log("POST Card:");
      console.log(response.data);
      dispatch(postCardSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(postCardFailure(error));
    });  
  }
}

export const postCardSuccess = card => ({
  type: ADD_CARD,
  id: card.id,
  text: card.text,
  list: 1
})

export const postCardFailure = error => ({
  type: POST_CARD_FAILURE,
  error: error
})

// PUT
export const updateCard = card => {
  return dispatch => {
    return axios({
      method: 'PUT',
      url: 'http://localhost:8000/api/cards/' + card.id + '/',
      data: {
        "text": card.text,
        "list": card.list
      }
    })
    .then(response => {
      console.log("PUT Card:");
      console.log(response.data);
      dispatch(putCardSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(putCardFailure(error));
    });  
  }
}

export const putCardSuccess = card => ({
  type: UPDATE_CARD,
  id: card.id,
  text: card.text
})

export const putCardFailure = error => ({
  type: PUT_CARD_FAILURE,
  error: error
})

// DELETE
export const deleteCard = id => {
  return dispatch => {
    return axios({
      method: 'DELETE',
      url: 'http://localhost:8000/api/cards/' + id + '/'
    })
    .then(response => {
      console.log("DELETE Card(id: " + id + ")");
      dispatch(deleteCardSuccess(id));
    })
    .catch(error => {
      console.log(error);
      dispatch(deleteCardFailure(error));
    });  
  }
}

export const deleteCardSuccess = id => ({
  type: DELETE_CARD,
  id: id
})

export const deleteCardFailure = error => ({
  type: DELETE_CARD_FAILURE,
  error: error
})

// GET
export const getCards = () => {
  return dispatch => {
    return axios({
      method: 'GET',
      url: 'http://localhost:8000/api/cards/',
      headers: []
    })
    .then(response => {
      console.log("GET Cards:");
      console.log(response.data);
      dispatch(getCardsSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(getCardsFailure(error));
    });
  }
}

export const getCardsSuccess = cards => ({
  type: GET_CARDS,
  cards: cards
})

export const getCardsFailure = error => ({
  type: GET_CARDS_FAILURE,
  error: error
})