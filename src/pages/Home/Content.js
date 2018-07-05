import React from 'react'
import QueueAnim from 'rc-queue-anim'
import tabItemData0 from './tabItemData0'
import tabItemData1 from './tabItemData1'
import tabItemData2 from './tabItemData2'
import tabItemData3 from './tabItemData3'

const Content = function(props) {
  const { activedIndex } = props

  let data = []

  // 找到对应的数据
  switch (activedIndex) {
  case 0:
    data = [].concat(tabItemData0)
    break
  case 2:

    data = [].concat(tabItemData2)
    break
  case 3:

    data = [].concat(tabItemData3)
    break

  default:
    data = [].concat(tabItemData1)
    // 1 是默认值
    break
  }

  // 通过屏幕大小计算截取字符串的倍数
  const documentWidth = document.documentElement.clientWidth

  const dom = data.slice(0, 10).map((item) => {
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

export default Content
