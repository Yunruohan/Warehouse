<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff" 
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
                    <el-menu-item-group>
                        <el-menu-item index="1-1">销售退货</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location">采购</i>
                        <span></span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">采购订单</el-menu-item>
                        <el-menu-item index="1-2">采购历史</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location">仓库</i>
                        <span></span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">查库存</el-menu-item>
                        <el-menu-item index="1-2">库存预警设置</el-menu-item>
                        <el-menu-item index="1-3">库存预警查询</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location">订单</i>
                        <span></span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">销售订单</el-menu-item>
                        <el-menu-item index="1-2">销售退货单</el-menu-item>
                        <el-menu-item index="1-2">销售换货单</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-location">会员</i>
                        <span></span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">会员账户</el-menu-item>
                        <el-menu-item index="1-2">会员申请管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
  export default {
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
<style lang="scss">
.tac {

}
    
</style>
