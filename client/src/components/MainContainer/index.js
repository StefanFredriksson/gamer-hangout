import React from 'react'
import './style.css'
import Header from './Header'
import Homepage from './Homepage'

export default function index () {
  return (
    <div id='main-container'>
      <Header />
      <Homepage />
    </div>
  )
}
