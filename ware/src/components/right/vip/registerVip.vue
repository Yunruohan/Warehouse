<template>
    <div class="registerVip">
        <h3>会员注册</h3>
        <section class="registerVip_form">
            <el-form :model="form">
                <el-form-item label="vip手机号">
                    <el-input
                        type="text"
                        v-model="form.vipPhone">
                    </el-input>
                </el-form-item>
                <el-form-item label="vip用户名">
                    <el-input
                        type="text"
                        v-model="form.vipName">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="margin-top: 40px;" @click="axiosLR()">注册</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>
<script>
import axios from  'axios'
export default {
    data() {
        return {
            form: {
                vipPhone: '',
                vipName: ''
            }
        }
    },
    created() {
    },
    methods: {
        axiosLR(){
            let url = 'api/drugstore/sept/vip/register'
            console.log(this.$store.state.userPhone)
            let params = {
                vipPhone:this.form.vipPhone,
                vipName:this.form.vipName,
                userPhone: this.$store.state.userPhone
            }
            axios.post(url, JSON.stringify(params), {
                headers: {
                'Content-Type': 'application/json'
                }
            }).then((res) => {
                let data = res.data
                if(data.data.result) {
                    this.$message({
                        showClose: true,
                        message: '成功提交'
                    });
                    this.form.vipPhone = ''
                    this.form.vipName = ''
                }
            })
        },
    }
}
</script>
<style lang="scss">
    .registerVip {
        margin: 20px;
        .registerVip_form {
            width: 100%;
            height: 170px;
        }
        .el-form-item {
            width: 200px;
            float: left;
            margin-right: 30px;
            margin-top: 30px;
        }
    }
</style>