import React, { Component, Fragment } from 'react'
import QueueAnim from 'rc-queue-anim'
import axios from 'axios'
import Sidebar from './Sidebar'

class Content extends Component {
  state = {
    list: []
  }

  componentWillReceiveProps(nextProps) {
    this.getCook(nextProps)
  }

  async getCook(props) {
    const { activedIndex, recommendCategory } = props

    // tab 第一个是手动添加进去的全部按钮，所以获取数据的时候要减去 1
    const activedCategory = recommendCategory[activedIndex - 1]
    if (activedCategory) {
      const res = await axios.get(`/api/cook/${activedCategory.id}`)
      this.setState(() => ({ list: res.data }))
    }
  }

  render() {
    const { activedIndex } = this.props
    const { list } = this.state

    // 通过屏幕大小计算截取字符串的倍数
    const documentWidth = document.documentElement.clientWidth
    let dom = null

    // 除了第一个 tab，其他 tab 正常显示分类下的数据，第一个 tab 显示所有分类。
    if (activedIndex !== 0) {
      dom = list.map((item) => {
        let imtro = item.imtro

        // 大于1536 是 ipad，不用截取
        if (documentWidth < 1536) {
          // 默认宽度小于750的设备截取28个字符
          let strLength = 28

          if (documentWidth >= 750) {
            strLength = 48
          }

          imtro = imtro.substr(0, strLength)

          // 如果 imtro 并没有达到截取字数，不用加省略号
          imtro += imtro.length === strLength ? '...' : ''
        }

        return (
          <div className="Home-content-item" key={item.id}>
            <div className="cover">
              <img src={item.albums[0]} alt={item.title} width="100%" />
            </div>
            <div className="content">
              <p className="title">
                {item.title}
              </p>
              <p className="imtro">
                {imtro}
              </p>
            </div>
          </div>
        )
      })
    } else {
      dom = (
        <Sidebar />
      )
    }

    return (
    // 根据 activedIndex class 控制标签的位置
      <div className="Home-content">
        {
          // 第一次进入的时候才启用动画
          activedIndex === -1
            ? (
              <QueueAnim>
                {dom}
              </QueueAnim>
            )
            : (
              <Fragment>
                { dom }
              </Fragment>
            )
        }
      </div>
    )
  }
}

export default Content
