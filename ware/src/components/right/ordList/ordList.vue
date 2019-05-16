<template>
    <div class="orderList1">
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
       
        <h3>退货表单列表</h3>
        <el-table
                :data="tableData"
            >
            <el-table-column prop="vipPhone" label="用户手机号"></el-table-column>
            <el-table-column prop="drugId" label="药品编号"></el-table-column>
            <el-table-column prop="quantity" label="药品数量"></el-table-column>
            <el-table-column prop="price" label="药品价格(单位：元）"></el-table-column>
            <el-table-column prop="date" label="退款日期"></el-table-column>
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
                    orderId: 1,
                    orderType: 1,
                    vipPhone: "15846852589",
                    drugId: "1234561234567" ,
                    quantity: 5,
                    price: 22.50,
                    date: "2019-01-01 00:00:00",
                },
                {
                    orderId: 1,
                    orderType: 1,
                    vipPhone: "15846852589",
                    drugId: "12345671234567" ,
                    quantity: 8,
                    price: 82.00,
                    date: "2019-01-01 00:00:00",
                },
                {
                    orderId: 1,
                    orderType: 1,
                    vipPhone: "15846852589",
                    drugId: "12399671234567" ,
                    quantity: 9,
                    price: 19.50,
                    date: "2019-01-01 00:00:00",
                },
                {
                    orderId: 1,
                    orderType: 1,
                    vipPhone: "15846852589",
                    drugId: "12345966234567" ,
                    quantity: 12,
                    price: 12.60,
                    date: "2019-01-01 00:00:00",
                },
                {
                    orderId: 1,
                    orderType: 1,
                    vipPhone: "15846852589",
                    drugId: "123457671234567" ,
                    quantity: 5,
                    price: 78.00,
                    date: "2019-01-01 00:00:00",
                },
                {
                    orderId: 1,
                    orderType: 1,
                    vipPhone: "15846852589",
                    drugId: "12345671234567" ,
                    quantity: 5,
                    price: 12.50,
                    date: "2019-01-01 00:00:00",
                }
            ],
            form: {
                orderType: 2,
                beginTime: '',
                endTime: '',
                key: '',
                userPhone: ''
            }
        }
    },
    created() {
    },
    methods: {
        axiosLR(){
            let url = 'api/drugstore/sept/order/show'
            let params = {
                orderType: this.form.orderType,
                beginTime: this.form.beginTime,
                endTime: this.form.endTime,
                key: this.form.key,
                userPhone: this.form.userPhone                
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
.orderList1 {
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


