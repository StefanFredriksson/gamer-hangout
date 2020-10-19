import React, { useState } from 'react'

export const ThemeContext = React.createContext(0)

const Store = ({ children }) => {
  const [theme, setTheme] = useState(0)

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default Store
