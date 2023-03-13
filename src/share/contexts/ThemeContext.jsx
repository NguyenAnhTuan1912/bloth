import React from 'react'

/**
 * @type {{ currentTheme: string, setCurrentTheme: React.Dispatch<React.SetStateAction<string>> }}
 */
const initalValue = {currentTheme: "light", setCurrentTheme: undefined}

const ThemeContext = React.createContext(initalValue);

export {
  ThemeContext
}