<template>
    <div class="order">
        <section class="buy_form">
            <h3>退货订单新增</h3>
            <div v-for="item in form" :key="item.id">
                <div style="width:1000px">
                <el-form>
                    <el-form-item label="药品编号">
                        <el-input
                            type="text"
                            v-model="item.drugId"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="药品数量">
                        <el-input
                            type="number"
                            v-model="item.quantity"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="药品价格">
                        <el-input
                            type="number"
                            v-model="item.price"
                        ></el-input>
                    </el-form-item>
                    <el-form-item class="icon_remove" style="width:200px;margin-top:75px;">
                        <i class="el-icon-circle-plus" @click="regplus()"></i>
                    </el-form-item>
                </el-form>
                </div>
            </div>  
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
            id : 1,
            form: [
                { id:1, orderType: 2, drugId: '',quantity: '',price: '', userPhone: this.$store.state.userPhone}
            ]
        }
    },
    created(){

    },
    methods: {
        regplus() {
            let item = {
                id: this.id++,
                orderType: 2,
                drugId: '',
                quantity: '',
                price: '',
                userPhone: this.$store.state.userPhone
            }
            this.form.push(item)
        },
        axiosLR(){
            let url = 'api/drugstore/sept/order/sell'
            this.form.forEach( e => {
                e.quantity = Number(e.quantity)
                e.price =  Number(e.price*100/100)
            })
            let form = JSON.stringify(this.form)
            let params = {
                data: this.form
            }
            console.log(JSON.stringify(params))
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
                    this.form = [
                         { id:1, orderType: 2, drugId: '',quantity: '',price: '', userPhone: this.$store.state.userPhone}
                    ]
                }
            })
        },
    }
}
</script>
<style lang="scss">
.order {
    margin: 20px;
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
    .submit_btn {
        .el-button {
            margin-left: 30vw;
        }
    }
}
</style>


