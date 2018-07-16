import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'
import axios from 'axios'
import Sidebar from './Sidebar'
import api from '../../api'

class Content extends Component {
  state = {
    list: [],
    isShowAnimate: true
  }

  componentWillReceiveProps(nextProps) {
    this.getCook(nextProps)
  }

  async getCook(props) {
    const { activedIndex, recommendCategory } = props
    const { list } = this.state

    // tab 第一个是手动添加进去的全部按钮，所以获取数据的时候要减去 1
    const activedCategory = recommendCategory[activedIndex - 1]

    if (activedCategory) {
      const res = await api.getCooks(activedCategory.id)

      // 只在第一次加载数据的时候显示动画
      if (list.length) {
        this.setState(() => ({ isShowAnimate: false }))
      }

      this.setState(() => ({ list: res.data }))
    }
  }

  render() {
    const { activedIndex } = this.props
    const {
      list,
      isShowAnimate
    } = this.state

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
          <Link to={`/detail/${item.id}`} className="Home-content-item" key={item.id}>
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
          </Link>
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
          isShowAnimate
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
