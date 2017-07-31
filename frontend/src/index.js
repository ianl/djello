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
// react-router-dom
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root')
);

registerServiceWorker();
