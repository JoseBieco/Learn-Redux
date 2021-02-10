import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import allReducers from "./reducers"
import { Provider } from "react-redux";

const store = createStore(allReducers,
             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// //InitialState
// const initialState = 0;

// //STORE -> Globalized State


// //ACTION Increment 
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   }
// }

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   }
// }

// //REDUCER
// const counter = (initialState, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;

//     case "DECREMENT":
//       return state - 1;
    
//       default:
//         return state;
//   }
// }

// let store = createStore(counter);

// //DISPATCH