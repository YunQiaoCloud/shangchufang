import React, {
  Component
} from 'react'
import {
  Carousel
} from 'antd-mobile'
import {
  observer
} from 'mobx-react'
import {
  toJS
} from 'mobx'
import {
  Link
} from 'react-router-dom'
import banner from '../../api/banner'

@observer
class Banner extends Component {
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
      <Carousel
        className="Home-banner"
        autoplay
        infinite
      >
        {dom}
      </Carousel>
    )
  }
}

export default Banner
