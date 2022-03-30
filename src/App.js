import "./App.css"
import React, { useState } from "react"

// data
import MadLibsData from "./data/MadLibs.js"

// components
import Selector from "./components/Selector.js"
import Story from "./components/Story.js"
import WordForm from "./components/WordForm.js"

function App() {
  // states
  const [selectedMadLib, setSelectedMadLib] = useState(MadLibsData[0])

  // event handlers
  const updateMadLibWord = (wordIndex, wordValue) => {  
    let newSelectedMadLib = { ...selectedMadLib }
  
    newSelectedMadLib.words[wordIndex] = {
      ...newSelectedMadLib.words[wordIndex],
      userWord: wordValue
    }

    setSelectedMadLib(newSelectedMadLib)
  }

  // renders
  return (
    <div className="App">
      <h2>MadLibs!</h2>
      <hr />
      <Selector data={MadLibsData} setSelectedMadLib={setSelectedMadLib} />
      <hr />
      <WordForm words={selectedMadLib.words} updateMadLibWord={updateMadLibWord} />
      <Story text={selectedMadLib.getText()} />
    </div>
  )
}

export default App
