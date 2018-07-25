import React, {
  Component
} from 'react'
import {
  WingBlank,
  WhiteSpace
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
import Recommend from './Recommend'
import categores from '../../api/categores'
import recordIcon from '../../assets/record.svg'

@observer
class Collection extends Component {
  state = {
    isRecord: false
  }

  async componentDidMount() {
    await categores.get()
  }

  render() {
    const {
      isRecord
    } = this.state
    console.log(window.localStorage)
    const collectionLists = toJS(categores.list)
    console.log(collectionLists)

    const dom = collectionLists.map((item) => {
      return (
        <Link
          to={`/search?q=${item.title}`}
          className="Home-search-recommend-item"
          onClick={e => e.stopPropagation()}
          key={item.id}
        >
          {item.title}
        </Link>
      )
    })

    const recordBack = {
      backgroundImage: `url(${recordIcon})`
    }

    return (
      <div className="Collection">
        <WingBlank>
          <WhiteSpace size="lg" />
          <div className="Collection-title">
            <h1>
              我的收藏
            </h1>
          </div>
          <WhiteSpace size="lg" />
          <Recommend />
          <WhiteSpace size="lg" />
          {
            isRecord
              ? (
                { dom }
              ) : (
                <div>
                  <div style={recordBack} />
                  <h2>暂无收藏，快去添加喜欢的菜单吧！</h2>
                </div>
              )
          }
        </WingBlank>
      </div>
    )
  }
}

export default Collection
