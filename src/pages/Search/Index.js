import React, { Component } from 'react'
import {
  WingBlank,
  WhiteSpace
} from 'antd-mobile'
import SearchBar from '../Home/SearchBar'
import api from '../../api'

class Search extends Component {
  state = {
    cook: []
  }

  componentDidMount() {
    const {
      location
    } = this.props
    const q = this.queryString(location.search)
    this.setState(() => ({ q }))
    this.search(q)
  }

  queryString(src) {
    const reg = new RegExp(`(^|&)${'q'}=([^&]*)(&|$)`)
    const r = src.substr(1).match(reg)

    if (r) {
      return decodeURI(r[2])
    }

    return null
  }

  async search(q) {
    try {
      const res = await api.search(q)
      this.setState(() => ({ cook: res.data }))
    } catch (err) {
      this.setState(() => ({ cook: [] }))
    }
  }

  render() {
    const {
      cook
    } = this.state

    const {
      location
    } = this.props

    const q = this.queryString(location.search)

    const dom = cook.map((item) => {
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
          defaultValue={
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
