import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './containers/GameContainer'
import PlayerSelection from './components/PlayerSelection'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.startGame ? <GameContainer /> : <PlayerSelection />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    startGame: store.startGame
  }
}

export default connect(mapStateToProps)(App);
