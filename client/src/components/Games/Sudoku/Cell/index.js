import React, { useContext } from 'react'
import './style.css'
import { isCompleted } from '../logic'
import { SudokuContext } from '../../../../Store'

export default function Index (props) {
  const [sudoku] = useContext(SudokuContext)
  const verifyInput = event => {
    const v = parseInt(event.key)
    const total = isNaN(v) ? v : parseInt(event.target.value + v)

    if (
      (total <= 0 || total > 9 || isNaN(total)) &&
      event.key !== 'Backspace'
    ) {
      event.preventDefault()
    } else {
      const col = event.target.parentElement.parentElement.cellIndex
      const row =
        event.target.parentElement.parentElement.parentElement.rowIndex

      if (!sudoku.pMatrix[row][col].initial) {
        sudoku.pMatrix[row][col].num = isNaN(total) ? '' : total
        if (isCompleted(sudoku.pMatrix)) {
          document.querySelector('#finished-div').style.visibility = 'visible'
          clearInterval(sudoku.interval)
        } else {
          /* Fix timer restart on completed sudoku but then removes a number from the matrix */
          document.querySelector('#finished-div').style.visibility = 'hidden'
        }
      }
    }
  }

  return (
    <div className='sudoku-cell'>
      <input type='text' className='cell-input' onKeyDown={verifyInput} />
    </div>
  )
}
