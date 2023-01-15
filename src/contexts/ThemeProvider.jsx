import React, { useEffect, useState } from 'react'
import { ThemeContext } from './theme'

const ThemeProvider = ({children}) => {
  const [isDark,setIsDark] = useState(false);

  const themes = {
    dark:{
        backgroundColor: '#000',
        color:'#fff'
    },
    light:{
        backgroundColor:'#fff',
        color:'#000'
    }

  }

  const theme = isDark ? themes.dark : themes.light;

  const toggleTheme = () => {
    localStorage.setItem("isDark",JSON.stringify(!isDark));
    console.log(JSON.stringify(!isDark));
    setIsDark(prevState => !prevState);
  }

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark)
  },[]);
  
  return (
    <ThemeContext.Provider value={{
      isDark,
      theme,
      toggleTheme
    }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider