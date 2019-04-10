<template>
    <div class="goodsmanage">
        <el-card class="box-card">
            <div slot="header" class="clearfix title">
                <span>商品管理</span>
            </div>
            <!-- 查询分类 -->
           <el-form ref="form" 
                    :model="goodsmanage" 
                    label-width="80px"
                    size="small"
            >
            <el-row>
                <el-col :span="2"><div class="grid-content bg-purple">
                    <!-- 分类查询 -->
                    <el-select v-model="value4" clearable placeholder="---选择分类---" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select></div>
                </el-col>
            <el-col :span="22">
                <div class="grid-content bg-purple-light">
                    <!-- 关键字 -->
                    <el-form-item label="关键字" >
                        <el-input v-model="goodsmanage.name" class="crux"></el-input>
                        <span class="Explain">(商品名称，条形码)</span>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                </div>
            </el-col>
            </el-row>
            </el-form>
            <el-table
                :data="goodsmanage.tableData"
                border
                style="width: 100%; margin-bottom: 15px;"
                >
                <el-table-column
                fixed
                prop="barcode"
                label="商品条形码"
                >
                </el-table-column>
                <el-table-column
                prop="name"
                label="商品名称"
                >
                </el-table-column>
                <el-table-column
                prop="classification"
                label="所属分类"
                >
                </el-table-column>
                <el-table-column
                prop="barcode"
                label="售价（元）"
                >
                </el-table-column>
                <el-table-column
                prop="Promotionalprice"
                label="促销价（元）"
                >
                </el-table-column>
                <el-table-column
                prop="marketValue"
                label="市场价（元）"
                >
                </el-table-column>
                <el-table-column
                prop="warehousing"
                label="库存"
                >
                </el-table-column>
                <el-table-column
                prop="Totalinventory"
                label="库存总额"
                >
                </el-table-column>
                <el-table-column
                prop="Totalsales"
                label="销售总额"
                >
                </el-table-column>
                <el-table-column
                fixed="right"
                label="管理"
                >
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" size="small" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" size="small" circle></el-button>
                </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </el-card>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            // 表格
            goodsmanage:{
                calssification: '',
                name: '',
                tableData: [
                    {
                        barcode: '123123123' ,
                        name: "我的优乐美",
                        classification: '优乐美',
                        barcode: 2.00,
                        Promotionalprice: '未促销',
                        marketValue: 2.40,
                        warehousing: '0',
                        Totalinventory: 0,
                        Totalsales: 0
                    },
                    {
                      barcode: '123123123' ,
                      name: "我的优乐美",
                      classification: '优乐美',
                      
                    }

                ]
            },
            value4:'',
            // 选择分类
            options:[
                    {
                    value: '选项1',
                    label: '优乐美'
                    }, 
                    {
                    value: '选项2',
                    label: '海飞丝'
                    }, 
                    {
                    value: '选项3',
                    label: '茅台'
                    }, 
                    {
                    value: '选项4',
                    label: '龙风呈祥'
                    }
                ],
                // 分页
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4

            }
        },
    }
</script>
<style lang="less">
    @import './goodmanage.less';
</style>