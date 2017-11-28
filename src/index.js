import { Provider } from 'react-redux';
import React from 'react';
import { createStore } from 'redux';
import categories from './categories/reducer';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(categories);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

registerServiceWorker();