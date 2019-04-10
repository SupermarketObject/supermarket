<template>
    <div class="passwordmodify">
           <el-card class="box-card">
                <div slot="header" class="clearfix title">
                    <span>密码修改</span>
                </div>
                <el-form 
                    :label-position="labelPosition" 
                    label-width="80px" 
                    :model="passwordmodify"
                    :rules="rules"
                    ref="passwordmodify"
                    size='small'
                    >
                    <!-- 用户名 -->
                    <el-form-item label="原密码" prop="Originalpassword">
                        <el-input v-model="passwordmodify.Originalpassword"></el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item label="新密码" prop="password">
                        <el-input v-model="passwordmodify.password"></el-input>
                    </el-form-item>
                    <!-- 确认密码 -->
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input v-model="passwordmodify.checkPass"></el-input>
                    </el-form-item>
                    <!-- 按钮 -->
                    <el-button type="primary" @click='submitForm()'>修改</el-button>
            </el-form>
           </el-card>
    </div>
    
</template>
<script>
// 引入正则
import {passwordReg} from '@/utils/validator';

export default {
    data (){
        // 验证密码
        let checkPassword = (rule,value,callback) => {
            if(value === ''){
                callback(new Error('新密码不能为空'));
            }else if(!passwordReg(value)){
                callback(new Error('以字母开头，长度在3~6，只能包含字符、数字和下划线'));
            }else{
                callback();
            }
        }
        // 验证确认密码
        let confirmPassword = (rule,value,callback) => {
            if(value === ''){
                callback(new Error('确认密码不能为空'))
            }else if(value !== this.passwordmodify.password){
                callback(new Error('两次密码不一致'))
            }else{
                callback();
            }   
        }
        return{
            labelPosition: 'top',
            passwordmodify:{
                Originalpassword : '',
                password: '',
                checkPass: ''
            },
            rules: {
                Originalpassword: [
                    {required: true, message: '原密码不能为空',trigger: 'blur'}
                ],
                password: [
                    {required: true, validator: checkPassword,trigger: 'blur'}
                ],
                checkPass: [
                    {required: true, validator: confirmPassword,trigger: 'blur'}
                ]
            }

        }
    },
    methods: {
        submitForm(){
            this.$refs.passwordmodify.validate((valid)=>{
                //如果验证通过就执行
                if(valid){
                    let userpass = {
                        Originalpassword: this.passwordmodify.Originalpassword,
                        password: this.passwordmodify.password,
                        checkPass: this.passwordmodify.checkPass
                    }
                    this.$router.push('/home/accountmanage');
                }else{
                    console.log("error")
                }
            })
        }
    }
}
</script>
<style lang="less">
    @import './passwordmodify.less';
</style>
