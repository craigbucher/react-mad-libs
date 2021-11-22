import './App.css'
import React, { useState } from 'react'
import WordForm from './components/madlib-wordform/WordForm.js'
import Story from './components/madlib-story/Story.js'
import MadLibs from './madlibs/MadLibs.js'

function App() {
  // states
  //const [madlibs, setMadLibs] = useState(MadLibs)
  const [selectedMadLib, setSelectedMadLib] = useState(MadLibs[0])

  // event handlers
  const onWordInputChange = (key, index, value) => {
    let newSelectedMadLib = { ...selectedMadLib }
    newSelectedMadLib.words[index] = {
      ...newSelectedMadLib.words[index],
      value: value
    }
    
    setSelectedMadLib(newSelectedMadLib)
  }

  // renders
  return (
    <div className="App">
      <h1>MADLIBS!</h1>
      <WordForm words={selectedMadLib.words} onInputChange={onWordInputChange} />
      <Story text={selectedMadLib.getText()} />
    </div>
  )
}

export default App
