<template>
    <div class="registerVip">
        <h3>会员注册</h3>
        <section class="registerVip_form">
            <el-form :model="form">
                <el-form-item label="手机号">
                    <el-input
                        type="text"
                        v-model="form.username">
                    </el-input>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input
                        type="password"
                        v-model="form.password">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input
                        type="password"
                        v-model="form.password">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button style="margin-top: 40px;">注册</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                beginTime: '',
                endTime: '',
                key: '',
                userPhone: ''
            }
        }
    },
    created() {
        this.axiosLR()
    },
    methods: {
        axiosLR(){
            let url = 'api/drugstore/sept/vip/register'
            axios.post(url, JSON.stringify(params), {
                headers: {
                'Content-Type': 'application/json'
                }
            }).then((res) => {
                let data = res.data
                console.log(data)
                this.tableData = data.data.data
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