import React, {
  Component
} from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import SearchBar from './SearchBar'

class Home extends Component {
  state = {
  }

  render() {
    return (
      <WingBlank size="lg" className="Home">
        <WhiteSpace size="lg" />
        <SearchBar />
        <WhiteSpace size="lg" />
      </WingBlank>
    )
  }
}

export default Home
