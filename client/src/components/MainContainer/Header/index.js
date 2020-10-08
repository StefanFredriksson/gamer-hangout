import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function index () {
  return (
    <div id='header-div'>
      <div id='header-grid'>
        <div className='header-item'>
          <Link to='/games'>Games</Link>
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
