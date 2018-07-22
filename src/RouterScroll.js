import {
  Component
} from 'react'
import {
  withRouter
} from 'react-router-dom'

class RouterScroll extends Component {
  // 每次滚动如果路径发生变化，滚动条回到最上面
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(RouterScroll)
