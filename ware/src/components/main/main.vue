<template>
    <div id="main">
        <div class="title">
            <ul class="title_ul">
                <li>
                    <img src="../../assets/logo1.jpg">
                </li>
                <li>范小宇的健康药店</li>
                <li>欢迎您!范小宇</li>
            </ul>
        </div>
        <el-row>
            <el-col :span="4">
                <el-menu
                router
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#FFFFF0"
                text-color="#000" 
                active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">全部</span>
                </el-menu-item>
                <el-submenu index="2"> 
                    <template slot="title">
                        <i class="el-icon-location">销售</i>
                        <span></span>
                    </template>
                    <el-menu-item index="/main/order_x_r">注册销售订单</el-menu-item>
                    <el-menu-item index="/main/order_h_r">注册换货订单</el-menu-item>
                    <el-menu-item index="/main/order_t_r">注册退货订单</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location">采购</i>
                        <span></span>
                    </template>
                    <el-menu-item index="/main/register_buy">注册采购订单</el-menu-item>
                    <el-menu-item index="/main/stockList">采购订单列表</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location">仓库</i>
                        <span></span>
                    </template>
                    <el-menu-item index="/main/ckList">库存查询</el-menu-item>
                    <el-menu-item index="/main/yjList">库存预警查询</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location">订单</i>
                        <span></span>
                    </template>
                    <el-menu-item index="/main/order_x">销售订单</el-menu-item>
                    <el-menu-item index="/main/order_t">销售退货单</el-menu-item>
                    <el-menu-item index="/main/order_h">销售换货单</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-location">会员</i>
                        <span></span>
                    </template>
                    <el-menu-item index="/main/registerVip">会员账户注册</el-menu-item>
                    <el-menu-item index="/main/vipList">会员账户列表</el-menu-item>
                </el-submenu>
            </el-menu>
            </el-col>
            <el-col :span="20">
                <router-view/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
  export default {
      data () {
          return {
              drugstoreName: '',
              userName: ''
          }
      },
      created() {
          if(this.$store.state.drugstoreName && this.$store.state.userName) {
              this.drugstoreName = this.this.$store.state.drugstoreName
              this.userName = this.$store.state.userName
          }
      },
      methods: {
          handleOpen(key, keyPath) {
                console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
      }
  }
</script>
<style lang='scss'>
#main {
   .title {
       width: 100%;
       height:80px;
   }
   .title_ul {
       li {
           list-style: none;
           float: left;
           img {
               width: 100px;
               height: 60px;
           }
       }
       li:nth-child(2) {
           margin-top: 20px;
           margin-left: 20px;
       }
       li:nth-child(3) {
           margin-left: 70vw;
           color: #87CEFA;
       }

       
   }
   .el-row {
       background: #FFF5EE;
   }
    .el-menu {
        // height: auto;
        // overflow: hidden;
		// margin-bottom: -10000px;
		// padding-bottom: 10000px; 
    }
}

</style>