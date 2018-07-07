import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import tabItemData0 from './tabItemData0'
import Sidebar from './Sidebar'
import tabItemData1 from './tabItemData1'
import tabItemData2 from './tabItemData2'
import tabItemData3 from './tabItemData3'

class Content extends Component {
  changeFood(index) {
    console.log(index)
  }

  render() {
    const { activedIndex } = this.props

    let data = []

    // 找到当前 tab 序列对应的数据
    switch (activedIndex) {
    case 0:
      data = []
      break
    case 2:

      data = [].concat(tabItemData2)
      break
    case 3:

      data = [].concat(tabItemData3)
      break

    default:
    // 1 是默认值
      data = [].concat(tabItemData1)
      break
    }

    // 通过屏幕大小计算截取字符串的倍数
    const documentWidth = document.documentElement.clientWidth
    let dom = null

    // 除了第一个 tab，其他 tab 正常显示分类下的数据，第一个 tab 显示所有分类。
    if (activedIndex !== 0) {
      dom = data.slice(0, 10).map((item) => {
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
      const food = tabItemData0.map((item) => {
        return (
          <div key={item.id}>
            <div className="cover" />
            <p>
              {item.title}
            </p>
          </div>
        )
      })
      console.log(food)
      dom = (
        <div>
          <Sidebar changeFood={index => this.changeFood(index)} />

          <div>
            {food}
          </div>
        </div>
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
              <div>
                { dom }
              </div>
            )
        }
      </div>
    )
  }
}

export default Content
