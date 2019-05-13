<template>
    <div id='login'>
       <div class="register_btn" @click="centerDialogVisible = true">免费注册</div>
       <div class="login_input">
        <div class="login_input_title">一款免费，注册即可用的药店进销存管理系统</br>你，值得拥有</div>
        <el-form ref="login_form" :model="form" :rules="loginRules">
            <h4>账号登录</h4>
            <el-form-item prop="username">
                <el-input
                    type="text"
                    placeholder="请输入手机号"
                    v-model="form.username">
                </el-input>
            </el-form-item>
             <el-form-item prop="password">
                <el-input
                    type="password"
                    placeholder="请输入密码"
                    v-model="form.password">
                </el-input>
            </el-form-item>
            <el-form-item>
                <div class="panel-header-btn submit-btn" @click="register">
                    <span class="el-icon-loading" v-if="loading"></span>
                    <span>登录</span>
                </div>
            </el-form-item>
        </el-form>
      </div>
      <el-dialog
        title="注册"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <el-form>
            <el-form-item label="手机号">
                <el-input v-model="registerForm.userPhone"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="registerForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="registerForm.userPswd"></el-input>
            </el-form-item>
            <el-form-item label="药店名">
                <el-input v-model="registerForm.drugstoreName"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="register">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<script>
    import axios from 'axios'
    import qs from 'qs'
    export default {
        data () {
            return {
                respcd: '0000',
                url: '',
                form: {
                    username: '',
                    password: ''
                },
                loading: false,
                loginRules: {
                    username: [
                        { required: true, message: '请输入电话号码' }
                    ],
                    password: [
                        { required: true, message: '请输入密码' }
                    ]
                },
                centerDialogVisible: false,
                registerForm: {
                    userPhone: '',
                    userName: '',
                    userPswd: '',
                    drugstoreName: ''
                }
            }
        },
        created (){

        },
        methods: {
            axiosLR(){
                let params = {
                    userPhone: this.registerForm.userPhone,
                    username: this.registerForm.userName,
                    userPswd: this.registerForm.userPswd,
                    drugstoreName: this.registerForm.drugstoreName,
                    
                }
                axios.post(this.url, qs.stringify(params), {
                    headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then((res) => {
                    let data = res.data
                    console.log(res)
                })
            },
            login() {
                this.url = 'api/drugstore/sept/user/register'
                this.axiosLR()
            },
            register() {
                this.url = 'api/drugstore/sept/user/register'
                this.axiosLR()
            }
        }
    }
</script>
<style lang='scss'>
#login {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #00ccff; 
    // background: url('../../assets/img/login/background.jpeg') 0 0 no-repeat #f7f7f7;
    background-size: cover;
    background-position: 100% top;
    overflow: auto;
    .register_btn {
        color: #FFFAF0;
        width: 65px;
        height: 20px;
        font-size: 15px;
        padding: 5px;
        margin-left: 85vw;
        margin-top: 2vh;
        border:1px solid #FFFAF0;
        border-radius: 2px;
    }
    .login_input {
        display:flex;
        justify-content: center;
        margin-top: 15vh;
        .el-form-item__label {
            color: #000;
        }
        .el-form-item__label:before,.el-form-item__label:after {
          content: '';
        }
        .login_input_title {
            margin-right: 230px;
            color: 	#FFFAF0;
            font-size: 24px;
        }
        .el-form {
            background: #fff;
            h4 {
                    color:#00ccff;
                    text-align: center;
                }
            .el-form-item {
                margin: 10px;
            }
        }
        .submit-btn {
            background: #00ccff;
            border-radius: 5px;
            text-align: center;
            color: #FFFAF0;
        }
    }
}
</style>