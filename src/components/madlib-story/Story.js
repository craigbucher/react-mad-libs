import React, { Component } from 'react'
import './Story.css'

class Story extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Story
