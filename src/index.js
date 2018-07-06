import {
  Route,
  Router,
  Switch
} from 'react-router'

import React from 'react'
import ReactDOM from 'react-dom'
import createHashHistory from 'history/createBrowserHistory'

// create-react-app 配置
import './style/index.css'

import Home from './pages/Home/Index'
import Detail from './pages/Detail/Index'
import registerServiceWorker from './registerServiceWorker'

// history 模式
const history = createHashHistory()

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
    </Switch>
  </Router>,
  document.getElementById('App')
)
registerServiceWorker()
