<template>
    <div class="kucunList">
        <div class="search">
             <el-form :model="form">
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
       
        <h3>库存列表</h3>
        <el-table
                :data="tableData"
            >
            <el-table-column prop="drugId" label="药品编号"></el-table-column>
            <el-table-column prop="drugName" label="药品名"></el-table-column>
            <el-table-column prop="stockNum" label="库存数量"></el-table-column>
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
            let url = 'api/drugstore/sept/stock/show'
            let params = {
                key: this.form.key,
                userPhone: this.$store.state.userPhone                
            }
            axios.post(url, JSON.stringify(params), {
                headers: {
                'Content-Type': 'application/json'
                }
            }).then((res) => {
                let data = res.data
                console.log(data.data[0])
                this.tableData = data.data[0]
            })
        },
    }
}
</script>
<style lang="scss">
.kucunList {
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
        width: 90%;
    }
}
</style>


