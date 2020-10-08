import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Index () {
  return (
    <div id='gamer-div'>
      <h1>Games page!</h1>
      <Link to='/games/bouncyballs'>Bouncy Balls</Link>
    </div>
  )
}
