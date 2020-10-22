import React from 'react'
import './style.css'
import Difficulty from './Difficulty'
import Timer from './Timer/Timer'
import Finished from './Finished/Finished'

export default function index ({ render, setRender }) {
  return (
    <div id='options-panel'>
      <Difficulty render={render} setRender={setRender} />
      <div id='right-side-div'>
        <Timer />
        <Finished />
      </div>
    </div>
  )
}
