import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import roodReducer from './reducers';



const store = createStore(roodReducer);
// const store = configureStore(movies);
console.log('store',store);
// console.log('BEFOR STATE',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'supperman'}]

// });

// console.log('AFTER STATE',store.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>
);

