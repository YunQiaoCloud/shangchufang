import React, { Component } from 'react'
import data from './tabMenuData'
import tabItemData0 from './tabItemData0'

class Sidebar extends Component {
  state = {
    activedIndex: 0,
  }

  changeFood(index) {
    this.setState(() => ({ activedIndex: index }))
  }

  render() {
    const { activedIndex } = this.state
    const cook = tabItemData0.map((item) => {
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
