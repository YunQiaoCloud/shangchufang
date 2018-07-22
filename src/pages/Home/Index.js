import React, { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import {
  observer
} from 'mobx-react'
import SearchBar from './SearchBar'
import Tab from './Tab'
import Content from './Content'
import Banner from './Banner'
import categores from '../../api/categores'

@observer
class Home extends Component {
  async componentDidMount() {
    // 数据加载完成后默认选项卡设置为第一个
    await categores.get()
    categores.activeIndex = 0
  }

  render() {
    return (
      <WingBlank size="lg" className="Home">
        <WhiteSpace size="lg" />
        <SearchBar />
        <WhiteSpace size="lg" />
        <Banner />
        <WhiteSpace size="lg" />
        <Tab />
        <WhiteSpace size="lg" />
        <Content />
      </WingBlank>
    )
  }
}

export default Home
