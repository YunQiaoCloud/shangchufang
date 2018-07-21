import {
  observable,
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
    // 监听 acviteIndex 变化，每次 acviteIndex 变化的时候传递给第二个参数内的函数获取数据
    const acviteIndex = categores.acviteIndex
    return acviteIndex
  },
  async(acviteIndex) => {
    // 根据 acviteIndex 获取对应数据
    const list = toJS(categores.recommendList)
    const id = _.get(list[acviteIndex], 'id')

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
      categores.recommendList[acviteIndex].cookList = res.data
    }
  })
}

const cook = new Cook()

export default cook
