import React, { useEffect, createContext } from 'react'
import Child from './Child';

export const ThemeContext = createContext();

function Project() {
    const [isDarkMode, setIsDarkMode] = React.useState(false)

    function toggleTheme() {
        setIsDarkMode(d => !d)
    }

    useEffect(() => {
        document.body.style.background = isDarkMode ? '#333' : '#fff';
        document.body.style.color = isDarkMode ? '#fff' : '#333';
    }, [isDarkMode]);

  return (
    <>
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <Child />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem nostrum voluptates molestiae sunt laborum molestias recusandae incidunt autem, velit officiis modi fugit repellendus exercitationem reprehenderit reiciendis repellat maxime itaque.
        </p> 
    </ThemeContext.Provider>
    </>
  )
}

export default Project