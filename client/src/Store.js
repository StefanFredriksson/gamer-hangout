import React, { useState } from 'react'
import { sudokuState } from './SudokuState'

export const ThemeContext = React.createContext(0)
export const SudokuContext = React.createContext(sudokuState)

const Store = ({ children }) => {
  const [theme, setTheme] = useState(0)
  const [sudoku, setSudoku] = useState(sudokuState)

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <SudokuContext.Provider value={[sudoku, setSudoku]}>
        {children}
      </SudokuContext.Provider>
    </ThemeContext.Provider>
  )
}

export default Store
