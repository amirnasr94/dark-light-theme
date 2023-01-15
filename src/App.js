import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import {ThemeContext} from './contexts/theme'
const App = () => {
  // const {
  //   isDark,
  //   theme,
  //   toggleTheme
  // } = useContext(ThemeContext);
  return (
    // <div className='app' style={{backgroundColor:theme.backgroundColor,color:theme.color}}>
    //     <div className='text'>
    //       it is a {isDark ? 'Dark' : 'light'} theme
    //       <button onClick={toggleTheme}>toggle theme</button>
    //     </div>
    // </div>

    <Routes>
      <Route path='/' element={<Layout/>}>

      </Route>
    </Routes>
  )
}

export default App