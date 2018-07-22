import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import {
  observer
} from 'mobx-react'
import {
  toJS
} from 'mobx'
import categores from '../../api/categores'
import data from '../Home/tabMenuData'
import SearchBar from '../Home/SearchBar'

@observer
class List extends Component {
  async componentDidMount() {
    // 加载时触发一下请求数据
    await categores.get()

    categores.activeIndex = 0
  }

  async changeFood(index) {
    categores.activeIndex = index
  }

  render() {
    const activeIndex = categores.activeIndex
    const categoresList = toJS(categores.list)

    // categoresList 有可能正在请求中，没有获取到数据，get 避免报错
    const cooks = _.get(categoresList[activeIndex], 'cookList') || []

    const cooksDom = cooks.map((item) => {
      return (
        <Link to={`/detail/${item.id}`} className="Home-content-item" key={item.id}>
          <div className="cook">
            <div className="cover">
              <img src={item.albums[0]} alt={item.title} />
            </div>
            <p className="title">
              {item.title}
            </p>
          </div>
        </Link>
      )
    })
    const dom = data.map((item, index) => {
      return (
        <a
          key={item.id}
          href="javascript:;"
          className={
            activeIndex === index ? 'active' : ''
          }
          onClick={() => this.changeFood(index)}
        >
          {item.name}
        </a>
      )
    })

    return (
      <WingBlank>
        <WhiteSpace size="lg" />
        <SearchBar />
        <WhiteSpace size="lg" />
        <div className="Home-content-all">

          <div className="Sidebar">
            <div className="Sidebar-content">
              {dom}
            </div>
          </div>
          <div className="Home-content-all-cook">
            {cooksDom}
          </div>
        </div>
      </WingBlank>
    )
  }
}

export default List
