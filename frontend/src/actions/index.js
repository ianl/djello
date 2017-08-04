import axios from 'axios';
import {
// Cards
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,

  POST_CARD_FAILURE,
  PUT_CARD_FAILURE,
  DELETE_CARD_FAILURE,

// Lists
  ADD_LIST,
  DELETE_LIST,

  POST_LIST_FAILURE,
  DELETE_LIST_FAILURE,

// Boards
  GET_BOARDS,
  GET_BOARD,
  ADD_BOARD,
  DELETE_BOARD,

  GET_BOARDS_FAILURE,
  GET_BOARD_FAILURE,
  POST_BOARD_FAILURE,
  DELETE_BOARD_FAILURE
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

/* Lists */
// POST
export const addList = (board, name) => {
  return dispatch => {
    return axios({
      method: 'POST',
      url: 'http://localhost:8000/api/lists/',
      data: {
        "name": name,
        "board": board.id
      }
    })
    .then(response => {
      console.log("POST List:");
      console.log(response.data);
      dispatch(postListSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(postListFailure(error));
    });  
  }
}

export const postListSuccess = list => ({
  type: ADD_LIST,
  list: list
})

export const postListFailure = error => ({
  type: POST_LIST_FAILURE,
  error: error
})

// DELETE
export const deleteList = list => {
  return dispatch => {
    return axios({
      method: 'DELETE',
      url: 'http://localhost:8000/api/lists/' + list.id + '/'
    })
    .then(response => {
      console.log("DELETE List(id: " + list.id + ")");
      dispatch(deleteListSuccess(list));
    })
    .catch(error => {
      console.log(error);
      dispatch(deleteListFailure(error));
    });  
  }
}

export const deleteListSuccess = list => ({
  type: DELETE_LIST,
  list: list
})

export const deleteListFailure = error => ({
  type: DELETE_LIST_FAILURE,
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

// POST
export const addBoard = name => {
  return dispatch => {
    return axios({
      method: 'POST',
      url: 'http://localhost:8000/api/boards/',
      data: {
        "name": name
      }
    })
    .then(response => {
      console.log("POST Board:");
      console.log(response.data);
      dispatch(postBoardSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(postBoardFailure(error));
    });  
  }
}

export const postBoardSuccess = board => ({
  type: ADD_BOARD,
  board: board
})

export const postBoardFailure = error => ({
  type: POST_BOARD_FAILURE,
  error: error
})

// DELETE
export const deleteBoard = board => {
  return dispatch => {
    return axios({
      method: 'DELETE',
      url: 'http://localhost:8000/api/boards/' + board.id + '/'
    })
    .then(response => {
      console.log("DELETE Board(id: " + board.id + ")");
      dispatch(deleteBoardSuccess(board));
    })
    .catch(error => {
      console.log(error);
      dispatch(deleteBoardFailure(error));
    });  
  }
}

export const deleteBoardSuccess = board => ({
  type: DELETE_BOARD,
  board: board
})

export const deleteBoardFailure = error => ({
  type: DELETE_BOARD_FAILURE,
  error: error
})