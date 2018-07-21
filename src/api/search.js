import {
  action,
  observable
} from 'mobx'
import api from './index'

const searchApi = Object.assign({
  get(q) {
    return this.$req({
      url: `/search?q=${q}`
    })
  },
}, api)

class Search {
  /*
    数据结构
    {
      q: '红烧桂鱼', // 搜索内容
      list: [cook] // 搜索结果
    }
  */
  @observable list = []

  @action getBanner(q) {
    const index = findIndex(this.list, ['q', q])

    // 如果没有缓存的数据，获取一次
    if (index === -1) {
      res = searchApi.get(q)

      // 插入列表
      this.list.push({
        q,
        list: res.data
      })
    }
  }
}

const search = new Search()

export default search
