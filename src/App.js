import React, {
  Component
} from 'react'
import logo from './assets/logo.svg'

class App extends Component {
  state = {
    testData: '测试变量',
    testData1: '11111'
  }

  render() {
    // 模板使用的数据需要先解构定义
    const {
      testData,
      testData1
    } = this.state

    setTimeout(() => {
      // 变动更新
      this.setState((prevState) => {
        // 需要用变动的数据 + 原始 state 数据，组合返回一个新的对象，
        return Object.assign({}, prevState, {
          testData: '变动更新'
        })
      })
    }, 3000)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Heading Content!
            {
              testData
            }
          </h1>
        </header>
        <p className="App-intro">
          {
            testData1
          }
          <code>
            src/App.js
          </code>
          and save to reload.
        </p>
      </div>
    )
  }
}

export default App
