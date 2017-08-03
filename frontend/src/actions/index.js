import axios from 'axios';
import {
// Cards
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,

  POST_CARD_FAILURE,
  PUT_CARD_FAILURE,
  DELETE_CARD_FAILURE,

// Boards
  GET_BOARDS,
  GET_BOARD,

  GET_BOARDS_FAILURE,
  GET_BOARD_FAILURE
} from './types';
axios.defaults.xsrfHeaderName = "HTTP_X_CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

/* Card */
// POST
export const addCard = (list, text) => {
  return dispatch => {
    return axios({
      method: 'POST',
      url: 'http://localhost:8000/api/cards/',
      data: {
        "text": text,
        "list": list
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
  card: card
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
  card: card
})

export const putCardFailure = error => ({
  type: PUT_CARD_FAILURE,
  error: error
})

// DELETE
export const deleteCard = card => {
  return dispatch => {
    return axios({
      method: 'DELETE',
      url: 'http://localhost:8000/api/cards/' + card.id + '/'
    })
    .then(response => {
      console.log("DELETE Card(id: " + card.id + ")");
      dispatch(deleteCardSuccess(card));
    })
    .catch(error => {
      console.log(error);
      dispatch(deleteCardFailure(error));
    });  
  }
}

export const deleteCardSuccess = card => ({
  type: DELETE_CARD,
  card: card
})

export const deleteCardFailure = error => ({
  type: DELETE_CARD_FAILURE,
  error: error
})

/* Boards */
// GET
export const getBoards = () => {
  return dispatch => {
    return axios({
      method: 'GET',
      url: 'http://localhost:8000/api/boards/',
      headers: []
    })
    .then(response => {
      console.log("GET Boards:");
      console.log(response.data);
      dispatch(getBoardsSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(getBoardsFailure(error));
    });
  }
}

export const getBoardsSuccess = boards => ({
  type: GET_BOARDS,
  boards: boards
})

export const getBoardsFailure = error => ({
  type: GET_BOARDS_FAILURE,
  error: error
})

export const getBoard = id => {
  return dispatch => {
    return axios({
      method: 'GET',
      url: 'http://localhost:8000/api/boards/' + id + '/',
      headers: []
    })
    .then(response => {
      console.log("GET Board:");
      console.log(response.data);
      dispatch(getBoardSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(getBoardFailure(error));
    });
  }
}

export const getBoardSuccess = board => ({
  type: GET_BOARD,
  board: board
})

export const getBoardFailure = error => ({
  type: GET_BOARD_FAILURE,
  error: error
})