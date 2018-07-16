import React, {
  Component
} from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import axios from 'axios'
import SearchBar from './SearchBar'
import Tab from './Tab'
import Content from './Content'
import Banner from './Banner'
import api from '../../api'

class Home extends Component {
  state = {
    recommendCategory: [],
    activedIndex: 1,
    category: [],
  }

  async componentDidMount() {
    const res = await api.getCategores()

    const recommendCategory = [].concat(res.data.recommend)

    // 数据里前两种菜系提取出来，作为 tab，其他放进全部菜系里
    this.setState(() => ({ recommendCategory, category: res.data.category }))
  }

  setActivedIndex(index) {
    this.setState(() => ({ activedIndex: index }))
  }

  render() {
    const {
      category, recommendCategory, activedIndex
    } = this.state

    return (
      <WingBlank size="lg" className="Home">
        <WhiteSpace size="lg" />
        <SearchBar />
        <WhiteSpace size="lg" />
        <Banner />
        <WhiteSpace size="lg" />
        <Tab
          category={category}
          recommendCategory={recommendCategory}
          activedIndex={activedIndex}
          setActivedIndex={index => this.setActivedIndex(index)}
        />
        <WhiteSpace size="lg" />
        <Content activedIndex={activedIndex} recommendCategory={recommendCategory} />
      </WingBlank>
    )
  }
}

export default Home
