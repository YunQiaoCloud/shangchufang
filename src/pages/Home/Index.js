import React, {
  Component
} from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import SearchBar from './SearchBar'
import Tab from './Tab'
import Content from './Content'
import Banner from './Banner'
import data from '../../assets/data'

class Home extends Component {
  state = {
    tab: [],
    activedIndex: -1,
    fullList: [],
  }

  componentDidMount() {
    // tab 添加全部菜系按钮
    const tab = [{

    }]
    // 数据里前两种菜系提取出来，作为 tab，其他放进全部菜系里
    tab.push(...data.slice(0, 2))
    this.setState(() => ({ tab, fullList: data.slice(2) }))
  }

  setActivedIndex(index) {
    this.setState(() => ({ activedIndex: index }))
  }

  render() {
    const {
      tab, fullList, activedIndex, indexIsDefault
    } = this.state

    return (
      <WingBlank size="lg" className="Home">
        <WhiteSpace size="lg" />
        <SearchBar />
        <WhiteSpace size="lg" />
        <Banner />
        <WhiteSpace size="lg" />
        <Tab
          tab={tab}
          fullList={fullList}
          activedIndex={activedIndex}
          setActivedIndex={index => this.setActivedIndex(index)}
        />
        <WhiteSpace size="lg" />
        <Content activedIndex={activedIndex} />
      </WingBlank>
    )
  }
}

export default Home
