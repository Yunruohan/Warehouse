<template>
    <div class="buyList">
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
                        type="password"
                        v-model="form.key">
                    </el-input>
                </el-form-item>
                <!-- <el-form-item label="用户手机号">
                    <el-input
                        type="password"
                        v-model="form.userPhone">
                    </el-input>
                </el-form-item> -->
            </el-form>
        </div>
       
        <h3>采购订单列表</h3>
        <el-table
                :data="tableData"
            >
            <el-table-column prop="drugId" label="药品编号"></el-table-column>
            <el-table-column prop="drugName" label="药品名"></el-table-column>
            <el-table-column prop="quantity" label="药品数量"></el-table-column>
            <el-table-column prop="price" label="药品价格（单位：元）"></el-table-column>
            <el-table-column prop="supplier" label="生成厂家"></el-table-column>
            <el-table-column prop="date" label="采购日起"></el-table-column>

        </el-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            tableData: [
                {
                    drugId: "12345671234567",
                    drugName: "999感冒灵",
                    quantity: 66,
                    price: 2.50 ,
                    supplier: "石家庄药厂",
                    date: "2019-05-08 01:05:40",
                },
                {
                    drugId: "12345671234567",
                    drugName: "阵痛药",
                    quantity: 66,
                    price: 2.50 ,
                    supplier: "呼和浩特药厂",
                    date: "2019-05-08 01:05:40",
                },
                {
                    drugId: "12345671234567",
                    drugName: "抗溃疡药",
                    quantity: 66,
                    price: 23.50 ,
                    supplier: "合肥药厂",
                    date: "2019-05-08 01:05:40",
                },
                {
                    drugId: "12345671234567",
                    drugName: "阿莫西林",
                    quantity: 66,
                    price: 10.00 ,
                    supplier: "阜阳药厂",
                    date: "2019-05-08 01:05:40",
                }

            ],
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
            let url = 'api/drugstore/sept/purchase/show'
            let params = this.form
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
.buyList {
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


