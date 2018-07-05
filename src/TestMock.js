import React, {
  Component
} from 'react'
import Mock from 'mockjs'
import $ from 'jquery'
import logo from './assets/logo.svg'

class TestMock extends Component {
  state = {
    list: [],
    reqStatus: 'null'
  }

  onRequest() {
    Mock.mock(/menu/, {
      'list|1-10': [{
        'id|+1': 1,
        email: '@EMAIL'
      }]
    })

    $.ajax({
      url: 'menu',
      method: 'post',
      dataType: 'json'
    }).done((list, status) => {
      if (status === 'success') {
        this.setState(() => ({ list, reqStatus: status }))
      }
    })
  }

  render() {
    const { list, reqStatus } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            测试 Mock 拦截数据!
          </h1>
        </header>
        <p className="App-intro">
          <code>
            {JSON.stringify(list)}
          </code>
        </p>

        <div>
          请求状态：
          {reqStatus}
        </div>

        <button className="button" type="button" onClick={() => this.onRequest()}>
          发送请求
        </button>
      </div>
    )
  }
}

export default TestMock
