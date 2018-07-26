import {
  observable,
  action,
  reaction,
  toJS,
} from 'mobx'
import _ from 'lodash'
import categores from './categores'
import api from './index'

const cookApi = Object.assign({
  getCookDetail(id) {
    return this.$req({
      url: `/cook_detail/${id}`
    })
  },
  getCookList(id) {
    return this.$req({
      url: `/cook/${id}`
    })
  }
}, api)

class Cook {
  @observable list = []

  @observable detail = {
    title: '',
    tags: '',
    albums: [],
    burden: '',
    id: -1,
    imtro: '',
    ingredients: '',
    steps: [],
  }

  // 计算属性不能走 await，所以采用 autorun 监听变化，手动设置 list
  computedList = reaction(() => {
    // 监听 activeIndex 变化，每次 activeIndex 变化的时候传递给第二个参数内的函数获取数据
    const activeIndex = categores.activeIndex
    return activeIndex
  },
  async(activeIndex) => {
    // 根据 activeIndex 获取对应数据
    const list = toJS(categores.list)
    const id = _.get(list[activeIndex], 'id')

    if (typeof id !== 'undefined') {
      // 找到 id 对应的种类
      const index = _.findIndex(list, ['id', id])

      // 判断种类下有没有菜的列表
      if (_.get(list[index], 'cookList.length')) {
        this.list = list[index].cookList
        return
      }

      // 没有就获取
      const res = await cookApi.getCookList(id)
      this.list = res.data

      // 写入 categores 种类信息里，下次再切换就无需重复获取，直接调用
      if (!_.get(categores.list[activeIndex], 'cookList.length')) {
        categores.list[activeIndex].cookList = res.data
      }
    }
  })

  @action async getDetail(id) {
    const list = toJS(categores.list)
    let detail = null

    for (let i = 0; i < list.length; i += 1) {
      const index = _.findIndex(list[i].cookList, ['id', id])
      if (index !== -1) {
        detail = list[i].cookList[index]
        break
      }
    }

    // 如果没有从本地数据找到，则请求一次
    if (!detail) {
      const res = await cookApi.getCookDetail(id)
      detail = res.data
    }

    this.detail = Object.assign({}, this.detail, detail)
  }
}

const cook = new Cook()

export default cook
