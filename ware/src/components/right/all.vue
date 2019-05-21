<template>
    <div id="right">
        <h3>销售</h3>
        <el-row>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/dingdan/xiaoshou.png" alt="">
                        <div class="title_text">销售</div>
                    </div>
                </el-card>
            </el-col>
             <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/dingdan/huanhuo.png" alt="">
                        <div class="title_text">换货</div>
                    </div>
                </el-card>
            </el-col>
             <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/dingdan/tuihuo.png" alt="">
                        <div class="title_text">退货</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <h3>采购</h3>
        <el-row>
             <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/caigou/caigou.png" alt="">
                        <div class="title_text">注册采购订单</div>
                    </div>
                </el-card>
            </el-col>
             <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/caigou/caigoulishi.png" alt="">
                        <div class="title_text">采购列表</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <h3>仓库</h3>
        <el-row>
             <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/cangku/kucun.png" alt="">
                        <div class="title_text">库存查询</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/cangku/warn.png" alt="">
                        <div class="title_text">库存警告</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <h3>订单</h3>
        <el-row>
             <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/dingdan/tuihuo.png" alt="">
                        <div class="title_text">退货订单</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/dingdan/huanhuo.png" alt="">
                        <div class="title_text">换货订单</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/dingdan/xiaoshou.png" alt="">
                        <div class="title_text">销售订单</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <h3>会员</h3>
        <el-row>
             <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/vip/vip1.png" alt="">
                        <div class="title_text">注册会员</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card :body-style="{ padding: '0px' }">
                    <div class="title">
                        <img src="../../assets/vip/vip1.png" alt="">
                        <div class="title_text">会员列表</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<style lang="scss">
#right {
    margin: 30px;
    .title {
        display: flex;
        .title_text {
            margin-top: 10px;
            align-items: center;
        }
    }
    .el-card {
        width: 200px;
        height: 70px;
    }
    img {
        width: 50px;
        height: 50px;
        margin: 10px;

    }
}
</style>