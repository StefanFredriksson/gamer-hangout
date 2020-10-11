import React, { Component } from 'react'
import './style.css'
import logic from './logic'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = { matrix: [], pMatrix: [] }
    this.verifyInput = this.verifyInput.bind(this)
  }

  componentDidMount () {
    const matrix = logic.generateMatrix()
    const pMatrix = logic.generatePlayerMatrix(matrix)
    this.setState({ matrix, pMatrix })
  }

  verifyInput (event) {
    const v = parseInt(event.key)
    const total = isNaN(v) ? v : parseInt(event.target.value + v)

    if (
      (total <= 0 || total > 9 || isNaN(total)) &&
      event.key !== 'Backspace'
    ) {
      event.preventDefault()
    } else {
      const col = event.target.parentElement.cellIndex
      const row = event.target.parentElement.parentElement.rowIndex

      if (!this.state.pMatrix[row][col].initial) {
        this.state.pMatrix[row][col].num = isNaN(total) ? '' : total
        if (logic.isCompleted(this.state.pMatrix)) {
          console.log('Completed!')
        }
      }
    }
  }

  render () {
    return (
      <div id='sudoku-div'>
        <table id='sudoku-container'>
          {this.state.pMatrix.map(row => {
            return (
              <tr>
                {row.map(cell => {
                  if (!cell.visible) {
                    return (
                      <td>
                        <input
                          type='text'
                          className='cell-input'
                          onKeyDown={this.verifyInput}
                        />
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
    )
  }
}
