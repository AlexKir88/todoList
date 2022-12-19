import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reduser from './reduser/reduser';

const initState = {
todos: [{
  id: -1,
  text: 'TEST',
  date: new Date(),
  complited: true,
}]
}

const store = createStore(reduser, initState)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


