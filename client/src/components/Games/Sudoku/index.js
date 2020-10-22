import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import logic from './logic'
import Cell from './Cell'
import Options from './Options'
import { SudokuContext } from '../../../Store'

export default function Index () {
  const [sudoku] = useContext(SudokuContext)
  const [render, setRender] = useState(0)

  useEffect(() => {
    sudoku.matrix = logic.generateMatrix()
    sudoku.pMatrix = logic.generatePlayerMatrix(
      sudoku.matrix,
      sudoku.difficulty
    )
    setRender(render + 1)
    logic.timer(sudoku)
  }, [])

  return (
    <div id='sudoku-main-div'>
      <Options render={render} setRender={setRender} />
      <div id='sudoku-div'>
        <table id='sudoku-container'>
          {sudoku.pMatrix.map(row => {
            return (
              <tr>
                {row.map(cell => {
                  if (!cell.visible) {
                    return (
                      <td>
                        <Cell />
                      </td>
                    )
                  }
                  return <td className='cell-container'>{cell.num}</td>
                })}
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}
