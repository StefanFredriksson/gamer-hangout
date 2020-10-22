import React, { useContext } from 'react'
import { ThemeContext, SudokuContext } from '../../../../../Store'
import logic from '../../logic'
import './style.css'

const difficulties = [
  { label: 'Very Easy', num: 1 },
  { label: 'Easy', num: 20 },
  { label: 'Medium', num: 30 },
  { label: 'Difficult', num: 54 },
  { label: 'Very Difficult', num: 68 }
]

export default function Index ({ render, setRender }) {
  const [theme] = useContext(ThemeContext)
  const [sudoku] = useContext(SudokuContext)

  sudoku.difficulty = difficulties[0].num
  sudoku.difficulties = difficulties

  const setDifficulty = event => {
    sudoku.matrix = logic.generateMatrix()
    sudoku.pMatrix = logic.generatePlayerMatrix(
      sudoku.matrix,
      event.target.value
    )
    document.querySelector('#finished-div').style.visibility = 'hidden'
    sudoku.difficulty = event.target.value
    sudoku.time = 0
    clearInterval(sudoku.interval)
    logic.timer(sudoku)
    setRender(render + 1)
  }

  return (
    <div id='difficulties-div'>
      <h3>Difficulties</h3>
      <ul>
        {difficulties.map(d => {
          return (
            <li>
              <button
                className={theme ? 'light-diff-btn' : 'dark-diff-btn'}
                onClick={setDifficulty}
                value={d.num}
              >
                {d.label}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
