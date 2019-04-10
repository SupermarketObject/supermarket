<template>
    <div class="accountmanage">
          <el-card class="box-card">
                <div slot="header" class="clearfix title">
                    <span>账号管理</span>
                </div>
                <!-- 表格 -->
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">

                    <el-table-column
                    fixed
                    prop="username"
                    label="用户名称"
                    width="540">
                    </el-table-column>

                    <el-table-column
                    prop="userGroup"
                    label="用户组"
                    width="540">
                    </el-table-column>

                    <el-table-column
                    label="管理"
                    width="540">
                    <template>
                        <el-button type="primary" icon="el-icon-edit" size="small" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" size="small" circle></el-button>
                    </template>
                    </el-table-column>
                    
                </el-table>
            </el-card>
    </div>
    
</template>
<script>
export default {
  data () {
      return {
            tableData : [
              {
                  username: '王玲',
                  userGroup: '所长',
              }
          ]
      }
  }
}
</script>
<style lang="less">
    @import './accountManage.less';
</style>