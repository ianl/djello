import axios from 'axios';
import { normalize } from 'normalizr';
import schema from './schema';
import { selectList } from '../reducers/Board';
import {
// CARD
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,

  POST_CARD_FAILURE,
  PUT_CARD_FAILURE,
  DELETE_CARD_FAILURE,

  MOVE_CARD,
  MOVE_CARD_FAILURE,

// LIST
  ADD_LIST,
  DELETE_LIST,

  POST_LIST_FAILURE,
  DELETE_LIST_FAILURE,

// BOARD
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

/* CARD */
// POST
export const addCard = (list, text) => {
  return (dispatch, getState) => {
    return axios({
      method: 'POST',
      url: 'http://localhost:8000/api/cards/',
      data: {
        text,
        "list": list.id
      }
    })
    .then(response => {
      console.log(
        "POST Card:",
        response.data
      );
      dispatch(postCardSuccess(response.data));
      // Update list's cards_order
      dispatch(updateCardsOrder(
        list.id, 
        selectList(getState().Board, list.id).cards_order
      ));
    })
    .catch(error => {
      console.log(error);
      dispatch(postCardFailure(error));
    });  
  }
}

export const postCardSuccess = card => ({
  type: ADD_CARD,
  card
})

export const postCardFailure = error => ({
  type: POST_CARD_FAILURE,
  error
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
      console.log(
        "PUT Card:",
        response.data
      );
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
  card
})

export const putCardFailure = error => ({
  type: PUT_CARD_FAILURE,
  error
})

// DELETE
export const deleteCard = card => {
  return (dispatch, getState) => {
    return axios({
      method: 'DELETE',
      url: 'http://localhost:8000/api/cards/' + card.id + '/'
    })
    .then(response => {
      console.log("DELETE Card(id: " + card.id + ")");
      dispatch(deleteCardSuccess(card));
      // Update list's cards_order
      dispatch(updateCardsOrder(
        card.list, 
        selectList(getState().Board, card.list).cards_order
      ));
    })
    .catch(error => {
      console.log(error);
      dispatch(deleteCardFailure(error));
    });  
  }
}

export const deleteCardSuccess = card => ({
  type: DELETE_CARD,
  card
})

export const deleteCardFailure = error => ({
  type: DELETE_CARD_FAILURE,
  error
})

// Others
export const moveCard = (dragList, dragIndex, hoverList, hoverIndex, dragId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'PATCH',
      url: 'http://localhost:8000/api/cards/' + dragId + '/',
      data: {
        "list": hoverList
      }
    })
    .then(response => {
      console.log(
        "MOVE Card:",
        response.data
      );
      dispatch(moveCardSuccess(dragList, dragIndex, hoverList, hoverIndex, dragId));
      // Update lists' cards_order
      if (dragList === hoverList) {
        dispatch(updateCardsOrder(
          hoverList, 
          selectList(getState().Board, hoverList).cards_order
        ));
      }
      else {
        dispatch(updateCardsOrder(
          dragList, 
          selectList(getState().Board, dragList).cards_order
        ));
        dispatch(updateCardsOrder(
          hoverList, 
          selectList(getState().Board, hoverList).cards_order
        ));
      }
    })
    .catch(error => {
      console.log(error);
      dispatch(moveCardFailure(error));
    });  
  }
}

export const moveCardSuccess = (dragList, dragIndex, hoverList, hoverIndex, dragId) => ({
  type: MOVE_CARD,
  dragList,
  dragIndex,
  hoverList,
  hoverIndex,
  dragId
})

export const moveCardFailure = error => ({
  type: MOVE_CARD_FAILURE,
  error
})

export const updateCardsOrder = (listId, cardsOrder) => {
  return dispatch => {
    return axios({
      method: 'PATCH',
      url: 'http://localhost:8000/api/lists/' + listId + '/',
      data: {
        "cards_order": cardsOrder
      }
    })
    .then(response => {
      console.log(
        "PATCH cards_order of List(id: " + listId + ")",
        response.data
      );
    })
    .catch(error => {
      console.log(error);
    });  
  }
}

/* LIST */
// POST
export const addList = (board, name) => {
  return dispatch => {
    return axios({
      method: 'POST',
      url: 'http://localhost:8000/api/lists/',
      data: {
        name,
        "board": board.id
      }
    })
    .then(response => {
      console.log(
        "POST List:",
        response.data
      );
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
  list
})

export const postListFailure = error => ({
  type: POST_LIST_FAILURE,
  error
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
  list
})

export const deleteListFailure = error => ({
  type: DELETE_LIST_FAILURE,
  error
})

/* BOARD */
// GET
export const getBoards = () => {
  return dispatch => {
    return axios({
      method: 'GET',
      url: 'http://localhost:8000/api/boards/',
      headers: []
    })
    .then(response => {
      console.log(
        "GET Boards:",
        response.data
      );

      const normalizedData = normalize(response.data, schema.boards);
      console.log(
        "Normalized:",
        normalizedData
      );

      dispatch(getBoardsSuccess(normalizedData));
    })
    .catch(error => {
      console.log(error);
      dispatch(getBoardsFailure(error));
    });
  }
}

export const getBoardsSuccess = response => ({
  type: GET_BOARDS,
  response
})

export const getBoardsFailure = error => ({
  type: GET_BOARDS_FAILURE,
  error
})

export const getBoard = id => {
  return dispatch => {
    return axios({
      method: 'GET',
      url: 'http://localhost:8000/api/boards/' + id + '/',
      headers: []
    })
    .then(response => {
      console.log(
        "GET Board:",
        response.data
      );

      const normalizedData = normalize(response.data, schema.board);
      console.log(
        "Normalized:",
        normalizedData
      );

      dispatch(getBoardSuccess(normalizedData));
    })
    .catch(error => {
      console.log(error);
      dispatch(getBoardFailure(error));
    });
  }
}

export const getBoardSuccess = response => ({
  type: GET_BOARD,
  response
})

export const getBoardFailure = error => ({
  type: GET_BOARD_FAILURE,
  error
})

// POST
export const addBoard = name => {
  return dispatch => {
    return axios({
      method: 'POST',
      url: 'http://localhost:8000/api/boards/',
      data: {
        name
      }
    })
    .then(response => {
      console.log(
        "POST Board:",
        response.data
      );
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
  board
})

export const postBoardFailure = error => ({
  type: POST_BOARD_FAILURE,
  error
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
  board
})

export const deleteBoardFailure = error => ({
  type: DELETE_BOARD_FAILURE,
  error
})