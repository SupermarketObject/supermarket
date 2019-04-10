<template>
    <div class="goodsadd">
        <el-card class="box-card">
                <div slot="header" class="clearfix title">
                    <span>添加商品</span>
                </div>
                 <el-form 
                    :label-position="labelPosition" 
                    label-width="80px" 
                    :model="goodsadd"
                    :rules="rules"
                    ref="goodsadd"
                    size='small'
                    >
                    <!-- 选择分类 -->
                    <el-form-item label="选择分类" prop="classification" >
                        <el-select v-model="goodsadd.classification" filterable placeholder="---选择分类---">
                            <el-option
                            v-for="item in options"
                            ref="gooodsadd"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 商品条形码-->
                    <el-form-item label="商品条形码" prop="barcode" >
                        <el-input v-model="goodsadd.barcode" class="barcode"></el-input>
                        <el-button type="primary" @click="randomBarcode()">生成条形码</el-button>
                    </el-form-item>
                    <!-- 商品名称 -->
                    <el-form-item label="商品名称" prop="name" class="barcode">
                        <el-input v-model="goodsadd.name"></el-input>
                    </el-form-item>
                    <!-- 商品售价 -->
                    <el-form-item label="商品售价" prop="price" >
                        <el-input v-model="goodsadd.price" class="price"></el-input>
                        <span>元</span>
                    </el-form-item>
                    <!-- 市场价 -->
                    <el-form-item label="市场价" prop="marketVlaue">
                        <el-input v-model="goodsadd.marketVlaue" class="price"></el-input>
                        <span>元</span>
                        <div class="explain">默认是市场价为售价的1.2倍</div>
                    </el-form-item>
                     <!-- 商品进价 -->
                    <el-form-item label="商品进价" prop="purchaseprice">
                        <el-input v-model="goodsadd.purchaseprice" class="price"></el-input>
                        <span>元</span>
                    </el-form-item>
                    <!-- 入库数量 -->
                    <el-form-item label="入库数量" prop="warehousing">
                        <el-input v-model="goodsadd.warehousing" class="price"></el-input>
                        <div class="explain">计重商品单位为千克</div>
                    </el-form-item>
                    <!-- 商品重量 -->
                    <el-form-item label="商品重量" prop="weight">
                        <el-input v-model="goodsadd.weight" class="price"></el-input>
                    </el-form-item>
                    <!-- 商品单位 -->
                    <el-form-item label="商品单位" prop="company">
                        <el-input v-model="goodsadd.company" class="price"></el-input>
                    </el-form-item>
                    <!-- 会员优惠 -->
                    <el-form-item label="会员优惠" prop="radio">
                        <el-radio v-model="goodsadd.radio" label="1">享受</el-radio>
                        <el-radio v-model="goodsadd.radio" label="2">不享受</el-radio>
                    </el-form-item>
                    <!-- 商品简介 -->
                    <el-form-item label="商品简介" prop="textarea">
                        <el-input type="textarea" v-model="goodsadd.textarea"></el-input>
                        <div class="explain">不超过20个汉字</div>
                    </el-form-item>
                    <!-- 按钮 -->
                    <el-button type="primary" @click='submitForm()'>添加</el-button>
            </el-form>
        </el-card>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            labelPosition: 'top',
            goodsadd: {
                barcode:'',
                name: '',
                price: '',
                marketValue:'',
                purchaseprice:'',
                warehousing:'',
                weight: '',
                company: '',
                radio: '1',
                textarea: ''
            },
             options: [
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
                classification: '',
            rules: {
                classification: [
                     {required: true, message: '选择分类不能为空',trigger:'blur'}
                 ],
                 barcode: [
                     {required: true, message: '条形码不能为空',trigger:'change'}
                 ],
                 name: [
                     {required: true, message: '商品名称不能为空',trigger:'blur'}
                 ],
                 price: [
                     {required: true, message: '商品价格不能为空',trigger:'blur'}
                 ],
                 marketVlaue: [
                     {required: true, message: '市场价不能为空',trigger:'blur'}
                 ],
                 purchaseprice: [
                     {required: true, message: '商品进价不能为空',trigger:'blur'}
                 ],
                 warehousing: [
                     {required: true, message: '入库数量不能为空',trigger:'blur'}
                 ],
                 weight: [
                     {required: true, message: '商品重量不能为空',trigger:'blur'}
                 ],
                 company: [
                     {required: true, message: '商品单位不能为空',trigger:'blur'}
                 ],
                 radio: [
                     {required: true, message: '商品名称不能为空',trigger:'blur'}
                 ],
                 textarea: [
                     {required: true, message: '商品介绍不能为空',trigger:'blur'}
                 ],
            }
        }
    },
    methods: {
        // 随机生成条形码
        randomBarcode(){
                // 创建一个数组
                let barcodeArr = [1,2,3,4,5,6,7,8,9,0];
                // 创建一个空字符串
                let code = '';
                // 利用for循环随机生成
                for(let i = 0; i < 13; i++){
                    let index = Math.floor(Math.random()*10);
                    code += barcodeArr[index];
                }
                // 将随机数赋值给barcode
                this.goodsadd.barcode = code;
        },
        //验证表单所有信息
        submitForm(){
            this.$refs.goodsadd.validate((valid)=>{
                // 如果所有的验证通过就跳转
                if(valid){
                    // 收集所有的信息
                    let goodsMan = {
                            barcode : this.goodsadd.barcode,
                            name : this.goodsadd.name,
                            price : this.goodsadd.price,
                            marketValue : this.goodsadd.marketVlaue,
                            purchaseprice : this.goodsadd.purchaseprice,
                            warehousing : this.goodsadd.warehousing,
                            weight : this.goodsadd.weight,
                            company : this.goodsadd.company,
                            radio: this.goodsadd.radio,
                            textarea: this.goodsadd.textarea,
                    }
                    // 跳转
                    this.$router.push('/home/goodsadd');
                }else{
                    console.log("error");
                }
            })
        }
    }   
}
</script>
<style lang="less">
    @import './goodsadd.less';
</style>