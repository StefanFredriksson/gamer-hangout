import React, { useContext } from 'react'
import './style.css'
import { ThemeContext } from '../../Store'

export default function Index () {
  const [theme, setTheme] = useContext(ThemeContext)
  const changeTheme = event => {
    console.log(theme)
    setTheme(!theme)
  }

  return (
    <div id='theme-toggle'>
      <input
        onChange={changeTheme}
        type='checkbox'
        className='checkbox'
        id='checkbox'
      />
      <label for='checkbox' class='label'>
        <i className='fa fa-sun-o' />
        <i className='fa fa-moon-o' />
        <div className='ball' />
      </label>
    </div>
  )
}
