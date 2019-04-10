<template>
    <div class="systeminfo">
        <el-card class="box-card">
            <div slot="header" class="clearfix title">
                <span>系统信息</span>
            </div>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark el-icon-warning explain">
                        商品总数量：<span class="number">5</span>
                        已销售的总金额: <span class="number">890.00</span>
                        库存商品总价: <span class="number">1235.82</span>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark el-icon-warning explain">
                        导入数据
                    </div>
                </el-col>
            </el-row>

            <!-- 销售排行榜 -->
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix" style="line-height: 30px; font-weight: bold;">
                                <span>销售排行榜</span>
                            </div>
                             <el-table
                                :data="SalesVolumetableData"
                                style="width: 100%"
                                stripe
                                :row-class-name="tableRowClassName">
                                <el-table-column
                                prop="name"
                                label="商品名称"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="SalesVolume"
                                label="销量"
                                >
                                </el-table-column>
                            </el-table>
                        </el-card>

                    </div>
                </el-col>
            <!-- 缺货的商品 -->
                <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix" style="line-height: 30px; font-weight: bold;">
                                    <span>缺货的商品</span>
                                </div>
                                <el-table
                                    :data="ShortagetableData"
                                    style="width: 100%"
                                    stripe
                                    :row-class-name="tableRowClassName">
                                    <el-table-column
                                    prop="name"
                                    label="商品名称"
                                    >
                                    </el-table-column>
                                     <el-table-column
                                    prop="Stock"
                                    label="库存"
                                    >
                                    </el-table-column>
                                   <el-table-column
                                        label="管理"
                                        >
                                        <template slot-scope="scope">
                                            <el-button type="primary" size='small'>入库</el-button>
                                        </template>
                                    </el-table-column>
                            </el-table>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
        </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return {
            // 销量排行榜
            SalesVolumetableData : [
                {
                name: '优乐美',
                SalesVolume: '20', 
                },
                {
                name: '优乐美',
                SalesVolume: '20'
                }
            ],
            // 缺货的商品
            ShortagetableData : [{
                name: '我的优乐美',
                Stock: 1,
            }]
        }
    },
     methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    }
};
</script>
<style lang="less">
@import "./systeminfo.less";
</style>

