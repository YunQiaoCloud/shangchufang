import React from 'react'

const Tab = function(props) {
  const {
    activedIndex, setActivedIndex, recommendCategory
  } = props

  // 第一个 tab 为“全部”按钮，显示所有菜系
  const tabs = recommendCategory.map((item, index) => {
    // 根据 props 的 slectedIndex 设置默认选中的 tab
    const classNameStatus = index === activedIndex ? 'actived' : ''
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
    <div className={`Home-tab actived-${activedIndex}`}>
      {tabs}
    </div>
  )
}

export default Tab
