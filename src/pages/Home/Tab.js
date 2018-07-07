import React from 'react'
import tabData from './tabMenuData'

// 第一个  tab 为全部内容列表
const data = tabData.slice(0)
data.unshift({ name: '全部', id: '09', parentId: '0' })

const Tab = function(props) {
  // 继承 activedIndex 以及设置 activedIndex 的函数
  const { activedIndex, setActivedIndex } = props

  // actived index 如果为 -1（默认值），则手动设置为 1
  const slectedIndex = activedIndex === -1 ? 1 : activedIndex

  // 暂时只显示四个标签
  const tabs = data.slice(0, 4).map((item, index) => {
    // 根据 props 的 slectedIndex 设置默认选中的 tab
    const classNameStatus = index === slectedIndex ? 'actived' : ''
    return (
      <a
        href="javascript:;"
        className={`Home-tab-item ${classNameStatus}`}
        key={item.id}
        onClick={() => setActivedIndex(index)}
      >
        {item.name}
      </a>
    )
  })

  return (
  // 根据 slectedIndex class 控制标签的位置
    <div className={`Home-tab actived-${slectedIndex}`}>
      {tabs}
    </div>
  )
}

export default Tab
