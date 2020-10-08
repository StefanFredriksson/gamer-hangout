import React from 'react'
import MainContainer from './components/MainContainer'
import Logo from './components/Logo'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Logo />
        <MainContainer />
      </div>
    </Router>
  )
}

export default App
