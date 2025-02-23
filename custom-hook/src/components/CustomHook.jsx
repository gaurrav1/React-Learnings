import React, { useState } from 'react'
import useToggle from './useToggle';

function useInputValue(initialValue) {
    const [value, setValue] = useState(initialValue);
    return {
      value,
      onChange: (e) => setValue(e.target.value)
    }
}

function CustomHook() {

    const nameInput = useInputValue('');
    const [isDarkMode, toggleDarkMode] = useToggle(false);
  
    return (
      <div style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
        <label>Name: <input type="text" {...nameInput} /></label>
        <br /><br />
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    )
}

export default CustomHook