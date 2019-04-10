<template>
    <div class="login">
        <div class="login-wrap">
            <div class="title">
                <span class="el-icon-menu"></span>
                <span>华联超市管理系统</span>
            </div>
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
                <!-- 账号 -->
                <el-form-item label="账号" prop="account">
                    <el-input type="text" v-model="loginForm.account" autocomplete="off"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password">
                    <el-input type="text" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="text" v-model="loginForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                    <el-button @click="restForm()">重置</el-button>
                </el-form-item>

            </el-form>
            </div>
    </div>
    
</template>
<script>
// 引入验证码函数
import { passwordReg } from '@/utils/validator';
export default {
    data(){
        // 账户验证
        let checkaccount = (rule,value,callback) =>{
            if(value === ''){
                callback(new Error('账户不能为空'))
            }else{
                callback()
            }
        }
        // 确认密码验证自定义函数
        let confirmPassword = (rule,value,callback) =>{
            if(value === ''){
                callback(new Error('密码不能为空'))
            }else if(value !== this.loginForm.password){
                callback(new Error('两次密码不一致'))
            }else{
                callback()
            }
        }
        //密码的自定义验证函数
        let checkPassword = (rule,value,callback) =>{
            if(value === ''){
                callback(new Error('密码不能为空'))

            }else if(passwordReg(value)){
                callback(new Error('以字母开头，长度在3~6之间，只能包含字符、数字和下划线'))
            }else{
                if(this.loginForm.checkPass !== ''){
                    this.$refs.loginForm.validateField('checkPass')
                }
                callback()
            }
        }
        return {
            // 表单数据
            loginForm:{
                account: '',
                password: '',
                checkPass: ''
            },
            // 验证规则
            rules: {
                account: [
                    {required: true, validator: checkaccount, trigger: 'blur'},
                    {min: 3, max: 6, message: '账号长度 3~6 位',trigger: 'blur'}
                ],
                password:[
                    {required: true, validator: checkPassword,trigger: 'blur'}
                ],
                checkPass:[
                    {required: true, validator: confirmPassword, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        // 登录
        submitForm(){
            this.$refs.loginForm.validate(valid => {
                // 如果所有验证都通过就提交
                if(valid){
                    let params = {
                        account: this.loginForm.account,
                        password: this.loginForm.password
                    }
                    this.$router.push('/home');
                }else{
                    console.log('前段验证不通过，不允许提交')
                }
            })
        },
        // 重置表单
        restForm(){
            this.$refs.loginForm.resetFields();
        }
    }
}

</script>
<style lang="less">
    @import './logincss/Login.less';
</style>
