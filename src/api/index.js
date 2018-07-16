import axios from 'axios'
import cook from './cook'
import banner from './banner'
import search from './search'
import categores from './categores'

const api = Object.assign({}, cook, banner, search, categores)

api.$request = async function({
  url,
  method,
  data,
  header
}) {
  const res = await axios({
    url: `/api/v1${url}`,
    method: method || 'GET',
    data: data || {},
    header: header || {
      Accept: 'application/json; charset=utf-8'
    }
  })

  return res
}

api.$req = function(json) {
  return this.$request(json)
}

export default api

