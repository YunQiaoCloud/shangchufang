import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import TabBarNav from './components/TabBarNav'
import RouterScroll from './RouterScroll'
import './style/App.scss'

// const withRouter = () => (
// )
const App = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <RouterScroll>
      <div className="App">
        {renderRoutes(routes)}
        <TabBarNav />
      </div>
    </RouterScroll>
  </Router>
)

export default App
