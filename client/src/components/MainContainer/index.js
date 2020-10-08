import React from 'react'
import './style.css'
import Header from './Header'
import Homepage from './Homepage'
import Games from '../Games'
import { Switch, Route } from 'react-router-dom'

export default function index () {
  return (
    <div id='main-container'>
      <Header />
      <Switch>
        <Route path='/games'>
          <Games />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </div>
  )
}
