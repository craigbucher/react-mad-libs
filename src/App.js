import React, { Component } from 'react';
import './App.css';
import WordForm from './components/madlib-wordform/WordForm.js';
import Story from './components/madlib-story/Story.js';
import MadLibs from './madlibs/MadLibs.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      madlibs: MadLibs,
      selectedMadLib: MadLibs[0]
    };
  }
  _onWordInputChange(key, value, index) {
    const newState = {
      ...this.state
    };
    newState.selectedMadLib.words[index] = {
      ...newState.selectedMadLib.words[index],
      value: value
    };
    this.setState(newState);
  }
  render() {
    return (
      <div className="App">
        <h1>MADLIBS!</h1>
        <WordForm words={this.state.selectedMadLib.words} onInputChange={this._onWordInputChange.bind(this)} />
        <Story text={this.state.selectedMadLib.getText()} />
      </div>
    );
  }
}

export default App;
