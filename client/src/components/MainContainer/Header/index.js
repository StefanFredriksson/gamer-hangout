import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../Store'

export default function Index () {
  const [theme] = useContext(ThemeContext)
  return (
    <div
      className={theme ? 'light-header-border' : 'dark-header-border'}
      id='header-div'
    >
      <div id='header-grid'>
        <div className='header-item'>
          <Link
            className={theme ? 'light-header-link' : 'dark-header-link'}
            to='/games'
          >
            Games
          </Link>
        </div>
        <div className='header-item'>
          <span>Movies</span>
        </div>
        <div className='header-item'>
          <span>Series</span>
        </div>
        <div className='header-item'>
          <span>Streams</span>
        </div>
        <div className='header-item'>
          <span>Chat</span>
        </div>
        <div>
          <i id='header-options' className='fa fa-bars' aria-hidden='true'>
            <ul>
              <li>
                <span>Dark mode</span>
              </li>
              <li>
                <span>Login</span>
              </li>
              <li>
                <span>Dark mode</span>
              </li>
              <li>
                <span>Login</span>
              </li>
              <li>
                <span>Dark mode</span>
              </li>
              <li>
                <span>Login</span>
              </li>
            </ul>
          </i>
        </div>
      </div>
    </div>
  )
}
