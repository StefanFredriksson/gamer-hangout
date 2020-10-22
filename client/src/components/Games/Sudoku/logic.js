const generateMatrix = () => {
  const matrix = []
  const size = 9

  for (let i = 0; i < size; i++) {
    if (matrix.length < size) {
      matrix.push([])
    }

    for (let j = 0; j < size; j++) {
      let num = 0
      let stuckCount = 0
      do {
        if (stuckCount > 2000) {
          for (let k = 0; k < 3; k++) {
            if (i - k >= 0) {
              matrix[i - k] = []
            }
          }
          if (i - 2 >= 0) {
            i -= 2
          } else {
            i = 0
          }
          j = 0
          stuckCount = 0
        }
        num = Math.floor(Math.random() * size + 1)
        stuckCount++
      } while (
        !rowIsLegal(matrix[i], num) ||
        !columnIsLegal(matrix, j, num) ||
        !boxIsLegal(matrix, i, j, num)
      )

      matrix[i].push(num)
    }
  }

  return matrix
}

const generatePlayerMatrix = (matrix, difficulty) => {
  const pMatrix = []

  for (let i = 0; i < matrix.length; i++) {
    pMatrix.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      const obj = { visible: true, num: matrix[i][j], initial: true }
      pMatrix[i].push(obj)
    }
  }

  for (let i = 0; i < difficulty; i++) {
    do {
      const col = Math.floor(Math.random() * 9)
      const row = Math.floor(Math.random() * 9)

      if (pMatrix[row][col].visible) {
        pMatrix[row][col].visible = false
        pMatrix[row][col].num = ''
        pMatrix[row][col].initial = false
        break
      }
    } while (true)
  }

  return pMatrix
}

const rowIsLegal = (row, num, index) => {
  for (let i = 0; i < row.length; i++) {
    if ((i !== index && row[i] === num) || row[i] === '') {
      return false
    }
  }

  return true
}

const columnIsLegal = (matrix, index, num, ix) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][index] === num && i !== ix) {
      return false
    }
  }

  return true
}

const boxIsLegal = (matrix, colIndex, rowIndex, num) => {
  const vals = [0, 3, 6]

  if (vals.includes(rowIndex) && !vals.includes(colIndex)) {
    colIndex--
    rowIndex += 2
  } else if (!vals.includes(rowIndex)) {
    rowIndex--
  } else {
    return true
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[colIndex][rowIndex] === num) {
        return false
      }

      if (vals.includes(rowIndex)) {
        break
      } else {
        rowIndex--
      }
    }

    if (vals.includes(colIndex)) {
      break
    } else {
      colIndex--
      rowIndex += 2
    }
  }

  return true
}

const isCompleted = pMatrix => {
  const matrix = pMatrix.map(m => {
    return m.map(c => {
      return c.num
    })
  })

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const cell = matrix[i][j]

      if (
        !rowIsLegal(matrix[i], cell, j) ||
        !columnIsLegal(matrix, j, cell, i) ||
        !boxIsLegal(matrix, i, j, cell)
      ) {
        return false
      }
    }
  }

  return true
}

const timer = sudoku => {
  const timerNode = document.querySelector('#timer-countdown')

  const interval = setInterval(() => {
    sudoku.time += 1
    const hours = Math.floor(sudoku.time / (60 * 60))
    const minutes = Math.floor((sudoku.time / 60) % 60)
    const seconds = Math.floor(sudoku.time % 60)
    const timeString = `${hours}h ${minutes}${
      minutes <= 1 ? 'min' : 'mins'
    } ${seconds}${seconds <= 1 ? 'sec' : 'secs'}`
    timerNode.textContent = timeString
  }, 1000)

  sudoku.interval = interval
}

module.exports = {
  generateMatrix,
  generatePlayerMatrix,
  isCompleted,
  timer
}
