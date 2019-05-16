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
                    <el-input
                        type="text"
                        v-model="form.date"
                    ></el-input>
                </el-form-item>
                <el-form-item class="icon_remove" style="width:20px;margin-top:75px;">
                    <i class="el-icon-circle-plus"></i>
                </el-form-item>
            </el-form>
        </section>
        <section class="submit_btn">
            <el-button type="primary">提交</el-button>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                drugId: '',
                drugName: '',
                quantity: '',
                price: ''
            }
        }
    },
    created(){

    },
    methods: {

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


