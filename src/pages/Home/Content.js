import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  observer
} from 'mobx-react'
import { toJS } from 'mobx'
import cook from '../../api/cook'

@observer
class Content extends Component {
  render() {
    let dom = null
    const cookList = toJS(cook.list)

    dom = cookList.map((item) => {
      return (
        <Link to={`/detail/${item.id}`} className="Home-content-item" key={item.id}>
          <div className="cover">
            <img src={item.albums[0]} alt={item.title} width="100%" />
          </div>
          <div className="content">
            <p className="title">
              {item.title}
            </p>
            <p className="imtro">
              {item.imtro}
            </p>
          </div>
        </Link>
      )
    })

    return (
    // 根据 activeIndex class 控制标签的位置
      <div className="Home-content">
        { dom }
      </div>
    )
  }
}

export default Content
