import React, {
  Component,
  Fragment
} from 'react'
import {
  WingBlank
} from 'antd-mobile'
import {
  toJS
} from 'mobx'
import {
  observer
} from 'mobx-react'
import {
  Link
} from 'react-router-dom'
import storageCollectCooks from '../../api/storageCollectCooks'
import Recommend from './Recommend'
import categores from '../../api/categores'

@observer
class Collect extends Component {
  async componentDidMount() {
    categores.get()
    storageCollectCooks.get()
  }

  render() {
    const collectCooks = toJS(storageCollectCooks.list)

    const dom = collectCooks.map((item) => {
      const style = {
        backgroundImage: `url(${item.albums[0]})`
      }
      return (
        <div
          className="Collect-item"
          key={item.id}
        >
          <div className="Collect-item-content">
            <div style={style} className="Collect-item-cover" />
            <div className="Collect-item-body">
              <h6 className="Collect-item-title">
                {item.title}
              </h6>
              <p>
              家常菜
              </p>
            </div>
          </div>
          <Link to={`/detail/${item.id}`} className="Collect-item-button">查看</Link>
        </div>
      )
    })

    return (
      <WingBlank className="Collect">
        <h1 className="Collect-title">
          我的收藏
        </h1>
        <hr className="Collect-hr-1" />
        <Recommend />
        <hr className="Collect-hr-2" />
        {
          collectCooks.length
            ? (<Fragment>{ dom }</Fragment>)
            : (
              <div className="Collect-not">
                <i className="Collect-not-cover" />
                <p className="Collect-not-title">
                  暂无收藏，快去添加喜欢的菜单吧！
                </p>
              </div>
            )
        }
      </WingBlank>
    )
  }
}

export default Collect
