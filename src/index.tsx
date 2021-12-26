import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CurrencyExchangeContainer from './CurrencyExchangeContainer';
import { Provider } from 'react-redux';
import { store } from './redux/state'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CurrencyExchangeContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();



