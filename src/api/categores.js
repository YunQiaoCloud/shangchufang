import {
  uniqBy
} from 'lodash'
import {
  action,
  observable
} from 'mobx'
import api from './index'

const categoresApi = Object.assign(
  {
    get() {
      return this.$req({
        url: '/categores'
      })
    },
  },
  api
)

class Categores {
  @observable activeIndex = -1

  // 推荐
  @observable list = []

  @action async get() {
    if (!this.list.length) {
      const res = await categoresApi.get()

      // 合并当前数据和新获取到的数据，组成一个新的数组
      const categores = this.list.concat(res.data)

      // 根据 id 去掉数组里重复的部分（优先去掉从服务器获取的，因为旧数据内可能存有下属的菜单信息）
      this.list = uniqBy(categores, 'id').map((item) => {
        // 对每个对象添加 cookList 信息
        if (!item.cookList) {
          item.cookList = []
        }
        return item
      })
    }
  }
}

const categores = new Categores()

export default categores
