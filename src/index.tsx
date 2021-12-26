import React from 'react';
import CurrencyExchangeContainer from './CurrencyExchangeContainer';
import { Provider } from 'react-redux';
import { store } from './redux/state'

const Lesson1: React.FunctionComponent = () => {
  return (

    <React.Fragment>
      <Provider store={store}>
        <CurrencyExchangeContainer />
      </Provider>
    </React.Fragment>
  );
};

export default Lesson1;

