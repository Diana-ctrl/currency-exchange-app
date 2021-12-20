import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { AppStateType } from './index';
import { Component } from 'react';

type MSToProps = {
  testStore: Array<string>
}
type MDToProps = {
  addTrack: (trackName: string) => void
}
type PropsType = MDToProps & MSToProps

type StateType = {
  inputText: string
}
// & { trackInput: HTMLInputElement | null };
class App extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props)
    this.state = { inputText: '' }
  }

  addTrack = () => {
    console.log(this.state.inputText);
    this.props.addTrack(this.state.inputText);
    this.setState({ inputText: '' })
  }
  changeInput = (e: any) => {
    console.log(e.target.value);
    this.setState({ inputText: e.target.value })
  }

  render() {
    return (
      <div>
        {/* <input type='text' ref={event => { this.trackInput = event }} /> */}
        <input type='text' onChange={this.changeInput} value={this.state.inputText} />
        <button onClick={this.addTrack.bind(this)}> Add track</button>
        <ul>
          {this.props.testStore.map((track, index) => <li key={index}>{track}</li>)}
        </ul>
      </div>
    );
  }
}

const mstp = (state: AppStateType): MSToProps => ({ testStore: state.playList.playlists })
const mdtp = (dispatch: any): MDToProps => ({
  addTrack: (trackName: string) => {
    dispatch({ type: 'ADD_TRACK', payload: trackName })
  }
})

export default connect(mstp, mdtp)(App);


