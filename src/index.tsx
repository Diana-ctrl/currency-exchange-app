import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type initialStateType = Array<string>;
export type AppStateType = ReturnType<typeof rootReducer>
type actionType = {
  type: 'ADD_TRACK',
  payload: []
}

const initialState: initialStateType = [
  'Smalls like spirit', 
  'Enter Sandman'
]
export let action = {
  type: 'ADD_TRACK',
  payload: []
}


function playlistReducer (state = initialState, action: actionType) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}

let rootReducer = combineReducers({
  payload: playlistReducer
})

let store = createStore(rootReducer);
 

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
