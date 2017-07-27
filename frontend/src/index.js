// react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
// redux-thunk
import thunkMiddleware from 'redux-thunk';
import { getCards } from './actions';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
store.dispatch(getCards());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
