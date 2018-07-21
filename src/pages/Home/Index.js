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
  componentDidMount() {
    categores.get()
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
