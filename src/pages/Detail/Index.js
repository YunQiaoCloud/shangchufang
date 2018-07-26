import React, {
  Component
} from 'react'
import _ from 'lodash'
import {
  WingBlank,
  WhiteSpace,
  Button
} from 'antd-mobile'
import {
  toJS
} from 'mobx'
import {
  observer
} from 'mobx-react'
import cook from '../../api/cook'
import storageCollectCooks from '../../api/storageCollectCooks'

@observer class Detail extends Component {
  componentDidMount() {
    storageCollectCooks.get()
    cook.getDetail(this.props.match.params.id)
  }

  onCollect(state) {
    const cookDetail = toJS(cook.detail)
    storageCollectCooks.set(Object.assign({}, cookDetail, { state }))
  }

  render() {
    const detail = toJS(cook.detail)
    const collectCooks = toJS(storageCollectCooks.list)
    let isCollected = false
    const index = _.findIndex(collectCooks, ['id', this.props.match.params.id])

    // 判断收藏状态，state 为 true 则是收藏
    isCollected = _.get(collectCooks, `[${index}].state`)

    const coverStyle = {
      backgroundImage: `url(${_.get(detail.albums, '[0]')})`
    }

    // 标签按照 ; 切割输出成数组，之后套上 span 渲染为 dom
    const tagDom = detail.tags.split(';').map((item) => {
      return (
        <span key={item} className="Detail-tag-item">
          {item}
          {' '}
        </span>
      )
    })

    // 整理用料数据
    const materialStr = `${detail.ingredients};${detail.burden}`
    const materialDom = materialStr.split(';').filter(item => item).map((item) => {
      return (
        <p key={item} className="Detail-material-item">
          <span>
            {item.split(',')[0]}
          </span>
          <span>
            {item.split(',')[1]}
          </span>
        </p>
      )
    })

    // 做法步骤
    const practiceDom = detail.steps.map((item) => {
      return (
        <div key={item.step} className="Detail-step">
          <p>{item.step}</p>
          <img src={item.img} alt={item.step} />
        </div>
      )
    })

    return (
      <div className="Detail">
        <div className="Detail-cover" style={coverStyle} />
        <WingBlank>
          <h1 className="Detail-title" title={detail.title}>
            {detail.title}
            <Button className="Favorite" onClick={() => this.onCollect(!isCollected)} type="primary">
              {
                isCollected ? '取消收藏' : '收藏'
              }
            </Button>
          </h1>
          <div className="Detail-tag">
            {tagDom}
          </div>
          <p className="Detail-imtro">
            {detail.imtro}
          </p>
          <h1 className="Detail-title" title="用料">
            用料
          </h1>
          <div className="Detail-material">
            {materialDom}
          </div>
          <h1 className="Detail-title" title={detail.title}>
            {detail.title}的做法
          </h1>
          <div className="Detail-practice">
            {practiceDom}
          </div>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    )
  }
}

export default Detail
