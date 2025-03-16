import React, { useContext } from 'react'
import { ThemeContext } from './Project';

function GrandChild() {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    return (
        <button 
            style={
                {
                    background: isDarkMode ? '#fff' : '#333',
                    color: isDarkMode ? '#333' : '#fff',
                    padding: '10px',
                    border: 'none',
                    cursor: 'pointer'
                }
            }
            onClick={toggleTheme}
        >
            Toggle theme
        </button>
    )
}

export default GrandChild