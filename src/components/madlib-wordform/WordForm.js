import './WordForm.css'

function WordForm(props) {
  function onInputChange(key, index, event) {
    props.onInputChange(key, index, event.currentTarget.value)
  }

  return (
    <div></div>
  )
}

export default WordForm
