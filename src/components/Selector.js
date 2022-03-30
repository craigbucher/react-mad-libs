function Selector(props) {
  // render
  const renderChoices = () => {
    return null // implement changes
  }

  return (
    <div id="div-selector">
      <span>Select Story: </span>
      <select>
        { renderChoices() }
      </select>
    </div>
  )
}

export default Selector