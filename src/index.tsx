import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type initialStateType = {
  playlists: Array<string>
};
export type AppStateType = ReturnType<typeof rootReducer>
type actionType = {
  type: 'ADD_TRACK',
  payload: string
}

const initialState: initialStateType = {
  playlists: ['Smalls like spirit', 'Enter Sandman']
}

function playlistReducer (state:initialStateType = initialState, action: actionType):initialStateType {
  if (action.type === 'ADD_TRACK') {
    return {
      ...state,
      playlists: [...state.playlists, action.payload]
  }
  }
  return state;
}

let rootReducer = combineReducers({
  playList: playlistReducer
})

let store = createStore(rootReducer);
 
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
