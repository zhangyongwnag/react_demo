import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory, Route, IndexRoute} from 'react-router'
import App from './App'
import './index.css'

import Bar from './components/Bar'
import Foo from './components/Foo'

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Foo}></IndexRoute>
        <Route path='/Bar' component={Bar}></Route>
        <Route path='/Foo' component={Foo}></Route>
      </Route>
    </Router>
  ),
  document.getElementById('root')
)