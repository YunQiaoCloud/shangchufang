import React, { Component } from 'react'
import axios from 'axios'
import data from './tabMenuData'
import api from '../../api'

class Sidebar extends Component {
  state = {
    activedIndex: 0,
    cooks: []
  }

  componentDidMount() {
    // 加载时触发一下请求数据
    this.changeFood(0)
  }

  async changeFood(index) {
    this.setState(() => ({ activedIndex: index }))

    const res = await api.getCooks(data[index].id)
    this.setState(() => ({ cooks: res.data }))
  }

  render() {
    const { activedIndex, cooks } = this.state
    const cook = cooks.map((item) => {
      const style = {
        backgroundImage: `url(${item.albums[0]})`
      }
      return (
        <div className="cook" key={item.id}>
          <div className="cover" style={style} />
          <p className="title">
            {item.title}
          </p>
        </div>
      )
    })
    const dom = data.map((item, index) => {
      return (
        <a
          key={item.id}
          href="javascript:;"
          className={activedIndex === index ? 'actived' : ''}
          onClick={() => this.changeFood(index)}
        >
          {item.name}
        </a>
      )
    })

    return (
      <div className="Home-content-all">
        <div className="Sidebar">
          {dom}
        </div>

        <div className="Home-content-all-cook">
          {cook}
        </div>
      </div>
    )
  }
}

export default Sidebar
