import React, {
  Component
} from 'react'
import {
  observer
} from 'mobx-react'
import { toJS } from 'mobx'
import categores from '../../api/categores'

@observer class Tab extends Component {
  setactiveIndex(index) {
    categores.acviteIndex = index
  }

  render() {
    const activeIndex = categores.acviteIndex
    const categoresList = toJS(categores.list)

    // tab 默认展示 4 个
    const tabs = categoresList.slice(0, 4).map((item, index) => {
      // 根据 props 的 slectedIndex 设置默认选中的 tab
      const classNameStatus = index === activeIndex ? 'active' : ''
      return (
        <a
          href="javascript:;"
          className={`Home-tab-item ${classNameStatus}`}
          key={item.id}
          onClick={
            () => this.setactiveIndex(index)
          }
        >
          {item.name}
        </a>
      )
    })

    return (
    // 根据 slectedIndex class 控制标签的位置
      <div className={`Home-tab active-${activeIndex}`}>
        {tabs}
      </div>
    )
  }
}
export default Tab
