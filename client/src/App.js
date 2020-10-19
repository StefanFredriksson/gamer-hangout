import React, { useContext } from 'react'
import MainContainer from './components/MainContainer'
import Logo from './components/Logo'
import ThemeToggle from './components/ThemeToggle'
import './App.css'
import './dark.css'
import './light.css'
import { ThemeContext } from './Store'
import { BrowserRouter as Router } from 'react-router-dom'

function App () {
  const [theme] = useContext(ThemeContext)
  return (
    <Router>
      <div
        className={`App ${
          theme ? 'light-main-background-color' : 'dark-main-background-color'
        }`}
      >
        <Logo />
        <ThemeToggle />
        <MainContainer />
      </div>
    </Router>
  )
}

export default App
