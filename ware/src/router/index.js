import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import main from '../components/main/main'
import all from '../components/right/all'
import registerVip from '../components/right/vip/registerVip'
import vipList from '../components/right/vip/vipList'
import orderList from '../components/right/ordList/ordList'
import orderList1 from '../components/right/ordList/orderList1'
import orderList2 from '../components/right/ordList/orderList2'
import kucunList from '../components/right/cangku/kucunList'
import yujing from '../components/right/cangku/yujing'
import buyList from '../components/right/buy/buyList'
import buyRegister from '../components/right/buy/buyRegister'
import order from '../components/right/sale/order'
import order1 from '../components/right/sale/order1'
import order2 from '../components/right/sale/order2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',            
      component: main,
      redirect: '/main/all',
      children: [
        {
          path: '/main/all',
          name: 'all',
          component: all
        },
        {
          path: '/main/registerVip',
          name: 'registerVip',
          component: registerVip
        },
        {
          path: '/main/vipList',
          name: 'vipList',
          component: vipList
        },
        {
          path: '/main/order_t',
          name: 'vipList',
          component: orderList
        },
        {
          path: '/main/order_h',
          name: 'vipList',
          component: orderList1
        },
        {
          path: '/main/order_x',
          name: 'vipList',
          component: orderList2
        },
        {
          path: '/main/ckList',
          name: 'kucunList',
          component: kucunList
        },
        {
          path: '/main/yjList',
          name: 'yujing',
          component: yujing
        },
        {
          path: '/main/stockList',
          name: 'buyList',
          component: buyList
        },
        {
          path: '/main/register_buy',
          name: 'yujing',
          component: buyRegister
        },
        {
          path: '/main/order_x_r',
          name: 'order',
          component: order
        },
        {
          path: '/main/order_h_r',
          name: 'order1',
          component: order1
        },
        {
          path: '/main/order_t_r',
          name: 'order2',
          component: order2
        }
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
