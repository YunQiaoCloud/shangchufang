import React, {
  Component
} from 'react'
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import homeTab from '../assets/home.png'
import listTab from '../assets/list.png'
import collectionTab from '../assets/collection.png'
import homeTabActive from '../assets/home_active.png'
import listTabActive from '../assets/list_active.png'
import collectionTabActive from '../assets/collection_active.png'

class TabBarNav extends Component {
  state = {
    hidden: false
  }

  render() {
    const tabBarState = this.state
    const switchTab = this.props

    return (
      <div
        className="Tab-bar"
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={tabBarState.hidden}
        >
          <TabBar.Item
            icon={{ uri: homeTab }}
            selectedIcon={{ uri: homeTabActive }}
            selected={switchTab.location.pathname === '/'}
            title="推荐"
            key="Recommend"
            onPress={() => {
              const path = {
                pathname: '/'
              }
              switchTab.history.push(path)
            }}
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
            icon={{ uri: collectionTab }}
            selectedIcon={{ uri: collectionTabActive }}
            title="收藏"
            key="Collection"
            selected={switchTab.location.pathname === '/collection'}
            onPress={() => {
              const path = {
                pathname: '/collection'
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
