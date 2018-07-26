import {
  observable,
  action
} from 'mobx'
import _ from 'lodash'

class StorageCollectCooks {
  /*
    * id: xxx
    * isCollected: true
    * title: xx
    * cover: xxx
  */
  @observable list = []

  @action get() {
    if (this.list.length) return
    const storage = window.localStorage
    const collectCooks = JSON.parse(storage.getItem('collectCook'))

    // 判断本地缓存是否存在
    if (collectCooks) { this.list = collectCooks }
  }

  @action set(cook) {
    const storage = window.localStorage
    const index = _.findIndex(this.list, ['id', cook.id])

    if (index !== -1) {
      this.list[index] = Object.assign({}, cook)
    } else {
      this.list.push(cook)
    }
    // 存进本地
    storage.setItem('collectCook', JSON.stringify(this.list))
  }
}
const storageCollectCooks = new StorageCollectCooks()

export default storageCollectCooks
