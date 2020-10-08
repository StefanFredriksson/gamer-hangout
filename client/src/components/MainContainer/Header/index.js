import React from 'react'
import './style.css'

export default function index () {
  return (
    <div id='header-div'>
      <div id='header-grid'>
        <div class='header-item'>
          <span>Games</span>
        </div>
        <div class='header-item'>
          <span>Movies</span>
        </div>
        <div class='header-item'>
          <span>Series</span>
        </div>
        <div class='header-item'>
          <span>Streams</span>
        </div>
        <div class='header-item'>
          <span>Chat</span>
        </div>
        <div>
          <i id='header-options' class='fa fa-bars' aria-hidden='true'>
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
