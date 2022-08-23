import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App'
import catsReducer from './reducers/catsReducer';

let store = createStore(catsReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
