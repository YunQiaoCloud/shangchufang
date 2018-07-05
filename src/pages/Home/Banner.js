import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import tabItemData0 from './tabItemData0'

const Banner = function() {
  const dom = tabItemData0.slice(0, 4).map((item) => {
    return (
      <a href="javascript:;" className="Home-banner-item" key={item.id}>
        <img className="cover" src={item.albums[0]} alt={item.title} />
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

export default Banner
