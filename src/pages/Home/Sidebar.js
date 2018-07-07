import React from 'react'
import data from './tabMenuData'

const Sidebar = function(props) {
  const { changeFood } = props
  const dom = data.map((item) => {
    return (
      <a key={item.id} href="javascript:;" onClick={() => changeFood(item)}>
        {item.name}
      </a>
    )
  })
  return (
    <div>
      {dom}
    </div>
  )
}

export default Sidebar
