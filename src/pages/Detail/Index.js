import React, {
  Component
} from 'react'
import _ from 'lodash'
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
import cook from '../../api/cook'

@observer class Detail extends Component {
  componentDidMount() {
    cook.getDetail(this.props.match.params.id)
  }

  render() {
    const detail = toJS(cook.detail)

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
