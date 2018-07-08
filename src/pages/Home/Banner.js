import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import axios from 'axios'

class Banner extends Component {
  state = {
    banner: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/banner')
      this.setState(() => ({ banner: res.data }))
    } catch (err) {
      console.log('获取数据失败')
    }
  }

  render() {
    const { banner } = this.state
    console.log(banner)

    const dom = banner.map((item) => {
      console.log(item)
      return (
        <a href="javascript:;" className="Home-banner-item" key={item.id}>
          <img className="cover" src={item.coverImg} alt={item.title} />
          <p className="title">
            {item.title}
          </p>
        </a>
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
