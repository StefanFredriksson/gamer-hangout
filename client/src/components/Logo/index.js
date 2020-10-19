import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../Store'

export default function Index () {
  const [theme] = useContext(ThemeContext)
  return (
    <div id='logo-div'>
      <Link class={theme ? 'light-logo' : 'dark-logo'} to='/'>
        Gamer Hangout
      </Link>
    </div>
  )
}
