import React, { Component } from 'react'
import './style.css'
import logic from './logic'

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = { matrix: [] }
  }

  componentDidMount () {
    this.setState({ matrix: logic.generateMatrix() })
  }

  render () {
    return (
      <div id='sudoku-div'>
        <table id='sudoku-container'>
          {this.state.matrix.map(row => {
            return (
              <tr>
                {row.map(cell => {
                  return <td>{cell}</td>
                })}
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}
