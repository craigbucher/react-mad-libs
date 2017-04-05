import React, { Component } from 'react';
import './WordForm.css';

class WordForm extends Component {
  _onInputChange(key, index, event) {
    this.props.onInputChange(key, event.currentTarget.value, index);
  }
  render() {
    return (
      <div></div>
    )
  }
}

export default WordForm;
