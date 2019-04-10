<template>
    <div class="left-nav">
        <!-- 导航组件 -->
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
          >
          <!-- 账号管理 -->
          <el-submenu :index="(index + 1) + ''" v-for="(item,index) in menus" :key="index">
            <!-- 图标和标题 -->
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{ item.title }}}</span>
            </template>
            <!-- 二级导航 -->
              <el-menu-item :index="subitem.index" v-for="(subitem,index) in item.children" :key="index">{{subitem.subtitle}}</el-menu-item>
          </el-submenu>
    </el-menu>
    </div>
</template>
<script>
export default {
    data (){
      return {
        menus: [
            {
            title : '账号管理',
            iconClass: 'el-icon-printer',
            children:[
              {subtitle: '账号管理', index: '/home/accountmanage'},
              {subtitle: '添加账号', index: '/home/accountadd'},
              {subtitle: '密码修改', index: '/home/passwordmodify'},
            ]
          },
          {
            title : '商品管理',
            iconClass: 'el-icon-goods',
            children:[
              {subtitle: '商品管理', index: '/home/goodsmanage'},
              {subtitle: '添加商品', index: '/home/goodsadd'},
            ]
          },
          {
            title : '统计管理',
            iconClass: 'el-icon-edit-outline',
            children:[
              {subtitle: '销售统计', index: '/home/salestotal'},
              {subtitle: '进货统计', index: '/home/stocktotal'},
            ]
          },
          {
            title : '系统管理',
            iconClass: 'el-icon-setting',
            children:[
              {subtitle: '系统信息', index: '/home/system'},
            ]
          }
          ]
      }
        //
        
      
    }
}
</script>
<style lang="less">
    // 引入样式
    @import './leftNavcss/leftNav.less';
</style>
