<template>
    <div class="vipList">
        <div class="search">
             <el-form :model="form">
                <el-form-item label="开始时间">
                    <el-date-picker
                        v-model="form.beginTime"
                        type="datetime"
                        placeholder="选择开始时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间">
                    <el-date-picker
                        v-model="form.endTime"
                        type="datetime"
                        placeholder="选择结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="查找字符串">
                    <el-input
                        type="text"
                        v-model="form.key">
                    </el-input>
                </el-form-item>
                <!-- <el-form-item label="用户手机号">
                    <el-input
                        type="text"
                        v-model="form.userPhone">
                    </el-input>
                </el-form-item> -->
                <el-button style="margin-top: 70px;" @click="axiosLR">查询</el-button>
            </el-form>
        </div>
       
        <h3>会员账户列表</h3>
        <el-table
                :data="tableData"
            >
            <el-table-column prop="vipPhone" label="用户手机号"></el-table-column>
            <el-table-column prop="vipName" label="用户名"></el-table-column>
            <el-table-column prop="integral" label="用户积分"></el-table-column>
            <el-table-column prop="date" label="结束时间"></el-table-column>
        </el-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            tableData: [],
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
            let url = 'api/drugstore/sept/vip/show'
            let params = {
                beginTime: this.form.beginTime,
                endTime: this.form.endTime,
                key: this.form.key,
                userPhone: this.$store.state.userPhone                
            }
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
.vipList {
    margin-left: 20px;
    .search {
        width: 100%;
        height: 140px;
    }
    .el-form-item {
        width: 200px;
        float: left;
        margin-top: 30px;
        margin-right: 30px;
    }
    .el-table {
        width: 95%;
    }
}
</style>


