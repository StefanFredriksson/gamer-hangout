const generateMatrix = () => {
  const matrix = []
  const size = 9

  for (let i = 0; i < size; i++) {
    matrix.push([])

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

const rowIsLegal = (row, num) => {
  return !row.includes(num)
}

const columnIsLegal = (matrix, index, num) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][index] === num) {
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

module.exports = {
  generateMatrix
}
