import React, {
  Component
} from 'react'
import _ from 'lodash'
import axios from 'axios'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import tabItemData0 from '../Home/tabItemData0'
import tabItemData1 from '../Home/tabItemData1'
import tabItemData2 from '../Home/tabItemData2'
import tabItemData3 from '../Home/tabItemData3'

class Detail extends Component {
  state = {
    detail: {
      title: '',
      tags: '',
      albums: [],
      burden: '',
      id: -1,
      imtro: '',
      ingredients: '',
      steps: [],
    }
  }

  componentDidMount() {
    const { match } = this.props
    this.getDetail(match.params.id)

    axios.get('/api/search?q=红烧鲈鱼')
  }

  getDetail(id) {
    const array = tabItemData0.concat(tabItemData1)
      .concat(tabItemData2)
      .concat(tabItemData3)
    const length = array.length
    let detail = {}

    for (let i = 0; i < length; i += 1) {
      if (array[i].id === id) {
        detail = array[i]
        break
      }
    }
    this.setState(() => ({ detail }))
  }

  render() {
    const { detail } = this.state
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
        </WingBlank>
      </div>
    )
  }
}

export default Detail
