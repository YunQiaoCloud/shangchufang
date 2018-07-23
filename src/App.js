import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import TabBarNav from './components/TabBarNav'
import RouterScroll from './RouterScroll'
import Ani from './ani'
import './style/App.scss'

const url = 'https://zos.alipayobjects.com/rmsportal/NbWTEbiswBhrRBU.svg'

class App extends Component {
  state = {
    isShowAni: true
  }

  onSetHidden() {
    this.setState(() => ({ isShowAni: false }))
  }

  render() {
    const { isShowAni } = this.state
    return (
      <Router>
        <RouterScroll>
          <div className="App">
            {
              isShowAni
                ? (
                  <Ani
                    image={url}
                    update
                    isShowAni={isShowAni}
                    setHidden={() => this.onSetHidden()}
                    pixSize={20}
                    pointSizeMin={10}
                  />
                )
                : null
            }
            {renderRoutes(routes)}
            <TabBarNav />
          </div>
        </RouterScroll>
      </Router>
    )
  }
}

export default App
