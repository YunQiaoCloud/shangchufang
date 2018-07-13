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

    return (
      <div className="Detail">
        <div className="Detail-cover" style={coverStyle} />
        <WingBlank>
          <h1 className="Detail-title">
            {detail.title}
          </h1>
          <div className="Detail-tag">
            {tagDom}
          </div>
          <p className="Detail-imtro">
            {detail.imtro}
          </p>

          <div className="comtent">
            <p>
              {detail.burden}
            </p>
          </div>
        </WingBlank>
      </div>
    )
  }
}

export default Detail
