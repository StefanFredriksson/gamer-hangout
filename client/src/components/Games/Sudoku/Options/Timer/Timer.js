import React from 'react'
import './Timer.css'

export default function Timer () {
  const displayTimer = event => {
    const ctndwn = document.querySelector('#timer-countdown')
    if (event.target.checked) {
      ctndwn.style.visibility = 'visible'
    } else {
      ctndwn.style.visibility = 'hidden'
    }
  }
  return (
    <div id='timer-div'>
      <h3 id='timer-countdown'>0h 0min 0sec</h3>
      <label id='timer-switch'>
        <input type='checkbox' onChange={displayTimer} name='' />
        <span className='btn' />
        <i className='fa fa-clock-o' aria-hidden='true' />
      </label>
    </div>
  )
}
