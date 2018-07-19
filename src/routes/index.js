import Home from '../pages/Home/Index'
import Search from '../pages/Search/Index'
import List from '../pages/List/Index'
import Detail from '../pages/Detail/Index'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]
