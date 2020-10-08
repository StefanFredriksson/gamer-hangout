import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function index () {
  return (
    <div id='logo-div'>
      <Link to='/'>Gamer Hangout</Link>
    </div>
  )
}
