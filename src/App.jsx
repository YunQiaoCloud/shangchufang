import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import TabBarNav from './components/TabBarNav'
import './style/App.scss'

// const withRouter = () => (
// )
const App = () => (
  <Router>
    <div className="App">
      {renderRoutes(routes)}
      <TabBarNav />
    </div>
  </Router>
)

export default App
