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
import App from './App'
import TestPage from './TestPage'
import registerServiceWorker from './registerServiceWorker'

// history 模式
const history = createHashHistory()

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/test_page" component={TestPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
