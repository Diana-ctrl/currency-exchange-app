import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { AppStateType } from './index';
import { Component } from 'react';

type PropsType = {
  testStore: []
  dispatch?: () => void
}
class App extends Component <PropsType> {
  render() {
    return (
      <div>
        <input type='text' />
        <button> Add track</button>
        <ul>
          {this.props.testStore.map((track, index) => <li key={index}>{track}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect((state: AppStateType) => { testStore: state }, dispatch => { })(App);


