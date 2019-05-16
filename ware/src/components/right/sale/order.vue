<template>
    <div class="order">
        <section class="buy_form">
            <h3>销售订单新增</h3>
            <el-form>
                <el-form-item label="药品编号">
                    <el-input
                        type="text"
                        v-model="form.drugId"
                    ></el-input>
                </el-form-item>
                <el-form-item label="药品数量">
                    <el-input
                        type="text"
                        v-model="form.quantity"
                    ></el-input>
                </el-form-item>
                <el-form-item label="药品价格">
                    <el-input
                        type="text"
                        v-model="form.price"
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


