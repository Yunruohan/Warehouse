<template>
    <div class="order">
        <section class="buy_form">
            <h3>采购订单新增</h3>
            <el-form>
                <el-form-item label="药品编号">
                    <el-input
                        type="text"
                        v-model="form.drugId"
                    ></el-input>
                </el-form-item>
                <el-form-item label="药品名称">
                    <el-input
                        type="text"
                        v-model="form.drugName"
                    ></el-input>
                </el-form-item>
                <el-form-item label="采购数量">
                    <el-input
                        type="text"
                        v-model="form.quantity"
                    ></el-input>
                </el-form-item>
                <el-form-item label="采购价格">
                    <el-input
                        type="text"
                        v-model="form.price"
                    ></el-input>
                </el-form-item>
                <el-form-item label="生产厂家">
                    <el-input
                        type="text"
                        v-model="form.supplier"
                    ></el-input>
                </el-form-item>
                <el-form-item label="采购日期">
                    <el-date-picker
                        v-model="form.date"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd HH-mm-ss">
                    </el-date-picker>
                </el-form-item>
            </el-form>
        </section>
        <section class="submit_btn">
            <el-button type="primary" @click="axiosLR()">提交</el-button>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                drugId: '',
                drugName: '',
                quantity: '',
                price: '',
                supplier: '',
                date: ''

            }
        }
    },
    created(){

    },
    methods: {
        axiosLR(){
            let url = 'api/drugstore/sept/purchase'
            let params = {
                drugId:this.form.drugId,
                drugName:this.form.drugName,
                quantity:this.form.quantity,
                price:this.form.price,
                supplier:this.form.supplier,
                date:this.form.date,
                userPhone:this.$store.state.userPhone
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
                        message: '提交成功'
                    });
                    this.form.drugId = ''
                    this.form.drugName = ''
                    this.form.quantity = ''
                    this.form.price = ''
                    this.form.supplier = ''
                    this.form.date = ''
                    this.form.date = ''
                }
            })
        },
    }
}
</script>
<style lang="scss">
.order {
    margin: 20px;
    .buy_form {
        width: 100%;
        height: 400px;
        .el-form-item {
            width: 200px;
            float: left;
            margin-top: 30px;
            margin-right: 30px;
        }
        .icon_remove {
            .el-form-item__content {
                font-size: 24px;
                .el-icon-remove {
                    color: #409EFF;
                }      
            }
        }
    }
     
    .submit_btn {
        .el-button {
            margin-left: 30vw;
        }
    }
}
</style>


