import React, {
  Component
} from 'react'
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import homeTab from '../assets/home.png'
import listTab from '../assets/list.png'
import collectTabActive from '../assets/collect.png'
import homeTabActive from '../assets/home_active.png'
import listTabActive from '../assets/list_active.png'
import collectTabActiveActive from '../assets/collect_active.png'

class TabBarNav extends Component {
  state = {
    hidden: false,
    isIphoneX: false
  }

  componentDidMount() {
    if (navigator.userAgent.match(/(iPhone)/)) {
      if (window.screen.availHeight === 812 && window.screen.availWidth === 375) {
        this.setState(() => ({ isIphoneX: true }))
      }
    }
  }

  onPress(switchTab) {
    const path = {
      pathname: '/'
    }
    // 振动效果
    const supportsVibrate = 'vibrate' in window.navigator
    if (supportsVibrate) {
      window.navigator.vibrate(100)
    }
    switchTab.history.push(path)
  }

  render() {
    const { isIphoneX, hidden } = this.state
    const switchTab = this.props

    return (
      <div
        className={`Tab-bar ${isIphoneX ? 'is-iphonex-10' : null}`}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={hidden}
        >
          <TabBar.Item
            icon={{ uri: homeTab }}
            selectedIcon={{ uri: homeTabActive }}
            selected={switchTab.location.pathname === '/'}
            title="推荐"
            key="Recommend"
            onPress={() => this.onPress(switchTab)}
          />
          <TabBar.Item
            icon={{ uri: listTab }}
            selectedIcon={{ uri: listTabActive }}
            title="分类"
            key="List"
            selected={switchTab.location.pathname === '/list'}
            onPress={() => {
              const path = {
                pathname: '/list'
              }
              switchTab.history.push(path)
            }}
          />
          <TabBar.Item
            icon={{ uri: collectTabActive }}
            selectedIcon={{ uri: collectTabActiveActive }}
            title="收藏"
            key="collect"
            selected={switchTab.location.pathname === '/collect'}
            onPress={() => {
              const path = {
                pathname: '/collect'
              }
              switchTab.history.push(path)
            }}
          />
        </TabBar>
      </div>
    )
  }
}

export default withRouter(TabBarNav)
