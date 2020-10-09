import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Index (props) {
  return (
    <div class='game-div'>
      <img src={`/img/${props.game.filename}`} alt={props.game.title} />
      <Link to={props.game.link}>{props.game.title}</Link>
    </div>
  )
}
