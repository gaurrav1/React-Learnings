import React, { Component } from 'react'
import { ThemeContext } from './Project'

export class ClassGrandChild extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
            {({ isDarkMode, toggleTheme }) => (
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
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default ClassGrandChild