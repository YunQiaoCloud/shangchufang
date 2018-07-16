import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import coverLoading from '../../assets/banner_loading.svg'
import api from '../../api'

class Banner extends Component {
  state = {
    banner: [
      {
        coverImg: coverLoading,
        id: -1,
        title: '获取中...'
      },
      {
        coverImg: coverLoading,
        id: -1,
        title: '获取中...'
      },
      {
        coverImg: coverLoading,
        id: -1,
        title: '获取中...'
      },
      {
        coverImg: coverLoading,
        id: -1,
        title: '获取中...'
      },
    ]
  }

  async componentDidMount() {
    try {
      const res = await api.getBanner()
      this.setState(() => ({ banner: res.data }))
    } catch (err) {
      console.log('获取数据失败')
    }
  }

  render() {
    const { banner } = this.state

    const dom = banner.map((item) => {
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
