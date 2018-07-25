import React, {
  Component
} from 'react'
import {
  WingBlank,
  WhiteSpace,
  Carousel
} from 'antd-mobile'
import {
  toJS
} from 'mobx'
import {
  observer
} from 'mobx-react'
import {
  Link
} from 'react-router-dom'
import banner from '../../api/banner'

@observer
class Recommend extends Component {
  async componentDidMount() {
    banner.get()
  }

  render() {
    const banners = toJS(banner.list)

    const dom = banners.map((item) => {
      return (
        <Link to={`/detail/${item.id}`} href="javascript:;" className="Home-banner-item" key={item.id}>
          <img className="cover" src={item.coverImg} alt={item.title} />
          <p className="title">
            {item.title}
          </p>
        </Link>
      )
    })

    return (
      <div className="Recommend">
        <WingBlank>
          <span>今日推荐</span>
          <p>红烧兔兔</p>
          <h3>这是一段介绍文字！</h3>
          <Carousel
            className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={0.8}
            autoplay
            infinite
          >
            {dom}
          </Carousel>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    )
  }
}

export default Recommend
