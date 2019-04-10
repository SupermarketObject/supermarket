<template>
    <div class="accountadd">
            <el-card class="box-card">
                <div slot="header" class="clearfix title">
                    <span>系统信息</span>
                </div>
                <el-form 
                    :label-position="labelPosition" 
                    label-width="80px" 
                    :model="accountAddForm"
                    :rules="rules"
                    ref="accountAddForm"
                    size='small'
                    >
                    <!-- 用户名 -->
                    <el-form-item label="用户名" prop="account">
                        <el-input v-model="accountAddForm.account"></el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="accountAddForm.password"></el-input>
                    </el-form-item>
                    <!-- 确认密码 -->
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input v-model="accountAddForm.checkPass"></el-input>
                    </el-form-item>
                    <!-- 用户组 -->
                    <el-form-item label="选择用户组" prop="userGroup">
                        <el-select v-model="accountAddForm.userGroup" placeholder="请选择">
                            <el-option
                                v-for="item in cities"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                <span style="float: left">{{ item.label }}</span>
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 按钮 -->
                    <el-button type="primary" @click='submitForm()'>添加</el-button>
            </el-form>
            </el-card>
         

    </div>
</template>
<script>
import {passwordReg} from '@/utils/validator';
export default {
    data(){
        // 验证密码
        let checkPassword = (rule, value, callback) => {
            if(value === ''){
                callback(new Error('密码不能为空'))
            }else if(!passwordReg(value)){
                callback(new Error('以字母开头，长度在3~6，只能包含字符、数字和下划线'));
            }else  {
                if (this.accountAddForm.checkPass !== '') {
                    // 触发一致性验证
                    this.$refs.accountAddForm.validateField('checkPass');
                }
                callback(); // 成功
            }
        }
        // 确认密码
         let confirmPass = (rule,value,callback) =>{
             if(value === ''){
                 callback(new Error('确认密码不能为空'))
             }else if(value !== this.accountAddForm.password){
                 callback(new Error('两次密码不一样'))
             }else{
                 callback();
             }
         }
        return{
            labelPosition: "top",
            accountAddForm :{
                account: '',
                password: '',
                checkPass: '',
                userGroup: ''
            },
            cities: [
                {

                label: '北京'
                }, 
                {

                label: '上海'
                }, 
                {

                label: '南京'
                }, 
                {

                label: '成都'
                }, 
                {

                label: '深圳'
                }, {
 
                label: '广州'
                }
                ],
            value6: '',
            rules: {
                account: [
                    {required: true, message: '账户名不能为空', trigger: 'blur'},
                    {min: 3, max : 6, message: '账号长度 3~6 位', trigger: 'blur'}
                ],
                password: [
                    {required: true, validator: checkPassword, trigger: 'blur'}
                ],
                checkPass: [
                    {required: true, validator: confirmPass, trigger: 'blur'}
                ],
                userGroup: [
                    {required: true, message: '请选择用户组', trigger: 'change'}
                ]
            }
        }
    },
    methods:{
        // 点击验证所有信息
        submitForm(){
            this.$refs.accountAddForm.validate((valid) => {
                // 如果valid为true时跳转和收集
                if(valid){
                    let params = {
                        account: this.accountAddForm.account,
                        password: this.accountAddForm.password,
                        userGroup: this.accountAddForm.userGroup

                    }
                    this.$router.push('/home/accountmanage')
                }else{
                    console.log("error")
                }  
            })
        }

    }
}
</script>
<style lang="less">
    @import './accountadd.less';
</style>