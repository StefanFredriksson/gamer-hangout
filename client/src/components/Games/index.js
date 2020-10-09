import React from 'react'
import './style.css'
import Game from './Game'

const games = [
  {
    key: 0,
    filename: 'bouncy_balls.png',
    title: 'Bouncy Balls',
    link: '/games/bouncyballs'
  },
  {
    key: 1,
    filename: 'sudoku.png',
    title: 'Sudoku',
    link: '/games/sudoku'
  },
  {
    key: 2,
    filename: '',
    title: 'Minesweeper',
    link: '/games/minesweeper'
  }
]

export default function Index () {
  return (
    <div id='gamer-div'>
      {games.map(g => {
        return <Game game={g} key={g.key} />
      })}
    </div>
  )
}
