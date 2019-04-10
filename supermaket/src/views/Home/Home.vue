<template>
    <div class="home">
        <!-- 头部 -->   
        <el-container>
            <!-- 左侧导航 -->
            <el-aside width="200px">
                <LeftNav></LeftNav>
            </el-aside>
            <!-- 右侧内容 -->
            <el-container>
                <!-- 右侧头 -->
                <el-header class="el-header">
                    <!-- 右侧头部标题 -->
                    <el-row class="el-row">
                        <el-col :span="20" class="el-col">
                            <div class="welcome">欢迎您<span>admin</span></div>
                            <div class="text">查看完整的信息</div>
                        </el-col>
                    <!-- 右侧头部用户名 -->
                        <el-col :span="4" class="rightUser">
                            <el-row>
                                <!-- 头像 -->  
                                <el-col :span="12">
                                    <el-row>
                                        <el-col :span="12">
                                            <div class="avater">
                                                <img src="" alt="" width="100%" height="100%">
                                            </div>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-dropdown class="username">
                                                <span class="el-dropdown-link">
                                                    用户名<i class="el-icon-arrow-down el-icon--right"></i>
                                                </span>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                                    <el-dropdown-item>退出</el-dropdown-item>
                                                </el-dropdown-menu>
                                                </el-dropdown>
                                        </el-col>
                                    </el-row>
                                </el-col>
                            </el-row>   
                        </el-col>
                    </el-row>
                </el-header>
                <!-- 右侧主要内容 -->
                <el-main>
                    <!-- 出口 -->
                    <router-view></router-view>
                </el-main>
                <!-- 右侧尾 -->
                <el-footer>&copy; CopyRight 2019 华联超市管理系统</el-footer>
            </el-container>
        </el-container>
        
    </div>
    
</template>
<script>
// 引入组件
import LeftNav from '@/components/LeftNav/leftNav.vue'
// 注册组件
export default {
    components: {
        LeftNav
    }
    
}
</script>
<style lang="less">
    @import './Home/home.less';
</style>

