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
      </div>
    </div>
  )
}
