import {
  action,
  observable,
  reaction
} from 'mobx'
import _ from 'lodash'
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

  @observable currentList = []

  @observable currentQ = ''

  watchQ = reaction(() => this.currentQ, q => this.get(q))

  @action async get(q) {
    const index = _.findIndex(this.list, ['q', q])

    // 如果没有缓存的数据，获取一次
    if (index === -1) {
      const res = await searchApi.get(q)
      const data = {
        q,
        cookList: res.data
      }
      // 插入列表
      this.list.push(data)

      this.currentList = [data]
    }
  }
}

const search = new Search()

export default search
