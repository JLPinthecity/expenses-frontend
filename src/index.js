import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

