import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import QueueAnim from 'rc-queue-anim'
import PropTypes from 'prop-types'
import TweenOne, { TweenOneGroup } from 'rc-tween-one'
import coverLoading from '../../assets/banner_loading.svg'
import data from '../Home/tabMenuData'
import api from '../../api'
import SearchBar from '../Home/SearchBar'

class List extends Component {
  state = {
    activedIndex: 0,
    cooks: [
      {
        albums: {
          0: coverLoading
        },
        id: '0',
        title: '获取中...'
      },
      {
        albums: {
          0: coverLoading
        },
        id: '1',
        title: '获取中...'
      },
      {
        albums: {
          0: coverLoading
        },
        id: '2',
        title: '获取中...'
      }
    ]
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
    const cook = cooks.map((item, index) => {
      const style = {
        backgroundImage: `url(${item.albums[0]})`
      }
      return (
        <Link to={`/detail/${item.id}`} className="Home-content-item" key={item.id}>
          <div className="cook">
            <div className="cover" style={style} />
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
          className={activedIndex === index ? 'actived' : ''}
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
            {dom}
          </div>
          <div className="Home-content-all-cook">
            {cook}
          </div>
        </div>
      </WingBlank>
    )
  }
}

export default List
