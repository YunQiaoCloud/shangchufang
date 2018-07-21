import {
  action,
  observable
} from 'mobx'
import api from './index'
import coverLoading from '../assets/banner_loading.svg'

const bannerApi = Object.assign({
  get() {
    return this.$req({
      url: '/banner'
    })
  },
}, api)

class Banner {
  @observable list = [{
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

  @action async get() {
    // 如果当前列表为默认数据
    if (_.get(this.list, '[0].id') === -1) {
      const res = await bannerApi.get()
      this.list = res.data
    }
  }
}

const banner = new Banner()

export default banner
