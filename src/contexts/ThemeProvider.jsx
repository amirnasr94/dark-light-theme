import React from 'react'
import { ThemeContext } from './theme'

const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={{}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider