import React, { Component } from 'react'
import {
  WingBlank,
  WhiteSpace
} from 'antd-mobile'
import {
  observer
} from 'mobx-react'
import {
  toJS
} from 'mobx'
import _ from 'lodash'
import SearchBar from '../Home/SearchBar'
import search from '../../api/search'

@observer
class Search extends Component {
  componentDidMount() {
    const {
      location
    } = this.props
    const q = this.queryString(location.search)

    // 设置当前搜索内容，触发搜索操作
    search.currentQ = q
  }

  queryString(src) {
    const reg = new RegExp(`(^|&)${'q'}=([^&]*)(&|$)`)
    const r = src.substr(1).match(reg)

    if (r) {
      return decodeURI(r[2])
    }

    return null
  }

  render() {
    const {
      location
    } = this.props

    const q = this.queryString(location.search)
    const cooks = _.get(toJS(search.currentList[0]), 'cookList') || []
    const dom = cooks.map((item) => {
      const style = {
        backgroundImage: `url(${item.albums[0]})`
      }

      // 似乎因为配置 scss 的问题，导致从无法加载 WebkitBoxOrient 这个属性
      const style2 = {
        WebkitBoxOrient: 'vertical'
      }

      return (
        <a href="javascript:;" key={item.id} className="Search-item">
          <div
            className="cover"
            style={
              style
            }
          />

          <div className="Search-item-body">

            <h6 className="title">
              {item.title}
            </h6>
            <p
              className="content"
              style={
                style2
              }
            >
              {
                item.imtro
              }
            </p>
          </div>
        </a>
      )
    })

    return (
      <WingBlank size="lg" className="Search">
        <WhiteSpace size="lg" />
        <SearchBar
          value={
            q
          }
          isHideCover
          onSearch={value => this.search(value)}
        />
        <WhiteSpace size="lg" />
        {dom}
      </WingBlank>
    )
  }
}
export default Search
