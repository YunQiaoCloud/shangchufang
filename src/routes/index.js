import Home from '../pages/Home/Index'
import Search from '../pages/Search/Index'
import List from '../pages/List/Index'
import Detail from '../pages/Detail/Index'
import Collection from '../pages/Collection/Index'

export default [
  {
    path: '/Collection',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]
