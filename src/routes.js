import React from 'react'
import { Switch, Route } from 'react-router-dom'
import localStorage from 'localStorage'

import Login from './pages/Login'
import Main from './pages/Main'

const Routes = () => (
  <Switch>
    {
      localStorage.getItem('username') 
      ? <Route exact path='/main' component={Main} />
      : <Route exact path='/' component={Login} />
    }
  </Switch>
)

export default Routes
