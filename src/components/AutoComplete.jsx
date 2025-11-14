import React, { useState } from 'react'

const AutoComplete = ({ suggestions }) => {

  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleChange = event => {

    const newInput = event.target.value
    console.log(newInput)
    setInputValue(newInput)

    let newSuggestions = []

    if(newInput !== '') {

      newSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(newInput.toLowerCase()))

    }

    setFilteredSuggestions(newSuggestions)
  
  }

  //Sets the input to the suggested value and clears the suggestions
  const handleSelect = value => {

  setInputValue(value)
  setFilteredSuggestions([])

  }

  return (

  <div className= "autocomplete-container">
    <input 
      className="autocomplete-input"
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Type to search..."
    />
    <ul className="autocomplete-suggestions">
      {filteredSuggestions.map((suggestion, index) => (
        <li key={index} className="autocomplete-suggestion" onClick={() => handleSelect(suggestion)}>
        {suggestion}
        </li>
      ))}
    </ul>
  </div>

  )

}

export default AutoComplete
