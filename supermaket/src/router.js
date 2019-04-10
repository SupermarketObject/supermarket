import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 登录
    {
      path: '/',
      component: ()=>import('./views/Login/Login.vue')
    },
    // 后台主界面
    {
      path: '/home',
      component: ()=>import('./views/Home/Home.vue'),
      redirect: '/home/system',
      children:[
        // 系统信息
        {
          path: '/home/system',
          component: ()=>import('./views/systemInfo/SystemInfo.vue')
        },
        // 账号添加
        {
          path:'/home/accountadd',
          component: () => import('./views/AccountAdd/accountadd.vue')
        },
        // 账号管理
        {
          path:'/home/accountmanage',
          component: () => import('./views/AccountManage/AccountManage.vue')
        },
        // 密码修改
        {
          path:'/home/passwordmodify',
          component: () => import('./views/PasswordModify/PasswordModify.vue')
        },
        // 商品添加
        {
          path:'/home/goodsadd',
          component: () => import('./views/GoodsAdd/GoodAdd.vue')
        },
        //商品管理
        {
          path:'/home/goodsmanage',
          component: () => import('./views/Goodsmanage/Goodsmanage.vue')
        },
        // 销售统计
        {
          path:'/home/salestotal',
          component: () => import('./views/SalesTotal/SalesTotal.vue')
        },
        // 进货统计
        {
          path:'/home/stocktotal',
          component: () => import('./views/StockTotal/StockTotal.vue')
        }
      ]
    },
    
  ]
})
