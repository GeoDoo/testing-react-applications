import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Header from './blocks/Header'

const App = () => {
  // TODO: find better way
  const [, setToken] = useState('')

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/dashboard">You have successfully logged in</Route>
        <Route exact path="/"></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
