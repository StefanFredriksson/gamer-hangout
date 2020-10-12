import React, { Component } from 'react'
import './style.css'
import logic from './logic'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.difficulties = [
      { label: 'Very Easy', num: 12 },
      { label: 'Easy', num: 20 },
      { label: 'Medium', num: 30 },
      { label: 'Difficult', num: 54 },
      { label: 'Very Difficult', num: 68 }
    ]
    this.state = {
      matrix: [],
      pMatrix: [],
      difficulty: this.difficulties[0].num
    }
    this.verifyInput = this.verifyInput.bind(this)
    this.setDifficulty = this.setDifficulty.bind(this)
  }

  componentDidMount () {
    const matrix = logic.generateMatrix()
    const pMatrix = logic.generatePlayerMatrix(matrix, this.state.difficulty)
    this.setState({ matrix, pMatrix })
  }

  setDifficulty (event) {
    const matrix = logic.generateMatrix()
    const pMatrix = logic.generatePlayerMatrix(matrix, event.target.value)
    this.setState({ matrix, pMatrix, difficulty: event.target.value })
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
      <div id='sudoku-main-div'>
        <div id='options-panel'>
          <div id='difficulties-div'>
            <h3>Difficulties</h3>
            <ul>
              {this.difficulties.map(d => {
                return (
                  <li>
                    <button onClick={this.setDifficulty} value={d.num}>
                      {d.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
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
      </div>
    )
  }
}
