import React, { useContext } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../Store'

export default function Index (props) {
  const [theme] = useContext(ThemeContext)
  return (
    <div class='game-div'>
      <img src={`/img/${props.game.filename}`} alt={props.game.title} />
      <Link className={theme ? 'light-game' : 'dark-game'} to={props.game.link}>
        {props.game.title}
      </Link>
    </div>
  )
}
